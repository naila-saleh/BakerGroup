import React from 'react'
import axiosInstance from "../../api/axiosInstance.js";
import {useQuery} from "@tanstack/react-query";
import i18n from "i18next";
import authAxiosInstance from "../../api/authAxiosInstance.js";

export default function UseAdminProducts({pageNumber = 1, pageSize = 4, sortBy = '', ascending = '', minPrice , maxPrice, search } = {}) {
    const getProducts = async () => {
        const params = {
            PageNumber : pageNumber,
            PageSize : pageSize
        };
        if (sortBy && ascending !== '') {
            params.sortBy = sortBy;
            params.ascending = ascending === 'true';
        }
        if (typeof minPrice === 'number') params.minPrice = minPrice;
        if (typeof maxPrice === 'number') params.maxPrice = maxPrice;
        if (search) params.search = search;
        const response = await authAxiosInstance.get(`/Admin/Products`, {params});
        return response.data.items;
    };

    return useQuery({
        queryKey: ['products', i18n.language, pageNumber, pageSize, sortBy, ascending, minPrice, maxPrice, search],
        queryFn: getProducts,
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
}
