import {useState} from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useForm} from "react-hook-form";
import axios from "axios";
import Link from "@mui/material/Link";
import {Link as RouterLink} from "react-router-dom";
import {yupResolver} from "@hookform/resolvers/yup";
import {loginSchema} from "../../../validation/LoginSchema.js";
import {CircularProgress} from "@mui/material";
import useAuthStore from "../../../store/useAuthStore.js";
import {useNavigate} from "react-router-dom";
import axiosInstance from "../../../api/axiosInstance.js";
import {useTranslation} from "react-i18next";
import {red} from "@mui/material/colors";

export default function Login() {
    const setToken = useAuthStore((state) => state.setToken);
    const navigate = useNavigate()
    const handleForgotPassword = () => {
        navigate('/auth/forgot-password');
    }
    const {t} = useTranslation();
    const [serverErrors, setServerErrors] = useState([]);
    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm({
        resolver: yupResolver(loginSchema), mode: "onBlur"
    });
    const loginForm = async (values) => {
        try {
            const response = await axiosInstance.post(`/auth/Account/Login`, values);
            if(response.status === 200) {
                setToken(response.data.accessToken);
                navigate('/');
            }
        }catch (e){
            setServerErrors(e.response.data.message);
        }
    }
    return (
        <Box component={'section'} className={'login-form'} sx={{textAlign: 'center'}}>
            <Typography component={'h1'} sx={{fontSize: '40px'}}>{t('Login')}</Typography>
            {serverErrors.length > 0 && (<Box my={2}>
                <Typography component={'span'} sx={{color: red, fontSize: '15px'}}>{serverErrors}</Typography>
            </Box>)}
            <Box component={'form'}
                 onSubmit={handleSubmit(loginForm)}
                 sx={{px: {md: 4, sm: 1}, py: 2, display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center'}}>
                <TextField {...register('email')} label={t('Email')} variant="standard" fullWidth
                error={errors.email} helperText={errors.email?.message}/>
                <TextField {...register('password')} label={t('Password')} variant="standard" fullWidth type={'password'}
                error={errors.password} helperText={errors.password?.message}/>
                <Button variant="contained" type={'submit'} sx={{mt: 4, backgroundColor: 'secondary.main', width: {sm: '50%',  xs: '60%'}}} disabled={isSubmitting}>{isSubmitting?<CircularProgress/>:t('Login')}</Button>
                <Typography component={"span"} sx={{fontSize: '15px', color: '#2D5356', mt: 2}}>{t(`don't have an account?`)}</Typography>
                <Link component={RouterLink} variant={"button"} to={'/auth/register'} sx={{backgroundColor: '#2D5356', padding: '5px 0', width: {sm: '50%',  xs: '60%'}, color: 'white', borderRadius: '5px'}} boxShadow={'0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)'} underline={"none"}>{t('Register')}</Link>
                <Button onClick={handleForgotPassword} variant="contained" sx={{mt: 1, mb: 4, backgroundColor: 'secondary.dark', width: {sm: '50%',  xs: '60%'} }} >{t('Forgot Password?')}</Button>
            </Box>
        </Box>
    )
}
