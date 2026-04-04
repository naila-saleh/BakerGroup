import React from 'react'
import {useMutation, useQueryClient} from "@tanstack/react-query";
import authAxiosInstance from "../api/authAxiosInstance.js";

export default function UseUpdateCartItem() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async ({productId, count}) => {
            return await authAxiosInstance.patch(`/carts/${productId}`, {count});
        },onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['cart']});
        }
    })
}
