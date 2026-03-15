import {create} from "zustand";
import {set} from "react-hook-form";

const useAuthStore = create(() => ({
    token: localStorage.getItem('accessToken'),
    setToken: (newToken) => {
        set({
            token: newToken
        });
        localStorage.setItem('accessToken', newToken);
    }
}));

export default useAuthStore;