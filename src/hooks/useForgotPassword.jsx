import {useMutation, useQueryClient} from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance.js";

export default function UseForgotPassword() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (email) => {
            return await axiosInstance.post('/auth/Account/SendCode', {email});
        },onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['accessToken']});
        }
    })
}
