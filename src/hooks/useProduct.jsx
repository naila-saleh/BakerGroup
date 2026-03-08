import React from 'react'
import axiosInstance from "../api/axiosInstance.js";
import {useQuery} from "@tanstack/react-query";

export default function UseProduct(id) {
    const getProduct = async () => {
        const response = await axiosInstance.get(`/products/${id}`);
        return response.data;
    }
    const query = useQuery({
        queryKey: ['product','en',id],
        queryFn: getProduct,
        staleTime: 1000*60*60*24*7
    })
    return query;
}
