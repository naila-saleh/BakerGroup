import React from 'react'
import useCategories from "../../hooks/useCategories";
import Loader from "../../ui/loader/Loader.jsx";
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import Category from "../../ui/category/Category.jsx";
import {useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";
import Typography from "@mui/material/Typography";
import bg from "../../assets/images/hero/bg-hero.png";

export default function CategoriesPage() {
    const {data, isLoading, isError, error} = useCategories();
    const { pathname } = useLocation();
    const isHome = pathname === '/';
    const {t} = useTranslation();
    if(isLoading) return <Loader />
    if(isError) return <Box>{error.message}</Box>
    return (
        <>
            {!isHome?<Box sx={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', height: '100%', paddingY: {lg: 15,md: 12, sm: 10, xs: 8}}}>
                <Typography component={'h1'} sx={{color: 'info.light',fontSize: {lg: '45px', md: '40px', sm: '35px', xs: '30px'}, textAlign: 'center'}}>{t('Categories')}</Typography>
            </Box>:null}
            <Grid container component={'section'} py={5} spacing={3} sx={{display: 'flex', justifyContent: 'center'}}>
                {data.response.data.map((category) => (
                    <Grid key={category.id} size={{lg: 2.3, md: 3, sm: 4, xs: 6}} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, cursor: 'pointer'}}>
                        <Category {...category} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
