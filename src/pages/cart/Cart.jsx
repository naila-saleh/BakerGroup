import React from 'react'
import useCart from "../../hooks/useCart";
import Loader from "../../ui/loader/Loader.jsx";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Container, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow} from "@mui/material";
import Button from "@mui/material/Button";
import useRemoveFromCart from "../../hooks/useRemoveFromCart.jsx";
import useUpdateCartItem from "../../hooks/useUpdateCartItem.jsx";
import IconButton from "@mui/material/IconButton";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function Cart() {
    const {data, isLoading, isError, error} = useCart();
    const {mutate: removeItem, isPending: removeItemIsPending} = useRemoveFromCart();
    const {mutate: updateQuantity, isPending: updateItemIsPending} = useUpdateCartItem();
    const handeUpdateQuantity = (productId, action) => {
        const item = data.items.find(item => item.productId === productId);
        if(action === '-' && item.count === 1) return removeItem(productId);
        const count = action === '+' ? item.count + 1 : item.count - 1;
        updateQuantity({productId, count});
    }
    if(isLoading) return <Loader />
    if(isError) return <Box color={'red'}>{error.message}</Box>
    return (
        <Box className={'cart'}>
            <Container maxWidth={'xl'} sx={{px: {md: 10,sm: 5, xs: 2}, py: {md: 5,sm: 3, xs: 2}}}>
                <Typography component={'h1'} sx={{fontSize: {lg: '45px', md: '40px', sm: '35px', xs: '30px'}, textAlign: 'center', pb: 3}}>Shopping Cart</Typography>
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
                                <TableRow key={item.productId}>
                                    <TableCell>{item.productName}</TableCell>
                                    <TableCell>$ {item.price}</TableCell>
                                    <TableCell>
                                        <Box>
                                            <IconButton disabled={updateItemIsPending} onClick={()=>handeUpdateQuantity(item.productId, '-')}><RemoveCircleOutlineIcon /></IconButton>
                                            <Typography component={'span'} sx={{mx: 1}}>{item.count}</Typography>
                                            <IconButton disabled={updateItemIsPending} onClick={()=>handeUpdateQuantity(item.productId, '+')}><AddCircleOutlineIcon /></IconButton>
                                        </Box>
                                    </TableCell>
                                    <TableCell>$ {item.price * item.count}</TableCell>
                                    <TableCell>
                                        <Button variant={'contained'} color={'error'} onClick={()=>removeItem(item.productId)} disabled={removeItemIsPending}>Remove</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableCell sx={{fontWeight: 500}} colSpan={3} align={'left'}>Total:</TableCell>
                            <TableCell sx={{fontWeight: 500}} colSpan={2} align={'left'}>$ {data.cartTotal}</TableCell>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </Container>
        </Box>
    )
}
