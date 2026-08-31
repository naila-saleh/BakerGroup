import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
    Box,
    Button,
    Container,
    TextField,
    Grid,
    Paper,
    Typography,
    CircularProgress,
    Alert,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    FormHelperText,
} from '@mui/material';
import useAdminAddProduct from '../../hooks/admin/useAdminAddProduct.jsx';
import useCategories from '../../hooks/useCategories.jsx';
import { useTranslation } from 'react-i18next';

// Validation schema
const addProductSchema = yup.object().shape({
    name: yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
    nameAr: yup.string().required('Arabic Name is required').min(3, 'Arabic Name must be at least 3 characters'),
    description: yup.string().required('Description is required').min(10, 'Description must be at least 10 characters'),
    descriptionAr: yup.string().required('Arabic Description is required').min(10, 'Arabic Description must be at least 10 characters'),
    categoryId: yup.string().required('Category is required'),
    price: yup.number().required('Price is required').positive('Price must be positive'),
    quantity: yup.number().required('Quantity is required').min(0, 'Quantity cannot be negative').integer('Quantity must be a whole number'),
    discount: yup.number().min(0, 'Discount cannot be negative').max(100, 'Discount cannot exceed 100').nullable(),
    status: yup.number().required('Status is required').oneOf([0, 1], 'Status must be 0 or 1'),
    // Validate mainImage presence (react-hook-form resolver uses this schema)
    mainImage: yup.mixed().required('Main image is required'),
});

export default function AddProduct() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { mutate, isPending, isError, error, isSuccess } = useAdminAddProduct();
    const { data: categoriesData, isLoading: categoriesLoading } = useCategories();
    const [mainImagePreview, setMainImagePreview] = useState(null);
    const [subImagesPreview, setSubImagesPreview] = useState([]);

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({
        resolver: yupResolver(addProductSchema),
        defaultValues: {
            name: '',
            nameAr: '',
            description: '',
            descriptionAr: '',
            categoryId: '',
            price: '',
            quantity: '',
            discount: 0,
            status: 1,
        },
    });

    const mainImageFile = watch('mainImage');
    const subImagesFiles = watch('subImages');

    // Preview main image
    useEffect(() => {
        if (!mainImageFile?.[0]) {
            setMainImagePreview(null);
            return undefined;
        }

        const previewUrl = URL.createObjectURL(mainImageFile[0]);
        setMainImagePreview(previewUrl);

        return () => URL.revokeObjectURL(previewUrl);
    }, [mainImageFile]);

    // Preview sub images
    useEffect(() => {
        const files = Array.from(subImagesFiles || []);

        if (files.length === 0) {
            setSubImagesPreview([]);
            return undefined;
        }

        const previewUrls = files.map((file) => URL.createObjectURL(file));
        setSubImagesPreview(previewUrls);

        return () => {
            previewUrls.forEach((url) => URL.revokeObjectURL(url));
        };
    }, [subImagesFiles]);

    const onSubmit = (data) => {
        const formData = {
            name: data.name,
            nameAr: data.nameAr,
            description: data.description,
            descriptionAr: data.descriptionAr,
            categoryId: data.categoryId,
            price: data.price,
            quantity: data.quantity,
            discount: data.discount || 0,
            status: data.status,
            mainImage: data.mainImage?.[0],
            subImages: data.subImages ? Array.from(data.subImages) : [],
        };

        mutate(formData, {
            onSuccess: () => {
                navigate('/admin/products');
            },
        });
    };

    const categories = categoriesData?.items || categoriesData || [];

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Paper sx={{ p: 4 }}>
                <Typography variant="h4" component="h1" sx={{ mb: 4, color: '#2D5356' }}>
                    {t('Add New Product')}
                </Typography>

                {isError && (
                    <Alert severity="error" sx={{ mb: 3 }}>
                        {error?.response?.data?.message || error?.message || 'Failed to add product'}
                    </Alert>
                )}

                {isSuccess && (
                    <Alert severity="success" sx={{ mb: 3 }}>
                        Product added successfully! Redirecting...
                    </Alert>
                )}

                <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={3}>
                        {/* English Name */}
                        <Grid size={12}>
                            <TextField
                                fullWidth
                                label={t('Product Name')}
                                placeholder={t("Product name in English")}
                                {...register('name')}
                                error={!!errors.name}
                                helperText={errors.name?.message}
                            />
                        </Grid>

                        {/* Arabic Name */}
                        <Grid size={12}>
                            <TextField
                                fullWidth
                                label={t('Product Name (Arabic)')}
                                placeholder={t('Product Name')}
                                {...register('nameAr')}
                                error={!!errors.nameAr}
                                helperText={errors.nameAr?.message}
                            />
                        </Grid>

                        {/* Category */}
                        <Grid size={12}>
                            <FormControl fullWidth error={!!errors.categoryId}>
                                <InputLabel>{t('Category')}</InputLabel>
                                <Controller
                                    name="categoryId"
                                    control={control}
                                    render={({ field }) => (
                                        <Select {...field} label={t('Category')} disabled={categoriesLoading}>
                                            <MenuItem value="">
                                                <em>Select a category</em>
                                            </MenuItem>
                                            {categories.map((cat) => (
                                                <MenuItem key={cat.id} value={cat.id}>
                                                    {cat.name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    )}
                                />
                                {errors.categoryId && <FormHelperText>{errors.categoryId.message}</FormHelperText>}
                            </FormControl>
                        </Grid>

                        {/* Price */}
                        <Grid size={12}>
                            <TextField
                                fullWidth
                                label={t('Price')}
                                type="number"
                                slotProps={{
                                    input: {
                                        step: '0.01',
                                        min: 0,
                                    }
                                }}
                                {...register('price', { valueAsNumber: true })}
                                error={!!errors.price}
                                helperText={errors.price?.message}
                            />
                        </Grid>

                        {/* Quantity */}
                        <Grid size={12}>
                            <TextField
                                fullWidth
                                label={t('Quantity')}
                                type="number"
                                slotProps={{
                                    input: {
                                        min: 0,
                                    }
                                }}
                                {...register('quantity', { valueAsNumber: true })}
                                error={!!errors.quantity}
                                helperText={errors.quantity?.message}
                            />
                        </Grid>

                        {/* Discount */}
                        <Grid size={12}>
                            <TextField
                                fullWidth
                                label={t('Discount (%)')}
                                type="number"
                                slotProps={{
                                    input: {
                                        step: '0.01',
                                        min: 0,
                                        max: 100,
                                    }
                                }}
                                {...register('discount', { valueAsNumber: true })}
                                error={!!errors.discount}
                                helperText={errors.discount?.message}
                            />
                        </Grid>

                        {/* Status */}
                        <Grid size={12}>
                            <FormControl fullWidth error={!!errors.status}>
                                <InputLabel>{t('Status')}</InputLabel>
                                <Controller
                                    name="status"
                                    control={control}
                                    render={({ field }) => (
                                        <Select {...field} label={t('Status')}>
                                            <MenuItem value={0}>{t('Active')}</MenuItem>
                                            <MenuItem value={1}>{t('Inactive')}</MenuItem>
                                        </Select>
                                    )}
                                />
                                {errors.status && <FormHelperText>{errors.status.message}</FormHelperText>}
                            </FormControl>
                        </Grid>

                        {/* English Description */}
                        <Grid size={12}>
                            <TextField
                                fullWidth
                                label={t('Description')}
                                placeholder="Product description in English"
                                multiline
                                rows={4}
                                {...register('description')}
                                error={!!errors.description}
                                helperText={errors.description?.message}
                            />
                        </Grid>

                        {/* Arabic Description */}
                        <Grid size={12}>
                            <TextField
                                fullWidth
                                label={t('Description (Arabic)')}
                                placeholder="وصف المنتج"
                                multiline
                                rows={4}
                                {...register('descriptionAr')}
                                error={!!errors.descriptionAr}
                                helperText={errors.descriptionAr?.message}
                            />
                        </Grid>

                        {/* Main Image */}
                        <Grid size={12}>
                            <Typography variant="subtitle1" sx={{ mb: 1 }}>
                                {t('Main Image')} *
                            </Typography>
                            <input
                                type="file"
                                accept="image/*"
                                {...register('mainImage', { required: 'Main image is required' })}
                            />
                            {errors.mainImage && (
                                <FormHelperText error>{errors.mainImage.message}</FormHelperText>
                            )}
                            {mainImagePreview && (
                                <Box sx={{ mt: 2 }}>
                                    <img src={mainImagePreview} alt="Preview" style={{ maxWidth: '300px', maxHeight: '300px', borderRadius: '4px', objectFit: 'cover' }} />
                                </Box>
                            )}
                        </Grid>

                        {/* Sub Images */}
                        <Grid size={12}>
                            <Typography variant="subtitle1" sx={{ mb: 1 }}>
                                {t('Sub Images')}
                            </Typography>
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                {...register('subImages')}
                            />
                            <FormHelperText>{t('You can select multiple images')}</FormHelperText>
                            {subImagesPreview.length > 0 && (
                                <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                    {subImagesPreview.map((preview, idx) => (
                                        <img
                                            key={idx}
                                            src={preview}
                                            alt={`Preview ${idx}`}
                                            style={{ maxWidth: '200px', maxHeight: '200px', borderRadius: '4px', objectFit: 'cover' }}
                                        />
                                    ))}
                                </Box>
                            )}
                        </Grid>

                        {/* Submit Buttons */}
                        <Grid size={12} sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                            <Button
                                variant="outlined"
                                onClick={() => navigate('/admin/products')}
                                disabled={isPending}
                            >
                                {t('Cancel')}
                            </Button>
                            <Button
                                variant="contained"
                                type="submit"
                                sx={{ backgroundColor: '#2D5356', '&:hover': { backgroundColor: '#1f3a3c' } }}
                                disabled={isPending}
                            >
                                {isPending ? (
                                    <>
                                        <CircularProgress size={20} sx={{ mr: 1 }} />
                                        {t('Adding')}...
                                    </>
                                ) : (
                                    t('Add Product')
                                )}
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Container>
    );
}

