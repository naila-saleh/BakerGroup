import React from 'react'
import {Container} from "@mui/material";
import {Outlet} from "react-router-dom";
import Box from "@mui/material/Box";

export default function AuthLayout() {
    return (
        <Box sx={{backgroundColor: '#2D5356', height: '100vh', py: 5}}>
            <Container maxWidth={'sm'} sx={{py: 5, backgroundColor: '#fff', borderRadius: 3}}>
                <Outlet />
            </Container>
        </Box>

    )
}
