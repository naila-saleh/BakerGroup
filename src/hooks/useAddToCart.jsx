import React from 'react'
import {useMutation} from "@tanstack/react-query";
import authAxiosInstance from "../api/authAxiosInstance.js";
export default function UseAddToCart() {
    const mutation = useMutation({
        mutationFn: async ({ProductId, Count}) => {
            return await authAxiosInstance.post('/Carts', {
                ProductId: ProductId,
                Count: Count
            });
        }
    });
    return mutation;
}
