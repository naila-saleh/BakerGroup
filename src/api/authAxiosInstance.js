import axios from "axios";
import useAuthStore from "../store/useAuthStore.js";
import axiosInstance from "./axiosInstance.js";

const authAxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BURL,
    withCredentials: true,
});

authAxiosInstance.interceptors.request.use((config) => {
    const {token} = useAuthStore.getState();
    config.headers['Accept-Language'] = 'en';
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})
authAxiosInstance.interceptors.response.use((response) => response, async (error) => {
    const originalRequest = error.config;
    const {token} = useAuthStore.getState();
    console.log("originalRequest: ",originalRequest);
    if(error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try{
            console.log("1st token : ",token);
            const refreshResponse = await axiosInstance.post(`/auth/Account/RefreshToken`, {}, {withCredentials: true});
            console.log("Refresh token : ",refreshResponse);
            const newAccessToken = refreshResponse.data.accessToken;
            useAuthStore.getState().setToken(newAccessToken);
            console.log("new token : ",newAccessToken);
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            console.log("2nd token : ",token);
            return authAxiosInstance(originalRequest);
        }catch (e) {
            console.log("error: ",e);
            return Promise.reject(e);
        }
    }
    return Promise.reject(error);
})
export default authAxiosInstance;