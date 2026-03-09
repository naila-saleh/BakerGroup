import React from 'react'
import {useQuery} from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance.js";

export default function UseCategories() {
    const getCategories = async () => {
        const response = await axiosInstance.get(`/categories?limit=1000`);
        return response.data;
    }
    const query = useQuery({
        queryKey: ['categories','en'],
        queryFn: getCategories,
        staleTime: 1000*60*60*24*7
    });
    return query;
}
