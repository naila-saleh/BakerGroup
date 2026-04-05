import React from 'react'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SupportOutlinedIcon from '@mui/icons-material/SupportOutlined';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";
import {useTranslation} from "react-i18next";

export default function Features() {
    const {t} = useTranslation();
    return (
        <Grid container sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingY: {lg: 8, md: 5, xs: 3}}} >
            <Grid item size={{lg: 3, md: 6, sm: 6, xs: 12}} sx={{display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', paddingY: {lg: 0, xs: 2} }}>
                <LocalShippingOutlinedIcon fontSize={'large'} sx={{backgroundColor: '#FFB934', padding: '8px', borderRadius: '50%', color: 'rgba(0, 0, 0, 0.75)', boxShadow: 3}}/>
                <Typography component={'span'} sx={{fontSize: '20px', fontWeight: '500'}}>{t('Fast Shipping')}</Typography>
            </Grid>
            <Grid item size={{lg: 3, md: 6, sm: 6, xs: 12}} sx={{display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', paddingY: {lg: 0, xs: 2} }}>
                <ShoppingBagOutlinedIcon fontSize={'large'} sx={{backgroundColor: '#FFB934', padding: '8px', borderRadius: '50%', color: 'rgba(0, 0, 0, 0.75)', boxShadow: 3}}/>
                <Typography component={'span'} sx={{fontSize: '20px', fontWeight: '500'}}>{t('Easy to Shop')}</Typography>
            </Grid>
            <Grid item size={{lg: 3, md: 6, sm: 6, xs: 12}} sx={{display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', paddingY: {lg: 0, xs: 2} }}>
                <SupportOutlinedIcon fontSize={'large'} sx={{backgroundColor: '#FFB934', padding: '8px', borderRadius: '50%', color: 'rgba(0, 0, 0, 0.75)', boxShadow: 3}}/>
                <Typography component={'span'} sx={{fontSize: '20px', fontWeight: '500'}}>{t('24/7 Support')}</Typography>
            </Grid>
            <Grid item size={{lg: 3, md: 6, sm: 6, xs: 12}} sx={{display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', paddingY: {lg: 0, xs: 2} }}>
                <SyncOutlinedIcon fontSize={'large'} sx={{backgroundColor: '#FFB934', padding: '8px', borderRadius: '50%', color: 'rgba(0, 0, 0, 0.75)', boxShadow: 3}}/>
                <Typography component={'span'} sx={{fontSize: '20px', fontWeight: '500'}}>{t('Hassle Free Returns')}</Typography>
            </Grid>
        </Grid>
    )
}
