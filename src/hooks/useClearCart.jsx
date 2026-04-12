import React from 'react'
import {useMutation, useQueryClient} from "@tanstack/react-query";
import authAxiosInstance from "../api/authAxiosInstance.js";

export default function UseClearCart() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async () => {
            return await authAxiosInstance.delete('/Carts/clear');
        },onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['cart']});
        }
    })
}
