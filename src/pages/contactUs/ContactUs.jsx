import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import bg from "../../assets/images/hero/bg-hero.png";
import {useTranslation} from "react-i18next";
import {FormControl, Grid} from "@mui/material";
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import Link from "@mui/material/Link";
import {Link as RouterLink} from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Features from "../../components/features/Features.jsx";

export default function ContactUs() {
    const {t} = useTranslation();
    return (
        <Box className={'contact-us'} component={'section'}>
            <Box sx={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', height: '100%', paddingY: {lg: 15,md: 12, sm: 10, xs: 8}}}>
                <Typography component={'h1'} sx={{color: 'info.light',fontSize: {lg: '45px', md: '40px', sm: '35px', xs: '30px'}, textAlign: 'center'}}>{t('Contact Us')}</Typography>
            </Box>
            <Grid container spacing={{md: 8, xs: 5}} sx={{py: {lg: 15,md: 12, sm: 10, xs: 8}, px: {lg: 10, md: 5, sm: 2, xs: 0}, textAlign: {lg: 'start', xs: 'center'}, display: 'flex', flexDirection: {lg: 'row', xs: 'column'}, alignItems: 'center', justifyContent: {md: 'start', xs: 'center'} }}>
                <Grid size={{md: 7, xs: 11}} sx={{display: 'flex', flexDirection: 'column', alignItems: {lg: 'start', xs: 'center'} }}>
                    <Typography component={'h2'} sx={{fontSize: {lg: '35px', md: '30px', sm: '25px', xs: '20px'}, fontWeight: 500, marginBottom: 2}}>{t('Get in Touch')}</Typography>
                    <Typography sx={{ color: 'info.dark' }}>{t("We're here for you every step of the way. Whether you have questions, need order assistance, or want to share feedback. Our friendly customer support team is ready to assist. Our team is here to help! Reach out to us via")}</Typography>
                    <Box sx={{my: 5, display: 'flex', flexDirection: 'column', gap: 2}}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2}} >
                            <MarkEmailUnreadOutlinedIcon sx={{ color: 'secondary.main', backgroundColor: 'rgba(255, 185, 52, 0.15)', fontSize: '45px', padding: '10px', borderRadius: 2 }} />
                            <Box>
                                <Typography sx={{ color: 'info.dark', fontSize: 14 }}>{t('Mail')}</Typography>
                                <Typography>nailasaleh2004@gmail.com</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2}} >
                            <PhoneInTalkOutlinedIcon sx={{ color: '#5067D6', backgroundColor: 'rgba(80, 103, 214, 0.15)', fontSize: '45px', padding: '10px', borderRadius: 2 }} />
                            <Box>
                                <Typography sx={{ color: 'info.dark', fontSize: 14 }}>{t('Phone')}</Typography>
                                <Typography>+972 58-430-0202</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2}} >
                            <PrintOutlinedIcon sx={{ color: '#7F51B1', backgroundColor: 'rgba(127, 81, 177, 0.15)', fontSize: '45px', padding: '10px', borderRadius: 2 }} />
                            <Box>
                                <Typography sx={{ color: 'info.dark', fontSize: 14 }}>{t('Fax')}</Typography>
                                <Typography>(410) 279-9587</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2}} >
                            <PlaceOutlinedIcon sx={{ color: '#22A45B', backgroundColor: 'rgba(34, 164, 91, 0.15)', fontSize: '45px', padding: '10px', borderRadius: 2 }} />
                            <Box>
                                <Typography sx={{ color: 'info.dark', fontSize: 14 }}>{t('Office')}</Typography>
                                <Typography>{t('5678 Seltice Way Coeur D Alene')}</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Typography component={'h3'} sx={{fontSize: {lg: '25px', md: '22px', sm: '18px', xs: '15px'}, fontWeight: 500, marginBottom: 2}}>{t('Stay Connected')}</Typography>
                    <Box sx={{ display: 'flex', gap: 2, justifyContent: {lg: 'start', xs: 'center'} }}>
                        <Link component={RouterLink} to={'https://www.instagram.com/sohyb.bakergroup/'} underline={'none'} sx={{cursor: 'pointer'}} target={'_blank'}><InstagramIcon sx={{color: 'secondary.main', backgroundColor: 'rgba(255, 185, 52, 0.15)', fontSize: '45px', padding: '12px', borderRadius: '50%'}} /></Link>
                        <Link component={RouterLink} to={'https://www.facebook.com/sohyb.bakergroup'} underline={'none'} sx={{cursor: 'pointer'}} target={'_blank'}><FacebookOutlinedIcon sx={{color: 'secondary.main', backgroundColor: 'rgba(255, 185, 52, 0.15)', fontSize: '45px', padding: '12px', borderRadius: '50%'}} /></Link>
                    </Box>
                </Grid>
                <Grid size={{lg: 5, md: 7, sm: 9, xs: 11}} >
                    <Box sx={{backgroundColor: '#2D5356', borderRadius: 3, color: 'info.light', display: 'flex', flexDirection: 'column', gap: 2, py: 5, px: {xl: 10, lg: 5, md: 5, xs: 2} , textAlign: 'center' }}>
                        <Typography component={'h2'} sx={{fontSize: {lg: '35px', md: '30px', sm: '25px', xs: '20px'}, fontWeight: 500}}>{t('Send us a message')}</Typography>
                        <Box sx={{ mb: 4 }}>
                            <Typography sx={{ fontSize: {sm: 15, xs: 13} }} >{t('Your email address will not be published.')}</Typography>
                            <Typography sx={{ fontSize: {sm: 15, xs: 13} }} >{t('Required fields are marked')}</Typography>
                        </Box>
                        <FormControl fullWidth sx={{ display: 'flex', flexDirection: 'column', gap: 2 }} component={'form'} onSubmit={(e) => e.preventDefault()}>
                            <TextField label={t('Name')} variant="outlined"
                                 slotProps={{
                                    inputLabel: {
                                        sx: {
                                            color: 'common.white',
                                            '&.Mui-focused': { color: 'common.white' },
                                        },
                                    },
                                }}
                                 sx={{
                                           '& .MuiInputBase-input': {
                                               color: 'common.white',
                                               WebkitTextFillColor: '#fff',
                                               caretColor: '#fff',
                                           },
                                           '& .MuiOutlinedInput-root': {
                                               '& fieldset': { borderColor: 'common.white' },
                                               '&:hover fieldset': { borderColor: 'common.white' },
                                               '&.Mui-focused fieldset': { borderColor: 'common.white' },
                                           },
                                           '& input:-webkit-autofill': {
                                               WebkitBoxShadow: '0 0 0 1000px #2D5356 inset',
                                               WebkitTextFillColor: '#fff',
                                               caretColor: '#fff',
                                               borderRadius: 'inherit',
                                               transition: 'background-color 9999s ease-out 0s',
                                           },
                                           '& input:-webkit-autofill:hover': {
                                               WebkitBoxShadow: '0 0 0 1000px #2D5356 inset',
                                               WebkitTextFillColor: '#fff',
                                           },
                                           '& input:-webkit-autofill:focus': {
                                               WebkitBoxShadow: '0 0 0 1000px #2D5356 inset',
                                               WebkitTextFillColor: '#fff',
                                           },
                                       }}
                            />
                            <TextField label={t('Email Address')} variant="outlined"
                                slotProps={{
                                    inputLabel: {
                                        sx: {
                                            color: 'common.white',
                                            '&.Mui-focused': { color: 'common.white' },
                                        },
                                    },
                                }}
                                sx={{
                                           '& .MuiInputBase-input': {
                                               color: 'common.white',
                                               WebkitTextFillColor: '#fff',
                                               caretColor: '#fff',
                                           },
                                           '& .MuiOutlinedInput-root': {
                                               '& fieldset': { borderColor: 'common.white' },
                                               '&:hover fieldset': { borderColor: 'common.white' },
                                               '&.Mui-focused fieldset': { borderColor: 'common.white' },
                                           },
                                           '& input:-webkit-autofill': {
                                               WebkitBoxShadow: '0 0 0 1000px #2D5356 inset',
                                               WebkitTextFillColor: '#fff',
                                               caretColor: '#fff',
                                               borderRadius: 'inherit',
                                               transition: 'background-color 9999s ease-out 0s',
                                           },
                                           '& input:-webkit-autofill:hover': {
                                               WebkitBoxShadow: '0 0 0 1000px #2D5356 inset',
                                               WebkitTextFillColor: '#fff',
                                           },
                                           '& input:-webkit-autofill:focus': {
                                               WebkitBoxShadow: '0 0 0 1000px #2D5356 inset',
                                               WebkitTextFillColor: '#fff',
                                           },
                                       }}
                            />
                            <TextField label={t('Phone Number')} variant="outlined"
                                slotProps={{
                                           inputLabel: {
                                               sx: {
                                                   color: 'common.white',
                                                   '&.Mui-focused': { color: 'common.white' },
                                               },
                                           },
                                       }}
                                sx={{
                                           '& .MuiInputBase-input': {
                                               color: 'common.white',
                                               WebkitTextFillColor: '#fff',
                                               caretColor: '#fff',
                                           },
                                           '& .MuiOutlinedInput-root': {
                                               '& fieldset': { borderColor: 'common.white' },
                                               '&:hover fieldset': { borderColor: 'common.white' },
                                               '&.Mui-focused fieldset': { borderColor: 'common.white' },
                                           },
                                           '& input:-webkit-autofill': {
                                               WebkitBoxShadow: '0 0 0 1000px #2D5356 inset',
                                               WebkitTextFillColor: '#fff',
                                               caretColor: '#fff',
                                               borderRadius: 'inherit',
                                               transition: 'background-color 9999s ease-out 0s',
                                           },
                                           '& input:-webkit-autofill:hover': {
                                               WebkitBoxShadow: '0 0 0 1000px #2D5356 inset',
                                               WebkitTextFillColor: '#fff',
                                           },
                                           '& input:-webkit-autofill:focus': {
                                               WebkitBoxShadow: '0 0 0 1000px #2D5356 inset',
                                               WebkitTextFillColor: '#fff',
                                           },
                                       }}
                            />
                            <TextField label={t('Message')} variant="outlined"
                                slotProps={{
                                           inputLabel: {
                                               sx: {
                                                   color: 'common.white',
                                                   '&.Mui-focused': { color: 'common.white' },
                                               },
                                           },
                                       }}
                                sx={{
                                           '& .MuiInputBase-input': {
                                               color: 'common.white',
                                               WebkitTextFillColor: '#fff',
                                               caretColor: '#fff',
                                           },
                                           '& .MuiOutlinedInput-root': {
                                               '& fieldset': { borderColor: 'common.white' },
                                               '&:hover fieldset': { borderColor: 'common.white' },
                                               '&.Mui-focused fieldset': { borderColor: 'common.white' },
                                           },
                                           '& input:-webkit-autofill': {
                                               WebkitBoxShadow: '0 0 0 1000px #2D5356 inset',
                                               WebkitTextFillColor: '#fff',
                                               caretColor: '#fff',
                                               borderRadius: 'inherit',
                                               transition: 'background-color 9999s ease-out 0s',
                                           },
                                           '& input:-webkit-autofill:hover': {
                                               WebkitBoxShadow: '0 0 0 1000px #2D5356 inset',
                                               WebkitTextFillColor: '#fff',
                                           },
                                           '& input:-webkit-autofill:focus': {
                                               WebkitBoxShadow: '0 0 0 1000px #2D5356 inset',
                                               WebkitTextFillColor: '#fff',
                                           },
                                       }}
                            />
                            <Button type={'submit'} variant="contained" sx={{ textTransform: 'none', backgroundColor: 'secondary.main', color: 'common.white', '&:hover': { backgroundColor: 'secondary.dark' }, marginTop: 2, borderRadius: 5 }}>{t('Submit')}</Button>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
            <Features />
        </Box>
    )
}
