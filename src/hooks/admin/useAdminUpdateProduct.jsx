import { useMutation, useQueryClient } from "@tanstack/react-query";
import authAxiosInstance from "../../api/authAxiosInstance.js";

const invalidateProducts = (queryClient) => Promise.all([
    queryClient.invalidateQueries({ queryKey: ["products"] }),
    queryClient.invalidateQueries({ queryKey: ["product"] }),
]);

const append = (formData, key, value) => {
    if (value !== undefined && value !== null) formData.append(key, value);
};

export default function useAdminUpdateProduct() {
    const queryClient = useQueryClient();
    const afterUpdate = () => invalidateProducts(queryClient);

    const updateProduct = useMutation({
        mutationFn: async ({ id, product }) => {
            const formData = new FormData();
            append(formData, "Name", product.name);
            append(formData, "NameAr", product.nameAr);
            append(formData, "Description", product.description);
            append(formData, "DescriptionAr", product.descriptionAr);
            append(formData, "Price", product.price);
            append(formData, "Discount", product.discount);
            append(formData, "Quantity", product.quantity);
            append(formData, "CategoryId", product.categoryId);
            append(formData, "Status", product.status);
            const response = await authAxiosInstance.patch(`/Admin/Products/${id}`, formData, { headers: { "Content-Type": "multipart/form-data" } });
            return response.data;
        },
        onSuccess: afterUpdate,
    });

    const toggleStatus = useMutation({
        mutationFn: async (id) => (await authAxiosInstance.patch(`/Admin/Products/${id}/toggle-status`)).data,
        onSuccess: afterUpdate,
    });

    const updateMainImage = useMutation({
        mutationFn: async ({ id, file }) => {
            const formData = new FormData();
            formData.append("MainImage", file);
            return (await authAxiosInstance.put(`/Admin/Products/${id}/main-image`, formData, { headers: { "Content-Type": "multipart/form-data" } })).data;
        },
        onSuccess: afterUpdate,
    });

    const deleteMainImage = useMutation({
        mutationFn: async (id) => (await authAxiosInstance.delete(`/Admin/Products/${id}/main-image`)).data,
        onSuccess: afterUpdate,
    });

    const addSubImages = useMutation({
        mutationFn: async ({ id, files }) => {
            const formData = new FormData();
            files.forEach((file) => formData.append("SubImages", file));
            return (await authAxiosInstance.post(`/Admin/Products/${id}/sub-images`, formData, { headers: { "Content-Type": "multipart/form-data" } })).data;
        },
        onSuccess: afterUpdate,
    });

    const deleteSubImage = useMutation({
        mutationFn: async ({ id, subImageId }) => (await authAxiosInstance.delete(`/Admin/Products/${id}/sub-images/${subImageId}`)).data,
        onSuccess: afterUpdate,
    });

    return { updateProduct, toggleStatus, updateMainImage, deleteMainImage, addSubImages, deleteSubImage };
}
