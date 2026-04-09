import Box from "@mui/material/Box";
import logo from "../../assets/images/logo/BakerGroup-yelloLogo.svg"
import Typography from "@mui/material/Typography";
import {Container} from "@mui/material";
import {useTranslation} from "react-i18next";
import Link from "@mui/material/Link";
import {Link as RouterLink} from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
export default function Footer() {
    const {t} = useTranslation();
    return (
        <Box component={'footer'}>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: {md: 4, sm: 3, xs: 2}, border: '2px solid rgba(0,0,0,0.1)', py: 1 }}>
                <Box component={'img'} src={logo} width={{lg: 60, md: 50, sm: 40, xs: 40}} />
                <Typography component={'h2'} sx={{fontSize: {lg: '50px', md: '40px', sm: '30px', xs: '30px'}, fontWeight: '700'}}>BakerGroup</Typography>
            </Box>
            <Container maxWidth={"xl"} sx={{display: 'flex', flexDirection: {sm: 'row', xs: 'column'}, gap: {sm: 0, xs: 5}, justifyContent: 'space-around', alignItems: {sm: 'start', xs: 'center'}, py: 5, textAlign: {sm: 'start', xs: 'center'}}}>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                    <Typography component={'h3'} sx={{fontSize: {md: '20px', xs: '18px'}, fontWeight: '500'}}>{t('About')}</Typography>
                        <Link to={'#'} underline={'none'} sx={{fontSize: {md: '18px', xs: '15px'}, fontWeight: '500', cursor: 'pointer', '&:hover': {color: 'secondary.main', transition: 'color 0.3s'}}}>{t('Our Company')}</Link>
                        <Link to={'#'} underline={'none'} sx={{fontSize: {md: '18px', xs: '15px'}, fontWeight: '500', cursor: 'pointer', '&:hover': {color: 'secondary.main', transition: 'color 0.3s'}}}>{t('Our Story')}</Link>
                        <Link to={'#'} underline={'none'} sx={{fontSize: {md: '18px', xs: '15px'}, fontWeight: '500', cursor: 'pointer', '&:hover': {color: 'secondary.main', transition: 'color 0.3s'}}}>{t('Blog')}</Link>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                    <Typography component={'h3'} sx={{fontSize: {md: '20px', xs: '18px'}, fontWeight: '500'}}>{t('Information')}</Typography>
                        <Link to={'#'} underline={'none'} sx={{fontSize: {md: '18px', xs: '15px'}, fontWeight: '500', cursor: 'pointer', '&:hover': {color: 'secondary.main', transition: 'color 0.3s'}}}>{t('Delivery Information')}</Link>
                        <Link to={'#'} underline={'none'} sx={{fontSize: {md: '18px', xs: '15px'}, fontWeight: '500', cursor: 'pointer', '&:hover': {color: 'secondary.main', transition: 'color 0.3s'}}}>{t('Privacy Policy')}</Link>
                        <Link to={'#'} underline={'none'} sx={{fontSize: {md: '18px', xs: '15px'}, fontWeight: '500', cursor: 'pointer', '&:hover': {color: 'secondary.main', transition: 'color 0.3s'}}}>{t('Terms & Conditions')}</Link>
                        <Link to={'#'} underline={'none'} sx={{fontSize: {md: '18px', xs: '15px'}, fontWeight: '500', cursor: 'pointer', '&:hover': {color: 'secondary.main', transition: 'color 0.3s'}}}>{t('Return')}</Link>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                    <Typography component={'h3'} sx={{fontSize: {md: '20px', xs: '18px'}, fontWeight: '500'}}>{t('Support')}</Typography>
                        <Link to={'#'} underline={'none'} sx={{fontSize: {md: '18px', xs: '18px'}, fontWeight: '500', cursor: 'pointer', '&:hover': {color: 'secondary.main', transition: 'color 0.3s'}}}>{t('Contact Us')}</Link>
                        <Link to={'#'} underline={'none'} sx={{fontSize: {md: '18px', xs: '18px'}, fontWeight: '500', cursor: 'pointer', '&:hover': {color: 'secondary.main', transition: 'color 0.3s'}}}>{t('Help')}</Link>
                        <Link to={'#'} underline={'none'} sx={{fontSize: {md: '18px', xs: '18px'}, fontWeight: '500', cursor: 'pointer', '&:hover': {color: 'secondary.main', transition: 'color 0.3s'}}}>{t('FAQ')}</Link>
                        <Link to={'#'} underline={'none'} sx={{fontSize: {md: '18px', xs: '18px'}, fontWeight: '500', cursor: 'pointer', '&:hover': {color: 'secondary.main', transition: 'color 0.3s'}}}>{t('Checkout')}</Link>
                </Box>
            </Container>
            <Container maxWidth={"xl"} sx={{display: 'flex', flexDirection: {sm: 'row', xs: 'column'}, gap: {sm: 0, xs: 2}, justifyContent: 'space-between', alignItems: {sm: 'start', xs: 'center'}, py: 3, textAlign: {sm: 'start', xs: 'center'}, backgroundColor: '#2D5356'}}>
                <Typography component={'p'} sx={{fontSize: {md: '17px', xs: '15px'}, fontWeight: '400', color: '#fff'}}>© {t('2024 BakerGroup. All rights reserved.')}</Typography>
                <Box>
                    <Link component={RouterLink} to={'https://www.instagram.com/sohyb.bakergroup/'} underline={'none'} sx={{color: '#fff', mx: 1, '&:hover': {color: 'secondary.main', transition: 'color 0.3s'}, cursor: 'pointer'}} target={'_blank'}><InstagramIcon /></Link>
                    <Link component={RouterLink} to={'https://www.facebook.com/sohyb.bakergroup'} underline={'none'} sx={{color: '#fff', mx: 1, '&:hover': {color: 'secondary.main', transition: 'color 0.3s'}, cursor: 'pointer'}} target={'_blank'}><FacebookOutlinedIcon /></Link>
                </Box>
            </Container>
        </Box>
    )
}
