import axiosInstance from "../api/axiosInstance.js";
import {useQuery} from "@tanstack/react-query";
import i18n from "i18next";

export default function useProducts({pageNumber = 1, pageSize = 4, sortBy = '', ascending = '', minPrice , maxPrice, search } = {}) {
    const getProducts = async () => {
        const params = {
            PageNumber : pageNumber,
            PageSize : pageSize
        };
        if (sortBy && ascending !== '') {
            params.SortBy = sortBy;
            params.Ascending = ascending === 'true';
        }
        if (typeof minPrice === 'number') params.MinPrice = minPrice;
        if (typeof maxPrice === 'number') params.MaxPrice = maxPrice;
        if (search) params.Search = search;
        const response = await axiosInstance.get(`/User/Products`, {params});
        return response.data.items;
    };

    return useQuery({
        queryKey: ['products', i18n.language, pageNumber, pageSize, sortBy, ascending, minPrice, maxPrice, search],
        queryFn: getProducts,
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
}