import { useMutation, useQueryClient } from "@tanstack/react-query";
import authAxiosInstance from "../../api/authAxiosInstance.js";

export default function UseAdminDeleteProduct() {
    const queryClient = useQueryClient();

    const deleteProduct = async (id) => {
        if (!id) {
            throw new Error("A product id is required to delete a product.");
        }

        const response = await authAxiosInstance.delete(`/Admin/Products/${id}`);
        return response.data;
    };

    return useMutation({
        mutationFn: deleteProduct,
        onSuccess: async () => {
            await Promise.all([
                queryClient.invalidateQueries({ queryKey: ["products"] }),
                queryClient.invalidateQueries({ queryKey: ["product"] }),
            ]);
        },
    });
}
