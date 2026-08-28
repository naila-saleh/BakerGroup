import axios from "axios";
import useAuthStore from "../store/useAuthStore.js";
import axiosInstance from "./axiosInstance.js";
import i18n from "i18next";

const authAxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BURL,
    withCredentials: true,
});

// Queue to handle multiple concurrent 401 errors
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
    failedQueue.forEach((prom) => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });

    failedQueue = [];
};

authAxiosInstance.interceptors.request.use((config) => {
    const {token} = useAuthStore.getState();
    config.headers['Accept-Language'] = config.headers['Accept-Language'] || i18n.language;
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    } else {
        delete config.headers.Authorization;
    }
    return config;
})

authAxiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        const {token} = useAuthStore.getState();

        // Check if this is a refresh-token endpoint error - don't retry it
        const isRefreshEndpoint = originalRequest.url?.includes('/Identity/auth/refresh-token');

        if(error.response?.status === 401 && !originalRequest._retry && token && !isRefreshEndpoint) {
            originalRequest._retry = true;

            if (isRefreshing) {
                // Token is already being refreshed, queue this request
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                }).then(newToken => {
                    originalRequest.headers.Authorization = `Bearer ${newToken}`;
                    return authAxiosInstance(originalRequest);
                }).catch(err => {
                    return Promise.reject(err);
                });
            }

            isRefreshing = true;

            try {
                const refreshResponse = await axiosInstance.post(
                    `/Identity/auth/refresh-token`,
                    {},
                    { withCredentials: true }
                );
                console.log(refreshResponse);

                // Backend responses vary. Try multiple possible shapes.
                const data = refreshResponse.data || {};
                const newAccessToken = data.accessToken || data.token || data.data?.accessToken || data.data?.token;

                if (!newAccessToken) {
                    // No token returned -> treat as failure
                    throw new Error('Refresh endpoint did not return a new access token');
                }

                // Update access token in store
                useAuthStore.getState().setToken(newAccessToken);

                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                processQueue(null, newAccessToken);
                return authAxiosInstance(originalRequest);
            } catch (refreshError) {
                // Helpful debug log in development
                if (import.meta.env.DEV) console.error('Token refresh failed:', refreshError);
                processQueue(refreshError, null);
                useAuthStore.getState().logout();
                // Redirect to client login route. Prefer SPA navigation helper if present
                if (typeof window?.appNavigate === 'function') {
                    window.appNavigate('/auth/login');
                } else {
                    window.location.href = '/auth/login';
                }
                return Promise.reject(refreshError);
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    }
);

export default authAxiosInstance;
