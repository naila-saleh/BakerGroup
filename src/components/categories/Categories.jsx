import React from 'react'
import Box from "@mui/material/Box";
import useCategories from "../../hooks/useCategories";
import Loader from "../../ui/loader/Loader.jsx";
export default function Categories() {
    const {data, isLoading, isError, error} = useCategories();
    if(isLoading) return <Loader />
    if(isError) return <Box>{error.message}</Box>
    return (
        <>
            <Box component={'section'} py={5}>{data.response.data.map(category=><Box>{category.name}</Box>)}</Box>
        </>
    )
}
