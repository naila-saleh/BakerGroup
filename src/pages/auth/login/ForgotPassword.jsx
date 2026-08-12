import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {useTranslation} from "react-i18next";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {CircularProgress} from "@mui/material";
import useForgotPassword from "../../../hooks/useForgotPassword.jsx";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

export default function ForgotPassword() {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const {mutate: forgotPassword, isPending: forgotPasswordIsPending, isError, error} = useForgotPassword();
    const {register, handleSubmit, formState: {errors}} = useForm();

    const handleForgotPassword = (values) => {
        forgotPassword(values.email, { onSuccess: ()=> navigate(`/auth/reset-password/${values.email}`)});
    };

    return (
        <Box sx={{textAlign: 'center', py: 4}}>
            <Typography component={'h1'} sx={{fontSize: '40px'}}>{t('Forgot Password?')}</Typography>
            <Box component={"form"} onSubmit={handleSubmit(handleForgotPassword)} sx={{px: {md: 4, sm: 1}, py: 2, display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center'}}>
                <TextField {...register('email', {required: t('Email is required'), pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: t('Please enter a valid email')}})}
                    label={t('Email')} variant="standard" fullWidth
                    error={Boolean(errors.email)} helperText={errors.email?.message}
                />
                {isError && <Typography color={'error'}>{error?.response?.data?.message || t('Something went wrong')}</Typography>}
                <Button variant="contained" type={'submit'} sx={{mt: 4, backgroundColor: 'secondary.main', width: {sm: '50%',  xs: '60%'}}} disabled={forgotPasswordIsPending}>{forgotPasswordIsPending?<CircularProgress />: t('Send Code')}</Button>
            </Box>
        </Box>
    )
}
