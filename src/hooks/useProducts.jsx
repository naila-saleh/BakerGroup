import axiosInstance from "../api/axiosInstance.js";
import {useQuery} from "@tanstack/react-query";
import i18n from "i18next";

export default function useProducts({sortBy = '', ascending = ''} = {}) {
    const getProducts = async () => {
        const params = {};
        if (sortBy && ascending !== '') {
            params.sortBy = sortBy;
            params.ascending = ascending === 'true';
        }
        const response = await axiosInstance.get(`/products`, {params});
        return response.data;
    };

    return useQuery({
        queryKey: ['products', i18n.language, sortBy, ascending],
        queryFn: getProducts,
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
}