import {useQuery} from "@tanstack/react-query";
import i18n from "i18next";
import axiosInstance from "../api/axiosInstance.js";

export default function UseGetProductsByCategory(id) {
    const getProducts = async () => {
        const response = await axiosInstance.get(`/User/Categories/${id}`);
        return response.data;
    }
    return useQuery({
        queryKey: ['products', i18n.language, id],
        queryFn: getProducts,
        staleTime: 1000*60*5, // 5 minutes
    })
}
