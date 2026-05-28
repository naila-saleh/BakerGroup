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
                        <Grid key={product.id} item size={{lg: 3, md: 4, sm: 6, xs: 12}}>
                            <Link to={`/products/${product.id}`} style={{textDecoration: 'none'}}>
                                <Card sx={{boxShadow: 3, borderRadius: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 1, cursor: 'pointer'}}>
                                    <CardMedia component={'img'} image={product.mainImage} sx={{width: {md: '100%', sm: '90%', xs: '70%'}, display: 'flex', alignSelf: 'center'}}></CardMedia>
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
                    ))}
                </Grid>
            </Container>
        </>
    )
}
