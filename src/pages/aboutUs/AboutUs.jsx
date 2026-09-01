import React from 'react'
import {useTranslation} from "react-i18next";
import Box from "@mui/material/Box";
import bg from "../../assets/images/hero/bg-hero.png";
import Typography from "@mui/material/Typography";
import aboutUs from "../../assets/images/aboutUs/aboutUs.jpeg";
import {Card, CardContent, CardMedia, Grid} from "@mui/material";
import humbleBeginnings from "../../assets/images/aboutUs/humbleBeggining.jpg";
import milestonesAndAchievements from "../../assets/images/aboutUs/milestonesAndAchievements.jpg";
import innovationAndGrowth from "../../assets/images/aboutUs/innovationAndGrowth.jpg";
import globalReach from "../../assets/images/aboutUs/globalReach.jpg";
import lookingAhead from "../../assets/images/aboutUs/lookingAhead.jpg";
import TouchAppOutlinedIcon from '@mui/icons-material/TouchAppOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import manager from "../../assets/images/aboutUs/manager.jpg";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import Link from "@mui/material/Link";
import {Link as RouterLink} from "react-router-dom";
const firstFrameConnector = (side) => ({
    position: 'relative',
    '&::before': {
        content: '""',
        position: 'absolute',
        display: {xs: 'none', md: 'block'},
        top: -20,
        width: '64px',
        height: 20,
        backgroundColor: '#2D5356',
        [side]: '-10px',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
});
const frameConnector = (side) => ({
    position: 'relative',
    '&::after': {
        content: '""',
        position: 'absolute',
        display: {xs: 'none', md: 'block'},
        bottom: -20,
        width: '64px',
        height: 20,
        backgroundColor: '#2D5356',
        [side]: '-64px',
    },
});
const LastFrameConnector = (side) => ({
    position: 'relative',
    '&::after': {
        content: '""',
        position: 'absolute',
        display: {xs: 'none', md: 'block'},
        bottom: -20,
        width: {xl: '750px', lg: '600px', md: '450px'},
        height: 20,
        backgroundColor: '#2D5356',
        [side]: {xl: '-750px', lg: '-600px', md: '-450px'},
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
});

export default function AboutUs() {
    const {t} = useTranslation();
    return (
        <Box className={'about-us'} component={'section'}>
            <Box sx={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', height: '100%', paddingY: {lg: 15,md: 12, sm: 10, xs: 8}}}>
                <Typography component={'h1'} sx={{color: 'info.light',fontSize: {lg: '45px', md: '40px', sm: '35px', xs: '30px'}, textAlign: 'center'}}>{t('About Us')}</Typography>
            </Box>
            <Box sx={{pt: 4, pb: {lg: 15,md: 12, sm: 10, xs: 8}, px: {lg: 10, md: 5, sm: 2, xs: 1}, textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center'}}>
                <Typography component={'h2'} sx={{fontSize: {lg: '45px', md: '40px', sm: '35px', xs: '30px'}, fontWeight: 400 }}>{t('Discover WoodLine')} -<br/>{t('Where Innovation Meets Design')}</Typography>
                <Box component={'img'} src={aboutUs} alt="About Us" sx={{width: '100%', height: {lg: 500, md: 400, xs: 300}, borderRadius: 5, objectFit: 'cover'}}></Box>
            </Box>
            <Box sx={{pb: {lg: 15,md: 12, sm: 10, xs: 8}, px: {lg: 10, md: 3, xs: 0}, textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center'}}>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center'}}>
                    <Typography sx={{color: 'info.main', letterSpacing: 2, fontSize: {md: 18, xs: 16} }}>{t('WoodLine Challenging')}</Typography>
                    <Typography component={'h2'} sx={{fontSize: {lg: '45px', md: '40px', sm: '35px', xs: '30px'}, fontWeight: 400 }}>{t('The WoodLine Journey Story')}</Typography>
                    <Typography sx={{color: 'primary.main', fontSize: {md: 18, xs: 16}, width: {lg: '65%', sm: '85%', xs: '100%'} }}>{t('The WoodLine Journey: Transforming spaces with innovative design. Explore our story of crafsmanship and style, creating furniture that inspires and enhances modern living.')}</Typography>
                </Box>
                <Box sx={{position: 'relative', width: '100%', minHeight: {md: 1950, xs: 'auto'}}}>
                    <Grid container spacing={{lg: 8, xs: 3}} sx={{display: 'flex', direction: 'ltr', alignItems: 'center', pl: {md: 0, xs: 1}, pb: {md: 0, xs: 5} }}>
                        <Grid size={{md: 6, xs: 12}} sx={{...frameConnector('right'),...firstFrameConnector('right'), border: 20, borderColor: '#2D5356', borderRight: 0, borderTopLeftRadius: 200, borderBottomLeftRadius: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Box component={'img'} src={humbleBeginnings} alt="Humble Beginnings" sx={{width: '100%', height: 370, borderRadius: 5, p: 1, borderTopLeftRadius: 'calc(200px - 21px)', borderBottomLeftRadius: 'calc(200px - 21px)', objectFit: 'cover'}}></Box>
                        </Grid>
                        <Grid size={{md: 6, xs: 12}} sx={{display: 'flex', flexDirection: 'column', gap: 2, textAlign: 'start', px: {md: 0, xs: 2} }}>
                            <TouchAppOutlinedIcon sx={{ color: 'secondary.main', backgroundColor: 'rgba(255, 185, 52, 0.15)', fontSize: '65px', padding: 1.5, borderRadius: 4, border: 0.5, borderColor: 'rgba(255, 185, 52, 0.3)' }} />
                            <Typography component={'h3'} sx={{fontSize: {lg: '40px', md: '35px', sm: '30px', xs: '25px'}, fontWeight: 400 }}>{t('From Humble Beginnings')}</Typography>
                            <Typography sx={{color: 'primary.main', fontSize: {md: 16, xs: 14} }}>{t('Our story began in 2010 in a small workshop, driven by a passion for creating a beautiful and comfortable furniture. What started as a modest operation has grown into a beloved brand known for its quality and design.')}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={{lg: 8, xs: 3}} sx={{display: 'flex', direction: 'ltr', alignItems: 'center', pr: {md: 0, xs: 1}, pb: {md: 0, xs: 5}, position: {md: 'absolute', xs: 'static'}, top: {md: 390, xs: 'auto'}, left: {md: 0, xs: 'auto'} }}>
                        <Grid size={{md: 6, xs: 12}} sx={{order: {md: 0, xs: 1}, display: 'flex', flexDirection: 'column', gap: 2, textAlign: 'start', px: {md: 0, xs: 2}, pl: {md: 10, xs: 3} }}>
                            <WorkspacePremiumOutlinedIcon sx={{ color: 'secondary.main', backgroundColor: 'rgba(255, 185, 52, 0.15)', fontSize: '65px', padding: 1.5, borderRadius: 4, border: 0.5, borderColor: 'rgba(255, 185, 52, 0.3)' }} />
                            <Typography component={'h3'} sx={{fontSize: {lg: '40px', md: '35px', sm: '30px', xs: '25px'}, fontWeight: 400 }}>{t('Milestones and Achievements')}</Typography>
                            <Typography sx={{color: 'primary.main', fontSize: {md: 15.2, xs: 14} }}>{t("Over the years, we've reached several significant milestones. In 2012, we launched our first online store, making our products accessible to a wider audience. By 2015, we had expanded our product line to include not only classic furniture pieces but also contemporary designs that cater to modern tastes.")}</Typography>
                        </Grid>
                        <Grid size={{md: 6, xs: 12}} sx={{...frameConnector('left'), border: 20, borderColor: '#2D5356', borderLeft: 0, borderTopRightRadius: 200, borderBottomRightRadius: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Box component={'img'} src={milestonesAndAchievements} alt="Milestones and achievements" sx={{width: '100%', height: 370, borderRadius: 5, p: 1, borderTopRightRadius: 'calc(200px - 21px)', borderBottomRightRadius: 'calc(200px - 21px)', objectFit: 'cover'}}></Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={{lg: 8, xs: 3}} sx={{display: 'flex', direction: 'ltr', alignItems: 'center', pl: {md: 0, xs: 1}, pb: {md: 0, xs: 5}, position: {md: 'absolute', xs: 'static'}, top: {md: 780, xs: 'auto'}, left: {md: 0, xs: 'auto'} }}>
                        <Grid size={{md: 6, xs: 12}} sx={{...frameConnector('right'), border: 20, borderColor: '#2D5356', borderRight: 0, borderTopLeftRadius: 200, borderBottomLeftRadius: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Box component={'img'} src={innovationAndGrowth} alt="Innovation and growth" sx={{width: '100%', height: 370, borderRadius: 5, p: 1, borderTopLeftRadius: 'calc(200px - 21px)', borderBottomLeftRadius: 'calc(200px - 21px)', objectFit: 'cover'}}></Box>
                        </Grid>
                        <Grid size={{md: 6, xs: 12}} sx={{display: 'flex', flexDirection: 'column', gap: 2, textAlign: 'start', px: {md: 0, xs: 2} }}>
                            <SignalCellularAltOutlinedIcon sx={{ color: 'secondary.main', backgroundColor: 'rgba(255, 185, 52, 0.15)', fontSize: '65px', padding: 1.5, borderRadius: 4, border: 0.5, borderColor: 'rgba(255, 185, 52, 0.3)' }} />
                            <Typography component={'h3'} sx={{fontSize: {lg: '40px', md: '35px', sm: '30px', xs: '25px'}, fontWeight: 400 }}>{t('Innovation and Growth')}</Typography>
                            <Typography sx={{color: 'primary.main', fontSize: {md: 16, xs: 14} }}>{t('Innovation has always been at the heart of what we do. In 2018, we introduced our first line of eco-friendly furniture, crafted from sustainable materials. This commitment to the environment has not only won us accolades but also the trust and loyalty of our customers.')}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={{lg: 8, xs: 3}} sx={{display: 'flex', direction: 'ltr', alignItems: 'center', pr: {md: 0, xs: 1}, pb: {md: 0, xs: 5}, position: {md: 'absolute', xs: 'static'}, top: {md: 1170, xs: 'auto'}, left: {md: 0, xs: 'auto'} }}>
                        <Grid size={{md: 6, xs: 12}} sx={{order: {md: 0, xs: 1}, display: 'flex', flexDirection: 'column', gap: 2, textAlign: 'start', px: {md: 0, xs: 2}, pl: {md: 10, xs: 3} }}>
                            <LanguageOutlinedIcon sx={{ color: 'secondary.main', backgroundColor: 'rgba(255, 185, 52, 0.15)', fontSize: '65px', padding: 1.5, borderRadius: 4, border: 0.5, borderColor: 'rgba(255, 185, 52, 0.3)' }} />
                            <Typography component={'h3'} sx={{fontSize: {lg: '40px', md: '35px', sm: '30px', xs: '25px'}, fontWeight: 400 }}>{t('Our Global Reach')}</Typography>
                            <Typography sx={{color: 'primary.main', fontSize: {md: 16, xs: 14} }}>{t('Today, WoodLine serves customers around the world. With distribution centers in key locations, we ensure that our high-quality furniture reaches your home efficiently and safely. Our global presence is a testament to the love and support of our customers, who inspire us to continue our journey.')}</Typography>
                        </Grid>
                        <Grid size={{md: 6, xs: 12}} sx={{...frameConnector('left'), border: 20, borderColor: '#2D5356', borderLeft: 0, borderTopRightRadius: 200, borderBottomRightRadius: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Box component={'img'} src={globalReach} alt="Global Reach" sx={{width: '100%', height: 370, borderRadius: 5, p: 1, borderTopRightRadius: 'calc(200px - 21px)', borderBottomRightRadius: 'calc(200px - 21px)', objectFit: 'cover'}}></Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={{lg: 8, xs: 3}} sx={{display: 'flex', direction: 'ltr', alignItems: 'center', pl: {md: 0, xs: 1}, pb: {md: 0, xs: 5}, position: {md: 'absolute', xs: 'static'}, top: {md: 1560, xs: 'auto'}, left: {md: 0, xs: 'auto'} }}>
                        <Grid size={{md: 6, xs: 12}} sx={{...LastFrameConnector('right'), border: 20, borderColor: '#2D5356', borderRight: 0, borderTopLeftRadius: 200, borderBottomLeftRadius: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Box component={'img'} src={lookingAhead} alt="Looking Ahead" sx={{width: '100%', height: 370, borderRadius: 5, p: 1, borderTopLeftRadius: 'calc(200px - 21px)', borderBottomLeftRadius: 'calc(200px - 21px)', objectFit: 'cover'}}></Box>
                        </Grid>
                        <Grid size={{md: 6, xs: 12}} sx={{display: 'flex', flexDirection: 'column', gap: 2, textAlign: 'start', px: {md: 0, xs: 2} }}>
                            <ArrowCircleUpOutlinedIcon sx={{ color: 'secondary.main', backgroundColor: 'rgba(255, 185, 52, 0.15)', fontSize: '65px', padding: 1.5, borderRadius: 4, border: 0.5, borderColor: 'rgba(255, 185, 52, 0.3)' }} />
                            <Typography component={'h3'} sx={{fontSize: {lg: '40px', md: '35px', sm: '30px', xs: '25px'}, fontWeight: 400 }}>{t('Looking Ahead')}</Typography>
                            <Typography sx={{color: 'primary.main', fontSize: {md: 16, xs: 14} }}>{t("As we look to the future, our goal remains the same: to create furniture that combines style, comfort, and sustainability. We're excited about the new designs and innovations we have in store, and we're committed to making your home a beautiful, comfortable, and happy place.")}</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box sx={{pb: {lg: 15,md: 12, sm: 10, xs: 8}, px: {lg: 10, md: 5, sm: 2, xs: 1}, textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center'}}>
                <Typography component={'h2'} sx={{fontSize: {lg: '45px', md: '40px', sm: '35px', xs: '30px'}, fontWeight: 400 }}>{t('Our Awesome Team')}</Typography>
                <Grid container spacing={2} sx={{width: '100%'}}>
                    <Grid size={{lg: 4, sm: 6, xs: 12}}>
                        <Card sx={{boxShadow: 3, borderRadius: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 1, cursor: 'pointer'}}>
                            <CardMedia component={'img'} image={manager} sx={{width: '100%', height: {lg: '460px',md:'260px'}, objectFit: 'cover', display: 'flex', alignSelf: 'center', borderRadius: 4}}></CardMedia>
                            <CardContent sx={{backgroundColor: '#2D5356', color: 'info.light', borderRadius: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: {xl: 2, lg: 1.3, xs: 2}, ":last-child": {paddingBottom: 2}}}>
                                <Box sx={{display: 'flex', flexDirection: 'column', gap: 1, textAlign: 'start'}}>
                                    <Typography component={'h3'} sx={{fontSize: {lg: '24px', md: '20px', sm: '18px', xs: '16px'}, fontWeight: 400}}>{t('Naila Saleh')}</Typography>
                                    <Typography component={'p'} variant={'body1'}>{t('CEO & Owner')}</Typography>
                                </Box>
                                <Box sx={{display: 'flex', gap: 1}}>
                                    <Link component={RouterLink} to={'https://www.instagram.com/liferesponse_200/'} target={'_blank'}>
                                        <InstagramIcon sx={{ color: 'info.light', backgroundColor: 'rgba(255, 255, 255, 0.15)', border: 0.5, borderColor: 'rgba(255, 255, 255, 0.2)', fontSize: '45px', padding: '10px', borderRadius: '50%' }} />
                                    </Link>
                                    <Link component={RouterLink} to={'https://www.facebook.com/naila.saleh.2025'} target={'_blank'}>
                                        <FacebookOutlinedIcon sx={{ color: 'info.light', backgroundColor: 'rgba(255, 255, 255, 0.15)', border: 0.5, borderColor: 'rgba(255, 255, 255, 0.2)', fontSize: '45px', padding: '10px', borderRadius: '50%' }} />
                                    </Link>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={{lg: 4, sm: 6, xs: 12}}>
                        <Card sx={{boxShadow: 3, borderRadius: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 1, cursor: 'pointer'}}>
                            <CardMedia component={'img'} image={manager} sx={{width: '100%', height: {lg: '460px',md:'260px'}, objectFit: 'cover', display: 'flex', alignSelf: 'center', borderRadius: 4}}></CardMedia>
                            <CardContent sx={{backgroundColor: '#2D5356', color: 'info.light', borderRadius: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: {xl: 2, lg: 1.3, xs: 2}, ":last-child": {paddingBottom: 2}}}>
                                <Box sx={{display: 'flex', flexDirection: 'column', gap: 1, textAlign: 'start'}}>
                                    <Typography component={'h3'} sx={{fontSize: {lg: '24px', md: '20px', sm: '18px', xs: '16px'}, fontWeight: 400}}>{t('Naila Saleh')}</Typography>
                                    <Typography component={'p'} variant={'body1'}>{t('CEO & Owner')}</Typography>
                                </Box>
                                <Box sx={{display: 'flex', gap: 1}}>
                                    <Link component={RouterLink} to={'https://www.instagram.com/liferesponse_200/'} target={'_blank'}>
                                        <InstagramIcon sx={{ color: 'info.light', backgroundColor: 'rgba(255, 255, 255, 0.15)', border: 0.5, borderColor: 'rgba(255, 255, 255, 0.2)', fontSize: '45px', padding: '10px', borderRadius: '50%' }} />
                                    </Link>
                                    <Link component={RouterLink} to={'https://www.facebook.com/naila.saleh.2025'} target={'_blank'}>
                                        <FacebookOutlinedIcon sx={{ color: 'info.light', backgroundColor: 'rgba(255, 255, 255, 0.15)', border: 0.5, borderColor: 'rgba(255, 255, 255, 0.2)', fontSize: '45px', padding: '10px', borderRadius: '50%' }} />
                                    </Link>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={{lg: 4, sm: 6, xs: 12}}>
                        <Card sx={{boxShadow: 3, borderRadius: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 1, cursor: 'pointer'}}>
                            <CardMedia component={'img'} image={manager} sx={{width: '100%', height: {lg: '460px',md:'260px'}, objectFit: 'cover', display: 'flex', alignSelf: 'center', borderRadius: 4}}></CardMedia>
                            <CardContent sx={{backgroundColor: '#2D5356', color: 'info.light', borderRadius: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: {xl: 2, lg: 1.3, xs: 2}, ":last-child": {paddingBottom: 2}}}>
                                <Box sx={{display: 'flex', flexDirection: 'column', gap: 1, textAlign: 'start'}}>
                                    <Typography component={'h3'} sx={{fontSize: {lg: '24px', md: '20px', sm: '18px', xs: '16px'}, fontWeight: 400}}>{t('Naila Saleh')}</Typography>
                                    <Typography component={'p'} variant={'body1'}>{t('CEO & Owner')}</Typography>
                                </Box>
                                <Box sx={{display: 'flex', gap: 1}}>
                                    <Link component={RouterLink} to={'https://www.instagram.com/liferesponse_200/'} target={'_blank'}>
                                        <InstagramIcon sx={{ color: 'info.light', backgroundColor: 'rgba(255, 255, 255, 0.15)', border: 0.5, borderColor: 'rgba(255, 255, 255, 0.2)', fontSize: '45px', padding: '10px', borderRadius: '50%' }} />
                                    </Link>
                                    <Link component={RouterLink} to={'https://www.facebook.com/naila.saleh.2025'} target={'_blank'}>
                                        <FacebookOutlinedIcon sx={{ color: 'info.light', backgroundColor: 'rgba(255, 255, 255, 0.15)', border: 0.5, borderColor: 'rgba(255, 255, 255, 0.2)', fontSize: '45px', padding: '10px', borderRadius: '50%' }} />
                                    </Link>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
