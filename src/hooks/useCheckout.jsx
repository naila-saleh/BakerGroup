import React from 'react'
import {useMutation, useQueryClient} from "@tanstack/react-query";
import authAxiosInstance from "../api/authAxiosInstance.js";

export default function UseCheckout() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (paymentMethod) => {
            return await authAxiosInstance.post('/Checkouts', {PaymentMethod: paymentMethod});
        },onSuccess: (response) => {
            if(response.data.url) window.open(response.data.url, '_blank')
            queryClient.invalidateQueries({queryKey: ['cart']});
        }
    });
}
