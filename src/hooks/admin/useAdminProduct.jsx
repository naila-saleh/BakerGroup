import {useQuery} from "@tanstack/react-query";
import i18n from "i18next";
import authAxiosInstance from "../../api/authAxiosInstance.js";

export default function UseAdminProduct(id) {
    const getProduct = async () => {
        const response = await authAxiosInstance.get(`Admin/Products/${id}`);
        return response.data;
    }
    const query = useQuery({
        queryKey: ['product', i18n.language, id],
        queryFn: getProduct,
        staleTime: 1000*60*5, // 5 minutes
    })
    return query;
}
