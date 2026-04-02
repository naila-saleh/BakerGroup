import React from 'react'
import {useMutation, useQueryClient} from "@tanstack/react-query";
import authAxiosInstance from "../api/authAxiosInstance.js";

export default function UseRemoveFromCart() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (cartItemId) => {
            return await authAxiosInstance.delete(`/carts/${cartItemId}`);
        }, onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['cart']});
        }
    })
}
