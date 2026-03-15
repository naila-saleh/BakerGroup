import React from 'react'
import useAuthStore from "../../store/useAuthStore.js";
import Box from "@mui/material/Box";

export default function Footer() {
    const token = useAuthStore((state) => state.token);
    return (
        <Box component={'footer'}></Box>
    )
}
