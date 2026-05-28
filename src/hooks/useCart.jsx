import React from 'react'
import {useQuery} from "@tanstack/react-query";
import authAxiosInstance from "../api/authAxiosInstance.js";
import i18n from "i18next";

export default function UseCart() {
    const getItems = async () => {
        const response = await authAxiosInstance.get(`/User/Products`);
        return response.data;
    }
    const query = useQuery({
        queryKey: ['cart', i18n.language],
        queryFn: getItems,
        staleTime: 1000*60*5, // 5 minutes
    });
    return query;
}
