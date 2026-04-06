import axios from "axios";
import useAuthStore from "../store/useAuthStore.js";
import axiosInstance from "./axiosInstance.js";
import i18n from "i18next";

const authAxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BURL,
    withCredentials: true,
});

authAxiosInstance.interceptors.request.use((config) => {
    const {token} = useAuthStore.getState();
    config.headers['Accept-Language'] = i18n.language;
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    } else {
        delete config.headers.Authorization;
    }
    return config;
})
authAxiosInstance.interceptors.response.use((response) => response, async (error) => {
    const originalRequest = error.config;
    const token = useAuthStore.getState().token;
    if(error.response?.status === 401 && !originalRequest._retry && token) {
        originalRequest._retry = true;
        try{
            const refreshResponse = await axiosInstance.post(`/auth/Account/RefreshToken`, {}, {withCredentials: true});
            const newAccessToken = refreshResponse.data.accessToken;
            useAuthStore.getState().setToken(newAccessToken);
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return authAxiosInstance(originalRequest);
        } catch (e) {
            console.log("error: ", e);
            useAuthStore.getState().logout();
            return Promise.reject(e);
        }
    }

    return Promise.reject(error);
});

export default authAxiosInstance;