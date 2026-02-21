import React from 'react'
import {useQuery} from "@tanstack/react-query";
import authAxiosInstance from "../api/authAxiosInstance.js";

export default function UseCart() {
    const getItems = async () => {
        const response = await authAxiosInstance.get(`/carts`);
        return response.data;
    }
    const query = useQuery({
        queryKey: ['cart','en'],
        queryFn: getItems,
        staleTime: 1000*60*60*24*7
    });
    return query;
}
