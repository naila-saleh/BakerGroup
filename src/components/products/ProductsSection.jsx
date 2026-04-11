import useProducts from "../../hooks/useProducts";
import Box from "@mui/material/Box";
import Loader from "../../ui/loader/Loader.jsx";
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";
import {useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";
import Product from "../../ui/product/Product.jsx";

export default function ProductsSection({filters,priceRange}) {
    const {data, isLoading, isError, error} = useProducts({...filters, minPrice: priceRange[0], maxPrice: priceRange[1]});
    const {t} = useTranslation();
    const { pathname } = useLocation();
    const isHome = pathname === '/';

    if (isLoading) return <Loader />;
    if (isError) return <Box>{error.message}</Box>;

    return (
        <Box component={'section'} className={'products'} sx={{py: {md: 6, xs: 4}, px: {md: 10, sm: 5, xs: 2}, width: '100%'}}>
            {isHome ? <Typography component={'h2'} sx={{fontSize: {md: '40px', sm: '35px', xs: '32px'}, fontWeight: '500', pb: {md: 3,sm: 2, xs: 1}}}>{t('Trending Products')}</Typography> : null}
            <Grid container spacing={{lg: 3, xs: 2}}>
                {data.response.data.map(product =>
                    <Product key={product.id} {...product} />
                )}
            </Grid>
        </Box>
    )
}