import useProducts from "../../hooks/useProducts";
import Box from "@mui/material/Box";
import Loader from "../../ui/loader/Loader.jsx";
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import Product from "../../ui/product/Product.jsx";
import Button from "@mui/material/Button";
import EastIcon from "@mui/icons-material/East";
import {useMemo} from "react";
import WestIcon from "@mui/icons-material/West";
import PropTypes from "prop-types";

export default function ProductsSection({filters = {}, priceRange, search, pageSize}) {
    const minPrice = Array.isArray(priceRange) ? priceRange[0] : undefined;
    const maxPrice = Array.isArray(priceRange) ? priceRange[1] : undefined;
    const {data, isLoading, isError, error} = useProducts({...filters, minPrice, maxPrice, search, pageSize});
    const {t} = useTranslation();
    const { pathname } = useLocation();
    const isHome = pathname === '/';
    const products = useMemo(() => (Array.isArray(data) ? data : []), [data]);
    const displayProducts = useMemo(() => {
        let next = [...products];

        if (typeof minPrice === 'number' && typeof maxPrice === 'number') {
            next = next.filter((product) => {
                const price = Number(product?.price ?? 0);
                return price >= minPrice && price <= maxPrice;
            });
        }

        const normalizedSearch = (search ?? '').trim().toLowerCase();
        if (normalizedSearch) {
            next = next.filter((product) => {
                const haystack = `${product?.name ?? ''} ${product?.description ?? ''}`.toLowerCase();
                return haystack.includes(normalizedSearch);
            });
        }

        const {sortBy = '', ascending = ''} = filters;
        if (sortBy) {
            const direction = ascending === 'true' ? 1 : -1;
            next.sort((a, b) => {
                if (sortBy === 'name') {
                    return direction * String(a?.name ?? '').localeCompare(String(b?.name ?? ''));
                }

                const aValue = Number(a?.[sortBy] ?? 0);
                const bValue = Number(b?.[sortBy] ?? 0);
                return direction * (aValue - bValue);
            });
        }

        return next;
    }, [products, minPrice, maxPrice, search, filters]);

    const navigate = useNavigate();
    const language = localStorage.getItem('i18nextLng');

    if (isLoading) return <Loader />;
    if (isError) return <Box>{error.message}</Box>;

    return (
        <Box component={'section'} className={'products'} sx={{py: {md: 6, xs: 4}, px: {md: 10, sm: 5, xs: 2}, width: '100%'}}>
            {isHome ? (
                <Box sx={{display: 'flex', flexDirection: {sm: 'row', xs: 'column'}, gap: 2, justifyContent: 'space-between', alignItems: 'center', mb: {sm: 2, xs: 5}, textAlign: {sm: 'start', xs: 'center'} }}>
                    <Box>
                        <Typography component={'h2'} sx={{fontSize: {md: '40px', sm: '35px', xs: '32px'}, fontWeight: '500'}}>{t('Trending Products')}</Typography>
                        <Typography component={'h2'} sx={{fontSize: {md: '40px', sm: '35px', xs: '32px'}, fontWeight: '500', pb: {md: 3,sm: 2, xs: 1}}}>{t('for you!')}</Typography>
                    </Box>
                    <Button onClick={()=>navigate('/products')} sx={{color: 'info.light', display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: 'secondary.main', padding: '10px 20px', textTransform: 'none', fontWeight: 400, fontSize: 16 }}>
                        {t('View All Products')}
                        {language==='en'?<EastIcon sx={{color: 'info.light', fontSize: 18}} /> : <WestIcon sx={{color: 'info.light', fontSize: 18}} />}
                    </Button>
                </Box>
            ) : null}
            <Grid container spacing={{lg: 3, xs: 2}} sx={{mb: {md: 5, xs: 4}}}>
                {displayProducts.map(product =>
                    <Product key={product.id} {...product} />
                )}
            </Grid>
        </Box>
    )
}

ProductsSection.propTypes = {
    filters: PropTypes.shape({
        sortBy: PropTypes.string,
        ascending: PropTypes.string,
    }),
    priceRange: PropTypes.arrayOf(PropTypes.number),
    search: PropTypes.string,
    pageSize: PropTypes.number,
};

