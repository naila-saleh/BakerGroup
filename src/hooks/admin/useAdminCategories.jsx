import {useQuery} from "@tanstack/react-query";
import i18n from "i18next";
import authAxiosInstance from "../../api/authAxiosInstance.js";

export default function UseAdminCategories() {
    const getCategories = async () => {
        const response = await authAxiosInstance.get(`/Admin/Categories`); //?limit=${limit}
        return response.data;
    }
    const query = useQuery({
        queryKey: ['categories',i18n.language],
        queryFn: getCategories,
        staleTime: 1000*60*5, // 5 minutes
    });
    return query;
}
