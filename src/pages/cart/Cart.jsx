import React from 'react'
import useCart from "../../hooks/useCart";
import Loader from "../../ui/loader/Loader.jsx";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Container, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow} from "@mui/material";
import Button from "@mui/material/Button";

export default function Cart() {
    const {data, isLoading, isError, error} = useCart();
    console.log(data);
    if(isLoading) return <Loader />
    if(isError) return <Box color={'red'}>{error.message}</Box>
    return (
        <Box className={'cart'}>
            <Container maxWidth={'xl'} sx={{px: {md: 10,sm: 5, xs: 2}, py: {md: 5,sm: 3, xs: 2}}}>
                <Typography component={'h1'} sx={{fontSize: {lg: '45px', md: '40px', sm: '35px', xs: '30px'}, textAlign: 'center', pb: 3}}>My Cart</Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Product Name</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Total Price</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.items.map(item=>(
                                <TableRow key={item.id}>
                                    <TableCell>{item.productName}</TableCell>
                                    <TableCell>$ {item.price}</TableCell>
                                    <TableCell>{item.count}</TableCell>
                                    <TableCell>$ {item.price * item.count}</TableCell>
                                    <TableCell>
                                        <Button variant={'contained'} color={'error'}>Remove</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableCell sx={{fontWeight: 500}} align={'left'}>Total:</TableCell>
                            <TableCell sx={{fontWeight: 500}} colSpan={4} align={'left'}>$ {data.cartTotal}</TableCell>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </Container>
        </Box>
    )
}
