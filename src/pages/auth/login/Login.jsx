import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useForm} from "react-hook-form";
import axios from "axios";
import Link from "@mui/material/Link";
import {Link as RouterLink} from "react-router";

export default function Login() {
    const {register, handleSubmit} = useForm({});
    const registerForm = async (values) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BURL}/auth/Account/Login`, values);
            console.log(response.data);
            alert(response.data.message)
        }catch (e){
            console.log(e.message);
        }
    }
    return (
        <Box component={'section'} className={'register-form'} sx={{textAlign: 'center'}}>
            <Typography component={'h1'} sx={{fontSize: '40px'}}>Login</Typography>
            <Box component={'form'}
                 onSubmit={handleSubmit(registerForm)}
                 sx={{px: {md: 4, sm: 1}, py: 2, display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center'}}>
                <TextField {...register('email')} label="Email" variant="standard" fullWidth/>
                <TextField {...register('password')} label="Password" variant="standard" fullWidth type={'password'}/>
                <Button variant="contained" type={'submit'} sx={{mt: 4, backgroundColor: '#D09523', px: 10}}>Login</Button>
                <Typography component={"span"} sx={{fontSize: '15px', color: '#2D5356', mt: 2}}>don&#39;t have an account?</Typography>
                <Link component={RouterLink} variant={"button"} to={'/auth/register'} sx={{backgroundColor: '#2D5356', padding: '5px 68px', mb: 3, color: 'white', borderRadius: '5px'}} boxShadow={'0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)'} underline={"none"}>Register</Link>
            </Box>
        </Box>
    )
}
