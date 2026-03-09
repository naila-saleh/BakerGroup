import React from 'react'
import useCategories from "../../hooks/useCategories";
import Loader from "../../ui/loader/Loader.jsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import chair from '../../assets/images/chair.png'
import {Grid} from "@mui/material";

export default function CategoriesPage() {
    const {data, isLoading, isError, error} = useCategories();
    if(isLoading) return <Loader />
    if(isError) return <Box>{error.message}</Box>
    return (
        <Grid container component={'section'} py={5} spacing={3} sx={{display: 'flex', justifyContent: 'center'}}>
            {data.response.data.map((category) => (
                <Grid key={category.name} size={{lg: 2.3, md: 3, sm: 4, xs: 6}}
                    sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, cursor: 'pointer'}}>
                    <img alt={category.name} src={chair} style={{width: '100%', borderRadius: '50%', backgroundColor: 'rgba(0,0,0,0.03)'}}/>
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.3}}>
                        <Typography component={'h3'} sx={{fontWeight: 500}}>
                            {category.name}
                        </Typography>
                        <Typography component={'span'} sx={{color: 'rgba(0,0,0,0.6)', fontSize: '11px', fontWeight: 400}}>
                            Discover 45 Products
                        </Typography>
                    </Box>
                </Grid>
            ))}
        </Grid>
    )
}
