import React from 'react'
import Box from "@mui/material/Box";
import {useTranslation} from "react-i18next";
import bg from "../../assets/images/hero/bg-hero.png";
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";
import blog1 from "../../assets/images/blog/blog1.jpg"
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function Blog() {
    const {t} = useTranslation();
    const language = localStorage.getItem('i18nextLng');
    return (
        <Box className={'blog'} component={'section'}>
            <Box sx={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', height: '100%', paddingY: {lg: 15,md: 12, sm: 10, xs: 8}}}>
                <Typography component={'h1'} sx={{color: 'info.light',fontSize: {lg: '45px', md: '40px', sm: '35px', xs: '30px'}, textAlign: 'center'}}>{t('Our Blog')}</Typography>
            </Box>
            <Box sx={{pt: 4, pb: {lg: 12,md: 10, sm: 8, xs: 6}, px: {lg: 10, md: 5, sm: 2, xs: 1}, textAlign: 'start', display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'flex-start'}}>
                <Typography component={'h2'} sx={{fontSize: {lg: '45px', md: '40px', sm: '35px', xs: '30px'}, fontWeight: 400 }}>{t('About Our Blog')}</Typography>
                <Typography sx={{color: 'primary.main', fontSize: {md: 18, xs: 16}, textAlign: 'justify' }}>{t("At Furniture WoodLine, we're passionate about more than just furniture; we're dedicated to helping you create a home that reflects your unique style and personality. Our blog in your go-to resource for the latest trends, design tips, and practical advice on all things related to home decor and furnishings.")}</Typography>
            </Box>
            <Box sx={{pb: {lg: 15,md: 12, sm: 10, xs: 8}, px: {lg: 10, md: 5, sm: 2, xs: 1}, textAlign: 'start', display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'flex-start'}}>
                <Grid container spacing={2} sx={{width: '100%'}}>
                    <Grid size={{lg: 4, sm: 6, xs: 12}}>
                        <Box component={'img'} src={blog1} sx={{width: '100%', height: {md: '300px',xs:'200px'}, objectFit: 'cover', borderRadius: 4}}></Box>
                        <Box sx={{p: 2, display: 'flex', flexDirection: 'column', gap: 0.5, alignItems: 'flex-start'}}>
                            <Typography component={'h3'} sx={{fontSize: {lg: '24px', md: '22px', xs: '20px'}, fontWeight: 450}}>{t('First Time Home Owner Ideas')}</Typography>
                            <Box sx={{display: 'flex', gap: 0.7}}>
                                <Typography component={'span'} sx={{color: 'primary.main', fontSize: {md: 16, xs: 14} }}>{t('by')}</Typography>
                                <Typography component={'p'} sx={{fontSize: {md: 17, xs: 15}, fontWeight: 450 }}>{t('Lina Odeh')}</Typography>
                                <Typography component={'span'} sx={{color: 'primary.main', fontSize: {md: 16, xs: 14} }}>{t('on')}</Typography>
                                <Typography component={'span'} sx={{color: 'secondary.main', fontSize: {md: 17, xs: 15} }}>{t('Apr 19, 24')}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={{lg: 4, sm: 6, xs: 12}}>
                        <Box component={'img'} src={blog1} sx={{width: '100%', height: {md: '300px',xs:'200px'}, objectFit: 'cover', borderRadius: 4}}></Box>
                        <Box sx={{p: 2, display: 'flex', flexDirection: 'column', gap: 0.5, alignItems: 'flex-start'}}>
                            <Typography component={'h3'} sx={{fontSize: {lg: '24px', md: '22px', xs: '20px'}, fontWeight: 450}}>{t('First Time Home Owner Ideas')}</Typography>
                            <Box sx={{display: 'flex', gap: 0.7}}>
                                <Typography component={'span'} sx={{color: 'primary.main', fontSize: {md: 16, xs: 14} }}>{t('by')}</Typography>
                                <Typography component={'p'} sx={{fontSize: {md: 17, xs: 15}, fontWeight: 450 }}>{t('Lina Odeh')}</Typography>
                                <Typography component={'span'} sx={{color: 'primary.main', fontSize: {md: 16, xs: 14} }}>{t('on')}</Typography>
                                <Typography component={'span'} sx={{color: 'secondary.main', fontSize: {md: 17, xs: 15} }}>{t('Apr 19, 24')}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={{lg: 4, sm: 6, xs: 12}}>
                        <Box component={'img'} src={blog1} sx={{width: '100%', height: {md: '300px',xs:'200px'}, objectFit: 'cover', borderRadius: 4}}></Box>
                        <Box sx={{p: 2, display: 'flex', flexDirection: 'column', gap: 0.5, alignItems: 'flex-start'}}>
                            <Typography component={'h3'} sx={{fontSize: {lg: '24px', md: '22px', xs: '20px'}, fontWeight: 450}}>{t('First Time Home Owner Ideas')}</Typography>
                            <Box sx={{display: 'flex', gap: 0.7}}>
                                <Typography component={'span'} sx={{color: 'primary.main', fontSize: {md: 16, xs: 14} }}>{t('by')}</Typography>
                                <Typography component={'p'} sx={{fontSize: {md: 17, xs: 15}, fontWeight: 450 }}>{t('Lina Odeh')}</Typography>
                                <Typography component={'span'} sx={{color: 'primary.main', fontSize: {md: 16, xs: 14} }}>{t('on')}</Typography>
                                <Typography component={'span'} sx={{color: 'secondary.main', fontSize: {md: 17, xs: 15} }}>{t('Apr 19, 24')}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={{lg: 4, sm: 6, xs: 12}}>
                        <Box component={'img'} src={blog1} sx={{width: '100%', height: {md: '300px',xs:'200px'}, objectFit: 'cover', borderRadius: 4}}></Box>
                        <Box sx={{p: 2, display: 'flex', flexDirection: 'column', gap: 0.5, alignItems: 'flex-start'}}>
                            <Typography component={'h3'} sx={{fontSize: {lg: '24px', md: '22px', xs: '20px'}, fontWeight: 450}}>{t('First Time Home Owner Ideas')}</Typography>
                            <Box sx={{display: 'flex', gap: 0.7}}>
                                <Typography component={'span'} sx={{color: 'primary.main', fontSize: {md: 16, xs: 14} }}>{t('by')}</Typography>
                                <Typography component={'p'} sx={{fontSize: {md: 17, xs: 15}, fontWeight: 450 }}>{t('Lina Odeh')}</Typography>
                                <Typography component={'span'} sx={{color: 'primary.main', fontSize: {md: 16, xs: 14} }}>{t('on')}</Typography>
                                <Typography component={'span'} sx={{color: 'secondary.main', fontSize: {md: 17, xs: 15} }}>{t('Apr 19, 24')}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={{lg: 4, sm: 6, xs: 12}}>
                        <Box component={'img'} src={blog1} sx={{width: '100%', height: {md: '300px',xs:'200px'}, objectFit: 'cover', borderRadius: 4}}></Box>
                        <Box sx={{p: 2, display: 'flex', flexDirection: 'column', gap: 0.5, alignItems: 'flex-start'}}>
                            <Typography component={'h3'} sx={{fontSize: {lg: '24px', md: '22px', xs: '20px'}, fontWeight: 450}}>{t('First Time Home Owner Ideas')}</Typography>
                            <Box sx={{display: 'flex', gap: 0.7}}>
                                <Typography component={'span'} sx={{color: 'primary.main', fontSize: {md: 16, xs: 14} }}>{t('by')}</Typography>
                                <Typography component={'p'} sx={{fontSize: {md: 17, xs: 15}, fontWeight: 450 }}>{t('Lina Odeh')}</Typography>
                                <Typography component={'span'} sx={{color: 'primary.main', fontSize: {md: 16, xs: 14} }}>{t('on')}</Typography>
                                <Typography component={'span'} sx={{color: 'secondary.main', fontSize: {md: 17, xs: 15} }}>{t('Apr 19, 24')}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={{lg: 4, sm: 6, xs: 12}}>
                        <Box component={'img'} src={blog1} sx={{width: '100%', height: {md: '300px',xs:'200px'}, objectFit: 'cover', borderRadius: 4}}></Box>
                        <Box sx={{p: 2, display: 'flex', flexDirection: 'column', gap: 0.5, alignItems: 'flex-start'}}>
                            <Typography component={'h3'} sx={{fontSize: {lg: '24px', md: '22px', xs: '20px'}, fontWeight: 450}}>{t('First Time Home Owner Ideas')}</Typography>
                            <Box sx={{display: 'flex', gap: 0.7}}>
                                <Typography component={'span'} sx={{color: 'primary.main', fontSize: {md: 16, xs: 14} }}>{t('by')}</Typography>
                                <Typography component={'p'} sx={{fontSize: {md: 17, xs: 15}, fontWeight: 450 }}>{t('Lina Odeh')}</Typography>
                                <Typography component={'span'} sx={{color: 'primary.main', fontSize: {md: 16, xs: 14} }}>{t('on')}</Typography>
                                <Typography component={'span'} sx={{color: 'secondary.main', fontSize: {md: 17, xs: 15} }}>{t('Apr 19, 24')}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{pb: {lg: 15,md: 12, sm: 10, xs: 8}, px: {lg: 10, md: 5, sm: 2, xs: 1}, textAlign: 'start', display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'flex-start'}}>
                <Grid container spacing={2} sx={{width: '100%', height: {lg: 500, sm: 800, xs: 700} }}>
                    <Grid size={{lg: 6, xs: 12}} sx={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', height: {lg: '100%', xs: '50%'}, padding: {lg: 8,md: 6, sm: 4, xs: 2}, color: 'info.light', borderRadius: 4, display: 'flex', flexDirection: 'column', gap: {md: 3, xs: 2}, alignItems: 'flex-start' }}>
                        <Typography component={'h3'} sx={{fontSize: {lg: '40px', md: '35px', sm: '30px', xs: '25px'}, fontWeight: 400 }}>{t('Join Our Community')}</Typography>
                        <Typography sx={{fontSize: {md: 16, xs: 14}, textAlign: 'justify' }}>{t("We invite you to join our growing community of design enthusiasts, DIY lovers, and home improvement aficionados. Subscribe to our newsletter to get the latest blog posts delivered straight to your inbox, and follow us on social media for daily inspiration and updates.")}</Typography>
                        <Box sx={{display: 'flex', gap: 1, alignItems: 'center', mt: 'auto' }}>
                            <InstagramIcon sx={{ color: 'info.light', backgroundColor: 'rgba(255, 255, 255, 0.15)', border: 0.5, borderColor: 'rgba(255, 255, 255, 0.2)', fontSize: '45px', padding: '10px', borderRadius: '50%' }} />
                            <XIcon sx={{ color: 'info.light', backgroundColor: 'rgba(255, 255, 255, 0.15)', border: 0.5, borderColor: 'rgba(255, 255, 255, 0.2)', fontSize: '45px', padding: '10px', borderRadius: '50%' }} />
                            <FacebookOutlinedIcon sx={{ color: 'info.light', backgroundColor: 'rgba(255, 255, 255, 0.15)', border: 0.5, borderColor: 'rgba(255, 255, 255, 0.2)', fontSize: '45px', padding: '10px', borderRadius: '50%' }} />
                            <PinterestIcon sx={{ color: 'info.light', backgroundColor: 'rgba(255, 255, 255, 0.15)', border: 0.5, borderColor: 'rgba(255, 255, 255, 0.2)', fontSize: '45px', padding: '10px', borderRadius: '50%' }} />
                        </Box>
                    </Grid>
                    <Grid size={{lg: 6, xs: 12}} sx={{backgroundColor: 'rgba(0,0,0,0.05)', height: {lg: '100%', xs: '50%'}, padding: {lg: 8,md: 6, sm: 4, xs: 2}, borderRadius: 4, display: 'flex', flexDirection: 'column', gap: {md: 3, xs: 2}, alignItems: 'flex-start' }}>
                        <Typography component={'h3'} sx={{fontSize: {lg: '40px', md: '35px', sm: '30px', xs: '25px'}, fontWeight: 400 }}>{t('Share Your Story')}</Typography>
                        <Typography sx={{fontSize: {md: 16, xs: 14}, textAlign: 'justify', color: 'primary.main' }}>{t("Have a furniture transformation or a home decore success story to share? We'd love to feature you on our blog! Submit your story and photos to")}</Typography>
                        <Typography sx={{fontSize: {md: 16, xs: 14}, textAlign: 'justify', color: 'secondary.main' }}>{t('Email')}: nailasaleh2004@gmail.com</Typography>
                        <Box sx={{mt: 'auto'}}>
                            <Typography component={'span'} sx={{fontSize: {md: 20, xs: 18}, textAlign: 'justify', color: '#2D5356', fontWeight: 500, ml: language === 'ar' ? 1 : 0, mr: language === 'en' ? 1 : 0, }}>{t("Thank you")}</Typography>
                            <Typography component={'span'} sx={{fontSize: {md: 16, xs: 14}, textAlign: 'justify', color: 'primary.main' }}>{t("for visiting the Furniture Emporium Blog. We're excited to be part of your journey in creating a beautiful, comfortable, and stylish home.")}</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
