import {useTranslation} from "react-i18next";
import Loader from "../../ui/loader/Loader.jsx";
import Box from "@mui/material/Box";
import {Card, CardContent, CardMedia, Container, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Link, useParams} from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useGetProductsByCategory from "../../hooks/useGetProductsByCategory.jsx";
import bg from "../../assets/images/hero/bg-hero.png";
import useCategories from "../../hooks/useCategories.jsx";
import Product from "../../ui/product/Product.jsx";
import React from "react";

export default function ProductsByCategory() {
    const {id: categoryId} = useParams();
    const {data, isLoading, isError, error} = useGetProductsByCategory(categoryId);
    const {data: categoriesData} = useCategories();
    const {t} = useTranslation();
    const category = categoriesData?.find((item) => item.id.toString() === categoryId.toString()).name;
    if(isLoading) return <Loader />
    if(isError) return <Box>{error.message}</Box>
    return (
        <>
            <Box sx={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', height: '100%', paddingY: {lg: 15,md: 12, sm: 10, xs: 8}}}>
                <Typography component={'h1'} sx={{color: 'info.light',fontSize: {lg: '45px', md: '40px', sm: '35px', xs: '30px'}, textAlign: 'center'}}>{t('Products')}/{category}</Typography>
            </Box>
            <Container maxWidth={'xl'} className={'products'} component={'section'} sx={{py: {md: 10, xs: 5}, px: {lg: 10, md: 5, sm: 5, xs: 2}}}>
                <Grid container spacing={{lg: 3, xs: 2}}>
                    {!data.products.length?(
                        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                            <Typography component={'h3'}>{t('No Products Found')}</Typography>
                        </Box>
                    ):(data.products.map(product=>
                        <Product key={product.id} {...product} />
                    ))}
                </Grid>
            </Container>
        </>
    )
}
