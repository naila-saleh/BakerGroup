import React from 'react'
import useProducts from "../../hooks/useProducts";
import Box from "@mui/material/Box";
import Loader from "../../ui/loader/Loader.jsx";

export default function Products() {
    const {data, isLoading, isError, error} = useProducts();
    if(isLoading) return <Loader />
    if(isError) return <Box>{error.message}</Box>
    console.log(data);
    return (
        <Box>
            {data.response.data.map(product=><Box>{product.name}</Box>)}
        </Box>
    )
}
