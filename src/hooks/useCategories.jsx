import React from 'react'
import {useQuery} from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance.js";

export default function UseCategories(limit = 1000) {
    const getCategories = async () => {
        const response = await axiosInstance.get(`/categories?limit=${limit}`);
        return response.data;
    }
    const query = useQuery({
        queryKey: ['categories','en',limit],
        queryFn: getCategories,
        staleTime: 1000*60*60*24*7
    });
    return query;
}
