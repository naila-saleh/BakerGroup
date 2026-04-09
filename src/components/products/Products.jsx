import React from 'react'
import useProducts from "../../hooks/useProducts";
import Box from "@mui/material/Box";
import Loader from "../../ui/loader/Loader.jsx";
import Typography from "@mui/material/Typography";
import {Card, CardContent, CardMedia, Container, Grid} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

export default function Products() {
    const {data, isLoading, isError, error} = useProducts();
    const {t} = useTranslation();
    if(isLoading) return <Loader />
    if(isError) return <Box>{error.message}</Box>
    return (
        <Container maxWidth={'xl'} className={'products'} component={'section'} sx={{py: {md: 10, xs: 5}, px: {lg: 10, md: 5, sm: 5, xs: 2}}}>
            <Typography component={'h2'} sx={{fontSize: {md: '40px', sm: '35px', xs: '32px'}, fontWeight: '500', pb: {md: 3,sm: 2, xs: 1}}}>{t('Trending Products')}</Typography>
            <Grid container spacing={{lg: 3, xs: 2}}>
                {data.response.data.map(product=>
                    <Grid key={product.id} item size={{lg: 3, md: 4, sm: 6, xs: 12}}>
                        <Link to={`/products/${product.id}`} style={{textDecoration: 'none'}}>
                            <Card sx={{boxShadow: 3, borderRadius: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 1, cursor: 'pointer'}}>
                                <CardMedia component={'img'} image={product.image} sx={{width: {md: '100%', sm: '90%', xs: '70%'}, display: 'flex', alignSelf: 'center'}}></CardMedia>
                                <CardContent sx={{backgroundColor: '#2D5356', color: 'info.light', borderRadius: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 2, ":last-child": {paddingBottom: 2}}}>
                                    <Box>
                                        <Typography component={'h3'}>{product.name}</Typography>
                                        <Typography component={'span'} variant={'body1'}>${product.price}</Typography>
                                    </Box>
                                    <ShoppingCartIcon sx={{color: 'secondary.main', backgroundColor: 'info.light', fontSize: '45px', padding: '10px', borderRadius: '50%', cursor: 'pointer'}} />
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                )}
            </Grid>
        </Container>
    )
}
