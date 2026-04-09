import React from 'react'
import {Container} from "@mui/material";
import {Outlet} from "react-router-dom";
import Box from "@mui/material/Box";

export default function AuthLayout() {
    return (
        <Box sx={{backgroundColor: '#2D5356', height: '100vh', px: 2, py: 3}}>
            <Container maxWidth={'sm'} sx={{backgroundColor: 'info.light', borderRadius: 3}}>
                <Outlet />
            </Container>
        </Box>

    )
}
