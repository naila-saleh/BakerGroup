import {useMutation, useQueryClient} from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance.js";

export default function UseResetPassword() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (data) => {
            return await axiosInstance.patch('/auth/Account/ResetPassword', data);
        },onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['accessToken']});
        }
    })
}
