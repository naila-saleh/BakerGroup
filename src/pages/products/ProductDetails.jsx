import React from 'react'
import {useNavigate, useParams} from "react-router-dom";
import useProduct from "../../hooks/useProduct";
import Loader from "../../ui/loader/Loader.jsx";
import bg from '../../assets/images/hero/bg-hero.png'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import WestIcon from '@mui/icons-material/West';
import {Container, Grid, Rating} from "@mui/material";
import coupon from '../../assets/images/coupon.png'
import useAddToCart from "../../hooks/useAddToCart.jsx";
import {useTranslation} from "react-i18next";

export default function ProductDetails() {
    const {id} = useParams();
    const {data, isLoading, isError, error} = useProduct(id);
    const {mutate, isPending} = useAddToCart();
    const {t} = useTranslation();
    const navigate = useNavigate();
    if(isLoading) return <Loader />
    if(isError) return <div>{error.message}</div>
    const product = data.response;
    const sizeOfSubImage = `calc((100% - ${(product.subImages.length)}%) / (${product.subImages.length} + 1))`;
    //console.log(data.response);
    return (
        <Box className={'product-details'}>
            <Box sx={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', height: '100%', paddingY: {md: 10, xs: 5}}}>
                <Typography component={'h1'} sx={{color: '#fff', fontSize: {lg: '45px', md: '40px', sm: '35px', xs: '30px'}, textAlign: 'center',pb: 3, px: 2}}>{t('Products')}/{product.name}/{t('Product Details')}</Typography>
            </Box>
            <Container maxWidth={'xl'} sx={{px: {md: 10,sm: 5, xs: 2}, py: {md: 5,sm: 3, xs: 2}}}>
                <Button onClick={()=>navigate('/products')} sx={{textTransform: 'none', color: '#D09523'}}>
                    <WestIcon sx={{mr: 1}}/>
                    {t('Back to Products')}
                </Button>
                <Grid container spacing={{md: 8, sm: 5, xs: 3}} sx={{display: 'flex', marginTop: {sm: 2, xs: 1}}}>
                    <Grid size={{lg: 6, md: 12, sm: 12, xs: 12}} sx={{textAlign: 'center'}}>
                        <Box component={'img'} src={product.image} alt="" sx={{width: '100%', borderRadius: '10px'}}/>
                        <Box display={product.subImages.length?'flex':'none'} sx={{marginTop: 2, justifyContent: 'space-between'}}>
                            <Box component={'img'} src={product.image} alt="" sx={{width: sizeOfSubImage, height: sizeOfSubImage, borderRadius: '10px', cursor: 'pointer', border: '2px solid #D09523'}}/>
                            {product.subImages.map(subImage=>(
                                <Box component={'img'} src={subImage} alt="" sx={{width: sizeOfSubImage, height: sizeOfSubImage, borderRadius: '10px', cursor: 'pointer'}}/>
                            ))}
                        </Box>
                    </Grid>
                    <Grid size={{lg: 6, md: 12, sm: 12, xs: 12}} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <Box>
                            <Typography sx={{color: '#afafaf', pb: 2}}>{product.name}</Typography>
                            <Typography sx={{color: '#5C5C5C', pb: {md: 7, sm: 5, xs: 3}}}>{product.description}</Typography>
                            <Typography sx={{fontSize: '30px', pb: {sm: 2, xs: 1}}}>${product.price}</Typography>
                            <Box sx={{display: 'flex', gap: {md: 5, xs: 3}, alignItems: 'center', pb: {lg: 7, md: 5, xs: 3}}}>
                                <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}}>
                                    <Rating readOnly value={product.rate}></Rating>
                                    <Typography sx={{fontSize: '20px'}}>{product.rate}</Typography>
                                </Box>
                                <Typography sx={{color: '#5C5C5C'}}>{product.reviews.length} {t('Reviews')}</Typography>
                            </Box>
                            <Button variant="contained" sx={{textTransform: 'none', color: '#fff', backgroundColor: '#D09523', fontWeight: 300, px: {sm: 5, xs: 4}, py: 1.1, borderRadius: 5, mr: 2}}>{t('Buy Now')}</Button>
                            <Button variant="contained" sx={{textTransform: 'none', color: '#fff', backgroundColor: '#2D5356', fontWeight: 300, px: {sm: 5, xs: 4}, py: 1.1, borderRadius: 5}}
                                    onClick={()=>mutate({
                                        ProductId: product.id,
                                        Count: 1,
                                    })}
                                    disabled={isPending}
                            >{t('Add To Cart')}</Button>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'column' , gap: 2, alignItems: 'flex-start', pt: 5}}>
                            <Typography sx={{color: '#5C5C5C', fontSize: '18px'}}>{t('Coupon & Discount')}</Typography>
                            <Box component={'img'} src={coupon} alt="" sx={{width: '100%'}}/>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
