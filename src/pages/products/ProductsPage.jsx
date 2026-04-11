import {useState} from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useTranslation} from "react-i18next";
import bg from "../../assets/images/hero/bg-hero.png";
import ProductsSection from "../../components/products/ProductsSection.jsx";
import ProductsFilter from "../../ui/filter/ProductsFilter.jsx";
import Features from "../../components/features/Features.jsx";

export default function ProductsPage() {
    const {t} = useTranslation();
    const [filters, setFilters] = useState({
        sortBy: '',
        ascending: '',
    });

    const handleSortChange = ({sortBy, ascending}) => {
        setFilters(() => ({
            sortBy,
            ascending,
        }));
    };

    return (
        <>
            <Box sx={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', height: '100%', paddingY: {lg: 15,md: 12, sm: 10, xs: 8}}}>
                <Typography component={'h1'} sx={{color: 'info.light',fontSize: {lg: '45px', md: '40px', sm: '35px', xs: '30px'}, textAlign: 'center'}}>{t('Products')}</Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: {md: 'row', xs: 'column'}, justifyContent: 'center', alignItems: 'start', gap: 3, maxWidth: '1536px', mx: 'auto', px: {md: 3, sm: 2, xs: 1},}}>
                <Box sx={{flex: {md: '0 0 250px'}, width: {xs: '100%', md: '250px'}}}>
                    <ProductsFilter sortBy={filters.sortBy} ascending={filters.ascending} onSortChange={handleSortChange} />
                </Box>
                <Box sx={{flex: 1, minWidth: 0, mt: {md: 5, xs: 0} }}>
                    <ProductsSection filters={filters} />
                </Box>
            </Box>
            <Features />
        </>
    )
}