import React from 'react'
import {useParams} from "react-router-dom";
import useProduct from "../../hooks/useProduct";
import Loader from "../../ui/loader/Loader.jsx";
import bg from '../../assets/images/hero/bg-hero.png'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import WestIcon from '@mui/icons-material/West';
import {Container, Grid, Rating} from "@mui/material";
import coupon from '../../assets/images/coupon.png'

export default function ProductDetails() {
    const {id} = useParams();
    const {data, isLoading, isError, error} = useProduct(id);
    if(isLoading) return <Loader />
    if(isError) return <div>{error.message}</div>
    const product = data.response;
    const sizeOfSubImage = `calc((100% - ${(product.subImages.length)}%) / (${product.subImages.length} + 1))`;
    console.log(data.response);
    return (
        <Box className={'product-details'}>
            <Box sx={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', height: '100%', paddingY: {md: 10, xs: 5}}}>
                <Typography component={'h1'} sx={{color: '#fff', fontSize: {lg: '45px', md: '40px', sm: '35px', xs: '30px'}, textAlign: 'center',pb: 3, px: 2}}>Products/{product.name}/Product Details</Typography>
            </Box>
            <Container maxWidth={'xl'} sx={{px: {md: 10,sm: 5, xs: 2}, py: {md: 5,sm: 3, xs: 2}}}>
                <Button sx={{textTransform: 'none', color: '#D09523'}}>
                    <WestIcon sx={{mr: 1}}/>
                    Back to Products
                </Button>
                <Grid container spacing={{md: 8, sm: 5, xs: 3}} sx={{display: 'flex', marginTop: {sm: 2, xs: 1}}}>
                    <Grid size={{lg: 6, md: 12, sm: 12, xs: 12}} sx={{textAlign: 'center'}}>
                        <img src={product.image} alt="" style={{width: '100%', borderRadius: '10px'}}/>
                        <Box display={product.subImages.length?'flex':'none'} sx={{marginTop: 2, justifyContent: 'space-between'}}>
                            <img src={product.image} alt="" style={{width: sizeOfSubImage, height: sizeOfSubImage, borderRadius: '10px', cursor: 'pointer', border: '2px solid #D09523'}}/>
                            {product.subImages.map(subImage=>(
                                <img src={subImage} alt="" style={{width: sizeOfSubImage, height: sizeOfSubImage, borderRadius: '10px', cursor: 'pointer'}}/>
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
                                <Typography sx={{color: '#5C5C5C'}}>{product.reviews.length} Reviews</Typography>
                            </Box>
                            <Button variant="contained" sx={{textTransform: 'none', color: '#fff', backgroundColor: '#D09523', fontWeight: 300, px: {sm: 5, xs: 4}, py: 1.1, borderRadius: 5, mr: 2}}>Buy Now</Button>
                            <Button variant="contained" sx={{textTransform: 'none', color: '#fff', backgroundColor: '#2D5356', fontWeight: 300, px: {sm: 5, xs: 4}, py: 1.1, borderRadius: 5}}>Add To Cart</Button>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'column' , gap: 2, alignItems: 'flex-start', pt: 5}}>
                            <Typography sx={{color: '#5C5C5C', fontSize: '18px'}}>Coupon & Discount</Typography>
                            <img src={coupon} alt="" style={{width: '100%'}}/>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
