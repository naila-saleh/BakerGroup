import {useQuery} from "@tanstack/react-query";
import i18n from "i18next";
import authAxiosInstance from "../../api/authAxiosInstance.js";

export default function UseAdminProduct(id) {
    const getProduct = async () => {
        const [currentResponse, englishResponse, arabicResponse] = await Promise.all([
            authAxiosInstance.get(`Admin/Products/${id}`),
            authAxiosInstance.get(`Admin/Products/${id}`, { headers: { 'Accept-Language': 'en' } }),
            authAxiosInstance.get(`Admin/Products/${id}`, { headers: { 'Accept-Language': 'ar' } }),
        ]);
        const current = currentResponse.data || {};
        const english = englishResponse.data || {};
        const arabic = arabicResponse.data || {};

        return {
            ...current,
            nameEn: english.name || english.nameEn,
            descriptionEn: english.description || english.descriptionEn,
            nameAr: arabic.name || arabic.nameAr,
            descriptionAr: arabic.description || arabic.descriptionAr,
        };
    }
    const query = useQuery({
        queryKey: ['product', i18n.language, id],
        queryFn: getProduct,
        staleTime: 1000*60*5, // 5 minutes
    })
    return query;
}
