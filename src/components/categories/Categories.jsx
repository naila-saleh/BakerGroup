import React, {useEffect, useState} from 'react'
import axios from "axios";
import Box from "@mui/material/Box";
import {CircularProgress} from "@mui/material";
import useCategories from "../../hooks/useCategories";
export default function Categories() {
    const {data, isLoading, isError, error} = useCategories();
    if(isLoading) return <CircularProgress />
    if(isError) return <Box>{error.message}</Box>
    return (
        <Box component={'section'} py={5}>{data.response.map(category=><Box>{category.name}</Box>)}</Box>
    )
}
