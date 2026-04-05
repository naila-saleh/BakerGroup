import React from 'react'
import useCategories from "../../hooks/useCategories";
import Loader from "../../ui/loader/Loader.jsx";
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import Category from "../../ui/category/Category.jsx";

export default function CategoriesPage() {
    const {data, isLoading, isError, error} = useCategories();
    if(isLoading) return <Loader />
    if(isError) return <Box>{error.message}</Box>
    return (
        <Grid container component={'section'} py={5} spacing={3} sx={{display: 'flex', justifyContent: 'center'}}>
            {data.response.data.map((category) => (
                <Grid key={category.name} size={{lg: 2.3, md: 3, sm: 4, xs: 6}} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, cursor: 'pointer'}}>
                    <Category {...category} />
                </Grid>
            ))}
        </Grid>
    )
}
