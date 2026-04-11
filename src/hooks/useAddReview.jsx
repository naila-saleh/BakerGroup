import {useMutation} from "@tanstack/react-query";
import authAxiosInstance from "../api/authAxiosInstance.js";

export default function UseAddReview() {
    return useMutation({
        mutationFn: async (data) => {
            return await authAxiosInstance.post(`/Products/${data.productId}/Reviews`, {
                Rating: data.rating,
                Comment: data.comment
            });
        }
    })
}
