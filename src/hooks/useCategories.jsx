import React from 'react'
import {useQuery} from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance.js";
import i18n from "i18next";

export default function UseCategories(limit = 1000) {
    const getCategories = async () => {
        const response = await axiosInstance.get(`/categories?limit=${limit}`);
        return response.data;
    }
    const query = useQuery({
        queryKey: ['categories',i18n.language,limit],
        queryFn: getCategories,
        staleTime: 1000*60*5, // 5 minutes
    });
    return query;
}
