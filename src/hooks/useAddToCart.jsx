import React from 'react'
import {useMutation, useQueryClient} from "@tanstack/react-query";
import authAxiosInstance from "../api/authAxiosInstance.js";
export default function UseAddToCart() {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: async ({ProductId, Count}) => {
            return await authAxiosInstance.post('/Carts', {
                ProductId: ProductId,
                Count: Count
            });
        }, onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['cart']});
        }
    });
    return mutation;
}
