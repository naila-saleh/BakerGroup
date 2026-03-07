import React from 'react'
import axiosInstance from "../api/axiosInstance.js";
import {useQuery} from "@tanstack/react-query";

export default function UseProducts() {
    const getProducts = async () => {
        const response = await axiosInstance.get(`/products`);
        return response.data;
    }
    const query = useQuery({
        queryKey: ['products','en'],
        queryFn: getProducts,
        staleTime: 1000*60*60*24*7
    })
    return query;
}
