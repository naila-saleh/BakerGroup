import {useState, useEffect} from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useTranslation} from "react-i18next";
import bg from "../../assets/images/hero/bg-hero.png";
import ProductsSection from "../../components/products/ProductsSection.jsx";
import ProductsFilter from "../../ui/filter/ProductsFilter.jsx";
import Features from "../../components/features/Features.jsx";
import useProducts from "../../hooks/useProducts.jsx";
import Loader from "../../ui/loader/Loader.jsx";
import {useSearchParams} from "react-router-dom";

export default function ProductsPage() {
    const {t} = useTranslation();
    const [filters, setFilters] = useState({
        sortBy: 'price',
        ascending: 'false',
    });
    const {data, isError, error, isLoading} = useProducts({pageSize: 10000});

    // protect against data being undefined or an empty array
    const hasProducts = Array.isArray(data) && data.length > 0;
    // compute real min/max from the array instead of assuming sort order
    let sliderMin = 0;
    let sliderMax = 10000;
    if (hasProducts) {
        const prices = data.map(p => Number(p?.price ?? 0)).filter(n => !Number.isNaN(n));
        if (prices.length) {
            sliderMin = Math.min(...prices);
            sliderMax = Math.max(...prices);
        }
    }

    // initialize with safe defaults; update when products load
    const [priceRange, setPriceRange] = useState([sliderMin, sliderMax]);

    useEffect(() => {
        if (hasProducts) setPriceRange([sliderMin, sliderMax]);
    }, [hasProducts, sliderMin, sliderMax]);
    const [searchParams] = useSearchParams()
    const search = searchParams.get('search') || '';
    const handleSortChange = ({sortBy, ascending}) => {
        setFilters(() => ({
            sortBy,
            ascending
        }));
    };

    const handlePriceRangeChange = (newPriceRange) => {
        setPriceRange(newPriceRange);
    }

    if(isLoading) return <Loader />
    if(isError) return <Box>{error.message}</Box>
    return (
        <>
            <Box sx={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', height: '100%', paddingY: {lg: 15,md: 12, sm: 10, xs: 8}}}>
                <Typography component={'h1'} sx={{color: 'info.light',fontSize: {lg: '45px', md: '40px', sm: '35px', xs: '30px'}, textAlign: 'center'}}>{t('Products')}</Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: {md: 'row', xs: 'column'}, justifyContent: 'center', alignItems: 'start', gap: 3, maxWidth: '1536px', mx: 'auto', px: {md: 3, sm: 2, xs: 1},}}>
                <Box sx={{flex: {md: '0 0 250px'}, width: {xs: '100%', md: '250px'}}}>
                    <ProductsFilter sortBy={filters.sortBy} ascending={filters.ascending} minPrice={priceRange[0]} sliderMin={sliderMin} maxPrice={priceRange[1]} sliderMax={sliderMax} onSortChange={handleSortChange} onPriceRangeChange={handlePriceRangeChange} />
                </Box>
                <Box sx={{flex: 1, minWidth: 0, mt: {md: 5, xs: 0} }}>
                    <ProductsSection filters={filters} priceRange={priceRange} search={search} pageSize={1000} />
                </Box>
            </Box>
            <Features />
        </>
    )
}