import {useMutation} from "@tanstack/react-query";
import authAxiosInstance from "../api/authAxiosInstance.js";

export default function UseAddReview() {
    return useMutation({
        mutationFn: async (data) => {
            return await authAxiosInstance.post(`/User/Reviews`, {
                rate: data.rating,
                comment: data.comment,
                productId: data.productId
            });
        }
    })
}
