import React from 'react'
import axiosInstance from "../api/axiosInstance.js";
import {useQuery} from "@tanstack/react-query";
import i18n from "i18next";

export default function UseProducts() {
    const getProducts = async () => {
        const response = await axiosInstance.get(`/products`);
        return response.data;
    }
    const query = useQuery({
        queryKey: ['products', i18n.language],
        queryFn: getProducts,
        staleTime: 1000*60*5, // 5 minutes
    })
    return query;
}
