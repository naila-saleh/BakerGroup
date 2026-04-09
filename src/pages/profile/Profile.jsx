import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import bg from "../../assets/images/hero/bg-hero.png";
import {useTranslation} from "react-i18next";
import {Container} from "@mui/material";
import Button from "@mui/material/Button";
import {Outlet} from "react-router-dom";
import {Link as RouterLink} from "react-router-dom";
import Link from "@mui/material/Link";
import useProfile from "../../hooks/useProfile.jsx";
import Loader from "../../ui/loader/Loader.jsx";

export default function Profile() {
    const {t} = useTranslation();
    const {data, isLoading, isError, error} = useProfile();
    console.log(data);
    if(isLoading) return <Loader />
    if(isError) return <Box color={'red'}>{error.message}</Box>
    return (
        <Box className={'profile'}>
            <Box sx={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', height: '100%', paddingY: {lg: 15,md: 12, sm: 10, xs: 8}}}>
                <Typography component={'h1'} sx={{color: 'info.light',fontSize: {lg: '45px', md: '40px', sm: '35px', xs: '30px'}, textAlign: 'center'}}>{t('My Profile')}</Typography>
            </Box>
            <Box>
                <Outlet />
            </Box>
        </Box>
    )
}
