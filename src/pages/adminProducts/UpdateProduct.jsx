import { useEffect, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Alert, Box, Button, Card, Container, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Stack, TextField, Typography } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import useAdminProduct from "../../hooks/admin/useAdminProduct.jsx";
import useAdminCategories from "../../hooks/admin/useAdminCategories.jsx";
import useAdminUpdateProduct from "../../hooks/admin/useAdminUpdateProduct.jsx";
import Loader from "../../ui/loader/Loader.jsx";

const imageUrl = (image) => typeof image === "string" ? image : image?.url || image?.imageUrl || image?.imagePath || image?.path || image?.image || image?.fileUrl || "";
const imageId = (image) => typeof image === "object" ? image?.id || image?.subImageId || image?.imageId || image?.fileId || image?.subImage?.id || image?.subImage?.subImageId || image?.data?.id : null;
const firstValue = (...values) => values.find((value) => value !== undefined && value !== null && value !== "") || "";

export default function UpdateProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: product, isLoading, isError, error } = useAdminProduct(id);
    const { data: categoriesData, isLoading: categoriesLoading } = useAdminCategories();
    const { updateProduct, toggleStatus, updateMainImage, deleteMainImage, addSubImages, deleteSubImage } = useAdminUpdateProduct();
    const [mainFile, setMainFile] = useState(null);
    const [mainPreview, setMainPreview] = useState("");
    const [subFiles, setSubFiles] = useState([]);
    const [message, setMessage] = useState(null);
    const [confirmation, setConfirmation] = useState(null);
    const categories = useMemo(() => categoriesData?.items || categoriesData || [], [categoriesData]);
    const subImages = product?.subImages || [];
    const { control, register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        if (!product) return;
        const matchingCategory = categories.find((category) => category.name === product.categoryName || category.name === product.category?.name);
        reset({
            name: firstValue(product.nameEn, product.name, product.title),
            nameAr: firstValue(product.nameAr, product.nameAR, product.nameArabic, product.arabicName, product.name?.ar),
            description: firstValue(product.descriptionEn, product.description),
            descriptionAr: firstValue(product.descriptionAr, product.descriptionAR, product.descriptionArabic, product.arabicDescription, product.description?.ar),
            categoryId: String(firstValue(product.categoryId, product.categoryID, product.category?.id, product.category?.categoryId, matchingCategory?.id)),
            price: product.price ?? "",
            quantity: product.quantity ?? "",
            discount: product.discount ?? 0,
        });
        setMainPreview(imageUrl(product.mainImage));
    }, [product, categories, reset]);

    useEffect(() => {
        if (!mainFile) return undefined;
        const url = URL.createObjectURL(mainFile);
        setMainPreview(url);
        return () => URL.revokeObjectURL(url);
    }, [mainFile]);

    const busy = updateProduct.isPending || toggleStatus.isPending || updateMainImage.isPending || deleteMainImage.isPending || addSubImages.isPending || deleteSubImage.isPending;
    const action = (mutation, variables, success) => {
        setMessage(null);
        mutation.mutate(variables, { onSuccess: () => setMessage({ severity: "success", text: success }), onError: (e) => setMessage({ severity: "error", text: e?.response?.data?.message || e?.message || "Update failed." }) });
    };

    const askConfirmation = (title, description, mutation, variables, success) => {
        setConfirmation({ title, description, mutation, variables, success });
    };

    const confirmAction = () => {
        if (!confirmation) return;
        const { mutation, variables, success } = confirmation;
        setConfirmation(null);
        action(mutation, variables, success);
    };

    const requestSubImageDelete = (image, index) => {
        const subId = imageId(image) || product.subImageIds?.[index] || product.subImagesIds?.[index];
        if (!subId) {
            setMessage({ severity: "error", text: "This image has no sub-image ID in the backend response, so it cannot be deleted yet." });
            return;
        }
        askConfirmation("Delete sub-image?", "This sub-image will be permanently removed.", deleteSubImage, { id, subImageId: subId }, "Sub-image deleted successfully.");
    };

    if (isLoading) return <Loader />;
    if (isError) return <Alert severity="error">{error?.message || "Failed to load product."}</Alert>;

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Button startIcon={<ArrowBackRoundedIcon />} onClick={() => navigate(`/admin/products/${id}`)} sx={{ mb: 2, textTransform: "none" }}>Back to product</Button>
            <Paper sx={{ p: { xs: 2, md: 4 }, borderRadius: 3 }}>
                <Typography variant="h4" sx={{ color: "#2D5356", fontWeight: 700 }}>Update Product</Typography>
                <Typography color="text.secondary" sx={{ mb: 3 }}>Manage product details, status, and images from one page.</Typography>
                {message && <Alert severity={message.severity} onClose={() => setMessage(null)} sx={{ mb: 3 }}>{message.text}</Alert>}

                <Box component="form" onSubmit={handleSubmit((values) => askConfirmation("Save product details?", "Your product name, Arabic information, category, price, quantity, and discount will be updated.", updateProduct, { id, product: values }, "Product details saved successfully."))}>
                    <Typography variant="h6" sx={{ mb: 2 }}>Product information</Typography>
                    <Grid container spacing={2.5}>
                        <Grid size={{ xs: 12, md: 6 }}><TextField fullWidth label="Name" {...register("name", { required: "Name is required" })} error={!!errors.name} helperText={errors.name?.message} /></Grid>
                        <Grid size={{ xs: 12, md: 6 }}><TextField fullWidth label="Name (Arabic)" {...register("nameAr", { required: "Arabic name is required" })} error={!!errors.nameAr} helperText={errors.nameAr?.message} /></Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <FormControl fullWidth>
                                <InputLabel>Category</InputLabel>
                                <Controller
                                    name="categoryId"
                                    control={control}
                                    render={({ field }) => (
                                        <Select {...field} label="Category" disabled={categoriesLoading}>
                                            {categories.map((category) => (
                                                <MenuItem key={category.id} value={String(category.id)}>
                                                    {category.name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    )}
                                />
                            </FormControl>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}><TextField fullWidth type="number" label="Price" {...register("price", { valueAsNumber: true })} /></Grid>
                        <Grid size={{ xs: 12, md: 6 }}><TextField fullWidth type="number" label="Quantity" {...register("quantity", { valueAsNumber: true, min: 0 })} /></Grid>
                        <Grid size={{ xs: 12, md: 6 }}><TextField fullWidth type="number" label="Discount (%)" {...register("discount", { valueAsNumber: true, min: 0, max: 100 })} /></Grid>
                        <Grid size={12}><TextField fullWidth multiline rows={4} label="Description" {...register("description", { required: "Description is required" })} error={!!errors.description} helperText={errors.description?.message} /></Grid>
                        <Grid size={12}><TextField fullWidth multiline rows={4} label="Description (Arabic)" {...register("descriptionAr", { required: "Arabic description is required" })} error={!!errors.descriptionAr} helperText={errors.descriptionAr?.message} /></Grid>
                    </Grid>
                    <Button type="submit" variant="contained" disabled={busy} sx={{ mt: 3, backgroundColor: "#2D5356" }}>{updateProduct.isPending ? "Saving..." : "Save product details"}</Button>
                </Box>

                <Divider sx={{ my: 4 }} />
                <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems={{ xs: "stretch", sm: "center" }} spacing={2}>
                    <Box><Typography variant="h6">Product status</Typography><Typography color="text.secondary">Current status: {product.status ? "Inactive" : "Active"}</Typography></Box>
                    <Button variant="outlined" disabled={busy} onClick={() => askConfirmation("Change product status?", `This will set the product to ${product.status ? "active" : "inactive"}.`, toggleStatus, id, "Product status updated successfully.")}>{toggleStatus.isPending ? "Updating..." : `Set ${product.status ? "active" : "inactive"}`}</Button>
                </Stack>

                <Divider sx={{ my: 4 }} />
                <Typography variant="h6" sx={{ mb: 2 }}>Main image</Typography>
                <Card variant="outlined" sx={{ p: 2 }}>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems={{ xs: "stretch", sm: "center" }}>
                        {mainPreview ? <Box component="img" src={mainPreview} alt={product.name} sx={{ width: 150, height: 120, objectFit: "contain", borderRadius: 2, bgcolor: "grey.100" }} /> : <Box sx={{ width: 150, height: 120, display: "grid", placeItems: "center", bgcolor: "grey.100" }}><ImageOutlinedIcon color="disabled" /></Box>}
                        <Stack spacing={1}>
                            <Button component="label" variant="outlined" startIcon={<ImageOutlinedIcon />} disabled={busy}>Choose replacement<input hidden type="file" accept="image/*" onChange={(e) => setMainFile(e.target.files?.[0] || null)} /></Button>
                            <Stack direction="row" spacing={1}><Button variant="contained" onClick={() => askConfirmation("Replace main image?", "The current main image will be replaced with the selected file.", updateMainImage, { id, file: mainFile }, "Main image updated successfully.")} disabled={!mainFile || busy}>Upload</Button><Button color="error" variant="outlined" startIcon={<DeleteOutlineRoundedIcon />} onClick={() => askConfirmation("Delete main image?", "The main image will be permanently removed.", deleteMainImage, id, "Main image deleted successfully.")} disabled={!product.mainImage || busy}>Delete</Button></Stack>
                        </Stack>
                    </Stack>
                </Card>

                <Divider sx={{ my: 4 }} />
                <Typography variant="h6" sx={{ mb: 2 }}>Sub-images</Typography>
                <Grid container spacing={2} sx={{ mb: 2 }}>
                    {subImages.map((image, index) => { const subId = imageId(image) || product.subImageIds?.[index] || product.subImagesIds?.[index]; return <Grid key={subId || `${imageUrl(image)}-${index}`} size={{ xs: 6, sm: 4, md: 3 }}><Card variant="outlined" sx={{ p: 1 }}><Box component="img" src={imageUrl(image)} alt={`${product.name} ${index + 1}`} sx={{ width: "100%", height: 130, objectFit: "contain" }} /><Button fullWidth size="small" color="error" startIcon={<DeleteOutlineRoundedIcon />} disabled={busy} onClick={() => requestSubImageDelete(image, index)}>Delete</Button></Card></Grid>; })}
                </Grid>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems={{ xs: "stretch", sm: "center" }}>
                    <Button component="label" variant="outlined" startIcon={<AddPhotoAlternateOutlinedIcon />} disabled={busy}>Choose sub-images<input hidden type="file" accept="image/*" multiple onChange={(e) => setSubFiles(Array.from(e.target.files || []))} /></Button>
                    <Typography color="text.secondary">{subFiles.length ? `${subFiles.length} file(s) selected` : "No new files selected"}</Typography>
                    <Button variant="contained" onClick={() => askConfirmation("Add sub-images?", `${subFiles.length} new image(s) will be added to this product.`, addSubImages, { id, files: subFiles }, "Sub-images added successfully.")} disabled={!subFiles.length || busy}>Add images</Button>
                </Stack>
            </Paper>
            <Dialog open={!!confirmation} onClose={() => !busy && setConfirmation(null)} maxWidth="xs" fullWidth>
                <DialogTitle>{confirmation?.title}</DialogTitle>
                <DialogContent><Typography color="text.secondary">{confirmation?.description}</Typography></DialogContent>
                <DialogActions sx={{ p: 2 }}>
                    <Button onClick={() => setConfirmation(null)} disabled={busy}>Cancel</Button>
                    <Button variant="contained" color={confirmation?.title?.toLowerCase().includes("delete") ? "error" : "primary"} onClick={confirmAction} disabled={busy}>Confirm</Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}
