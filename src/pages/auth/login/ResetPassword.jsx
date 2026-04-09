import {useTranslation} from "react-i18next";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useForm} from "react-hook-form";
import useResetPassword from "../../../hooks/useResetPassword.jsx";
import {CircularProgress} from "@mui/material";
import {useLocation, useNavigate, useParams} from "react-router-dom";

export default function ResetPassword() {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const {email: emailParam} = useParams();
    const {state} = useLocation();
    const email = state?.email || (emailParam ? decodeURIComponent(emailParam) : "");
    const {mutate: resetPassword, isPending: mutatePasswordIsPending, isError, error} = useResetPassword();
    const {register, handleSubmit, formState: {errors}} = useForm();

    const handleResetPassword = (values) => {
        resetPassword({...values, email}, {onSuccess: () => navigate('/auth/login')}
        );
    };

    return (
        <Box sx={{textAlign: 'center', py: 4}}>
            <Typography component={'h1'} sx={{fontSize: '40px'}}>{t('Reset Password')}</Typography>
            <Box component={"form"} onSubmit={handleSubmit(handleResetPassword)} sx={{px: {md: 4, sm: 1}, py: 2, display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center'}}>
                <TextField label={t('Email')} variant='standard' value={email} fullWidth disabled />
                <TextField {...register('code', {required: t('Reset code is required')})}
                    label={t('Reset Code')} variant='standard' fullWidth
                    error={Boolean(errors.code)} helperText={errors.code?.message}
                />
                <TextField {...register('newPassword', {required: t('New password is required'), minLength: {value: 8, message: t('Password must be at least 8 characters long')}})}
                    label={t('New Password')} variant='standard' fullWidth type={'password'}
                    error={Boolean(errors.newPassword)} helperText={errors.newPassword?.message}
                />
                {isError && <Typography color={'error'}>{error?.response?.data?.message || t('Something went wrong')}</Typography>}
                <Button variant="contained" type={'submit'} sx={{mt: 4, backgroundColor: 'secondary.main', width: {sm: '50%',  xs: '60%'}}} disabled={mutatePasswordIsPending || !email}>{mutatePasswordIsPending ? <CircularProgress /> : t('Reset Password')}</Button>
            </Box>
        </Box>
    )
}
