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

export default function Register() {
    const navigate = useNavigate();
    const [serverErrors, setServerErrors] = useState([]);
    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm({
        resolver: yupResolver(registerSchema), mode: "onBlur"
    });
    const registerForm = async (values) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BURL}/auth/Account/Register`, values);
            if(response.status === 200) {
                navigate('/auth/login');
            }
        }catch (e){
            setServerErrors(e.response.data.errors);
        }
    }
    return (
        <Box component={'section'} className={'register-form'} sx={{textAlign: 'center'}}>
            <Typography component={'h1'} sx={{fontSize: '40px',pt: 4}}>Register</Typography>
            {serverErrors.length > 0 && (<Box my={2}>
                {serverErrors.map((error)=><Typography component={'span'} sx={{color: '#f33', fontSize: '15px'}}>{error}</Typography>)}
            </Box>)}
            <Box component={'form'}
                 onSubmit={handleSubmit(registerForm)}
                 sx={{px: {md: 4, sm: 1}, py: 2, display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center'}}>
                <TextField {...register('userName')} label="User Name" variant="standard" fullWidth
                error={errors.userName} helperText={errors.userName?.message}/>
                <TextField {...register('fullName')} label="Full Name" variant="standard" fullWidth
                error={errors.fullName} helperText={errors.fullName?.message}/>
                <TextField {...register('phoneNumber')} label="Phone Number" variant="standard" fullWidth
                error={errors.phoneNumber} helperText={errors.phoneNumber?.message}/>
                <TextField {...register('email')} label="Email" variant="standard" fullWidth
                error={errors.email} helperText={errors.email?.message}/>
                <TextField {...register('password')} label="Password" variant="standard" fullWidth
                type={'password'} error={errors.password} helperText={errors.password?.message}/>
                <Button variant="contained" type={'submit'} sx={{mt: 4, backgroundColor: '#D09523', px: 10}} disabled={isSubmitting}>{isSubmitting?<CircularProgress/>:'Register'}</Button>
                <Typography component={"span"} sx={{fontSize: '15px', color: '#2D5356', mt: 2}}>already have an account?</Typography>
                <Link component={RouterLink} variant={"button"} to={'/auth/login'} sx={{backgroundColor: '#2D5356', padding: '5px 93px', mb: 3, color: 'white', borderRadius: '5px'}} boxShadow={'0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)'} underline={"none"}>Login</Link>
            </Box>
        </Box>
    )
}
