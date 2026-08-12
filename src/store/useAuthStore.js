import {create} from "zustand";

const useAuthStore = create((set) => ({
    token: localStorage.getItem('accessToken'),
    setToken: (newToken) => {
        set({
            token: newToken
        });
        localStorage.setItem('accessToken', newToken);
    },
    setTokens: (accessToken) => {
        set({
            token: accessToken
        });
        localStorage.setItem('accessToken', accessToken);
    },
    logout: () => {
        set({
            token: null
        });
        localStorage.removeItem('accessToken');
    }
}));

export default useAuthStore;