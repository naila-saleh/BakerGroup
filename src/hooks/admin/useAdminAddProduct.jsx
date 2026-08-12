import { useMutation, useQueryClient } from "@tanstack/react-query";
import authAxiosInstance from "../../api/authAxiosInstance.js";

export default function UseAdminAddProduct() {
    const queryClient = useQueryClient();

    const addProduct = async (productData) => {
        const formData = new FormData();

        // Add text fields
        if (productData.name) formData.append('Name', productData.name);
        if (productData.nameAr) formData.append('NameAr', productData.nameAr);
        if (productData.description) formData.append('Description', productData.description);
        if (productData.descriptionAr) formData.append('DescriptionAr', productData.descriptionAr);
        if (productData.categoryId) formData.append('CategoryId', productData.categoryId);
        if (productData.price) formData.append('Price', productData.price);
        if (productData.quantity) formData.append('Quantity', productData.quantity);
        if (productData.discount !== undefined && productData.discount !== null) formData.append('Discount', productData.discount);
        if (productData.status !== undefined && productData.status !== null) formData.append('Status', productData.status);

        // Add MainImage file
        if (productData.mainImage) {
            formData.append('MainImage', productData.mainImage);
        }

        // Add SubImages array (multiple files)
        if (productData.subImages && Array.isArray(productData.subImages)) {
            productData.subImages.forEach((file) => {
                formData.append('SubImages', file);
            });
        }

        const response = await authAxiosInstance.post('/Admin/Products', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return response.data;
    };

    return useMutation({
        mutationFn: addProduct,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['products'] });
        },
    });
}
