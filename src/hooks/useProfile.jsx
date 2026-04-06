import React from 'react'
import {useQuery} from "@tanstack/react-query";
import i18n from "i18next";
import authAxiosInstance from "../api/authAxiosInstance.js";

export default function UseProfile() {
    return useQuery({
        queryKey: ['profile', i18n.language],
        queryFn: async () => {
            const response = await authAxiosInstance.get('/Profile');
            return response.data;
        },
        staleTime: 1000*60*5, // 5 minutes
    })
}
