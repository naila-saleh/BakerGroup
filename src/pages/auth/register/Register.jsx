import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios";
import {registerSchema} from "../../../validation/RegisterSchema.js";

export default function Register() {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(registerSchema)
    });
    const registerForm = async (values) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BURL}/auth/Account/Register`, values);
            console.log(response.data);
            alert(response.data.message)
        }catch (e){
            console.log(e.message);
        }
    }
    return (
        <Box component={'section'} className={'register-form'} sx={{textAlign: 'center'}}>
            <Typography component={'h1'} sx={{fontSize: '40px'}}>Register</Typography>
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
                <Button variant="contained" type={'submit'} sx={{my: 4, backgroundColor: '#D09523', px: 10}}>Register</Button>
            </Box>
        </Box>
    )
}
