import React, {useState} from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios";
import {registerSchema} from "../../../validation/RegisterSchema.js";
import Link from "@mui/material/Link";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {CircularProgress} from "@mui/material";
import axiosInstance from "../../../api/axiosInstance.js";
import {useTranslation} from "react-i18next";
import {red} from "@mui/material/colors";

export default function Register() {
    const navigate = useNavigate();
    const {t} = useTranslation();
    const [serverErrors, setServerErrors] = useState([]);
    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm({
        resolver: yupResolver(registerSchema), mode: "onBlur"
    });
    const registerForm = async (values) => {
        try {
            const response = await axiosInstance.post(`/auth/Account/Register`, values);
            if(response.status === 200) {
                navigate('/auth/login');
            }
        }catch (e){
            setServerErrors(e.response.data.errors);
        }
    }
    return (
        <Box component={'section'} className={'register-form'} sx={{textAlign: 'center'}}>
            <Typography component={'h1'} sx={{fontSize: '40px',pt: 4}}>{t('Register')}</Typography>
            {serverErrors.length > 0 && (<Box my={2}>
                {serverErrors.map((error)=><Typography key={error.id} component={'span'} sx={{color: red, fontSize: '15px'}}>{error}</Typography>)}
            </Box>)}
            <Box component={'form'}
                 onSubmit={handleSubmit(registerForm)}
                 sx={{px: {md: 4, sm: 1}, py: 2, display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center'}}>
                <TextField {...register('userName')} label={t("User Name")} variant="standard" fullWidth
                error={errors.userName} helperText={errors.userName?.message}/>
                <TextField {...register('fullName')} label={t("Full Name")} variant="standard" fullWidth
                error={errors.fullName} helperText={errors.fullName?.message}/>
                <TextField {...register('phoneNumber')} label={t("Phone Number")} variant="standard" fullWidth
                error={errors.phoneNumber} helperText={errors.phoneNumber?.message}/>
                <TextField {...register('email')} label={t("Email")} variant="standard" fullWidth
                error={errors.email} helperText={errors.email?.message}/>
                <TextField {...register('password')} label={t("Password")} variant="standard" fullWidth
                type={'password'} error={errors.password} helperText={errors.password?.message}/>
                <Button variant="contained" type={'submit'} sx={{mt: 4, backgroundColor: 'secondary.main', width: {sm: '50%',  xs: '60%'}}} disabled={isSubmitting}>{isSubmitting?<CircularProgress/>:t('Register')}</Button>
                <Typography component={"span"} sx={{fontSize: '15px', color: '#2D5356', mt: 2}}>{t('already have an account?')}</Typography>
                <Link component={RouterLink} variant={"button"} to={'/auth/login'} sx={{backgroundColor: '#2D5356', padding: '5px 0', width: {sm: '50%',  xs: '60%'}, mb: 3, color: 'white', borderRadius: '5px'}} boxShadow={'0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)'} underline={"none"}>{t('Login')}</Link>
            </Box>
        </Box>
    )
}
