import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {useTranslation} from "react-i18next";
import Link from "@mui/material/Link";
import {Link as RouterLink} from "react-router-dom";

export default function Category(category) {
    const {t} = useTranslation();
    return (
        <Link component={RouterLink} to={`/products/category/${category.id}`} underline={'none'} sx={{color: 'inherit', display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center', textDecoration: 'none'}}>
            <Box sx={{width: '100%', aspectRatio: '1 / 1', borderRadius: '50%', backgroundColor: 'rgba(0,0,0,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
                <Box component="img" alt={category.name} src={category.image} sx={{width: '100%', objectFit: 'cover'}}/>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5}}>
                <Typography component={'h3'} sx={{fontWeight: 500, fontSize: '22px'}}>
                    {category.name}
                </Typography>
                <Typography component={'span'} sx={{color: 'rgba(0,0,0,0.55)', fontSize: '13px', fontWeight: 400}}>
                    {t('discoverProducts', { count: category.products?.length ?? 0 })}
                </Typography>
            </Box>
        </Link>
    )
}
