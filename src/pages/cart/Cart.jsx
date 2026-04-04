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
import bg from '../../assets/images/hero/bg-hero.png'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Features from "../../components/features/Features.jsx";

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
            <Box sx={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', height: '100%', paddingY: {lg: 15,md: 12, sm: 10, xs: 8}}}>
                <Typography component={'h1'} sx={{color: '#fff',fontSize: {lg: '45px', md: '40px', sm: '35px', xs: '30px'}, textAlign: 'center'}}>Shopping Cart</Typography>
            </Box>
            <Container maxWidth={'xl'} sx={{px: {md: 10,sm: 5, xs: 2}, py: {md: 5,sm: 3, xs: 2}, display: 'flex', flexDirection: {lg: 'row', xs: 'column'}, gap: {md: 5, sm: 3, xs: 2}}}>
                <TableContainer sx={{borderRadius: '10px'}}>
                    <Table sx={{backgroundColor: '#F6F6F6'}}>
                        <TableHead sx={{backgroundColor: '#2D5356'}}>
                            <TableRow>
                                <TableCell sx={{color: '#fff', fontSize: {md: '16px', xs: '14px'}, width: '1%', whiteSpace: 'nowrap'}}>Product Name</TableCell>
                                <TableCell sx={{color: '#fff', fontSize: {md: '16px', xs: '14px'}, width: '1%', whiteSpace: 'nowrap'}}>Price</TableCell>
                                <TableCell sx={{color: '#fff', fontSize: {md: '16px', xs: '14px'}, width: '1%', whiteSpace: 'nowrap'}}>Quantity</TableCell>
                                <TableCell sx={{color: '#fff', fontSize: {md: '16px', xs: '14px'}, width: '1%', whiteSpace: 'nowrap'}}>Subtotal</TableCell>
                                <TableCell sx={{color: '#fff', fontSize: {md: '16px', xs: '14px'}, width: '1%', whiteSpace: 'nowrap'}}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.items.map(item=>(
                                <TableRow key={item.productId}>
                                    <TableCell sx={{fontSize: {md: '16px', xs: '14px'}, color: '#4C4C4C'}}>{item.productName}</TableCell>
                                    <TableCell sx={{fontSize: {md: '16px', sm: '13px', xs: '14px'}, color: '#4C4C4C', width: '1%', whiteSpace: 'no-wrap'}}>$ {item.price}</TableCell>
                                    <TableCell>
                                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                                            <IconButton disabled={updateItemIsPending} onClick={()=>handeUpdateQuantity(item.productId, '-')} sx={{width: {md: '40px', sm: '30px', xs: '20px'}}}><RemoveCircleOutlineIcon /></IconButton>
                                            <Typography component={'span'} sx={{mx:1, fontSize: {md: '16px', xs: '14px'}, color: '#4C4C4C'}}>{item.count}</Typography>
                                            <IconButton disabled={updateItemIsPending} onClick={()=>handeUpdateQuantity(item.productId, '+')} sx={{width: {md: '40px', sm: '30px', xs: '20px'}}}><AddCircleOutlineIcon /></IconButton>
                                        </Box>
                                    </TableCell>
                                    <TableCell sx={{fontSize: {md: '16px', xs: '14px'}, color: '#4C4C4C'}}>$ {item.price * item.count}</TableCell>
                                    <TableCell>
                                        <Button color={'error'} onClick={()=>removeItem(item.productId)} disabled={removeItemIsPending} sx={{fontSize: {md: '14px', sm: '12px', xs: '11px'}}}><CancelOutlinedIcon /></Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell sx={{fontWeight: 500}} colSpan={5} align={'left'}></TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
                <TableContainer sx={{borderRadius: '10px'}}>
                    <Table sx={{backgroundColor: '#F6F6F6', borderCollapse: 'separate', borderRadius: '10px'}}>
                        <TableHead sx={{backgroundColor: '#2D5356'}}>
                            <TableRow>
                                <TableCell colSpan={2} sx={{color: '#fff', fontSize: {md: '16px', xs: '14px'}, width: '1%', whiteSpace: 'nowrap'}}>Order Summary</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell sx={{fontSize: {md: '16px', xs: '14px'}, color: '#4C4C4C'}}>Subtotal</TableCell>
                                <TableCell sx={{fontSize: {md: '16px', xs: '14px'}, color: '#4C4C4C'}}>$ {data.cartTotal}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{fontSize: {md: '16px', xs: '14px'}, color: '#4C4C4C'}}>Shipping</TableCell>
                                <TableCell sx={{fontSize: {md: '16px', xs: '14px'}, color: '#4C4C4C'}}>Free</TableCell>
                            </TableRow>
                            <TableRow sx={{backgroundColor: '#fff'}}>
                                <TableCell sx={{fontSize: {md: '17px', xs: '15px'}, fontWeight: 'bold'}}>Total</TableCell>
                                <TableCell sx={{fontSize: {md: '17px', xs: '15px'}, fontWeight: 'bold'}}>$ {data.cartTotal}</TableCell>
                            </TableRow>
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell sx={{fontWeight: 500, borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}} colSpan={2} align={'center'}>
                                    <Button variant="contained" sx={{textTransform: 'none', color: '#fff', backgroundColor: '#D09523', fontSize:  {md: '14px', sm: '12px', xs: '11px'}, fontWeight: 400, px: {sm: 5, xs: 4}, py: 1.1, borderRadius: 5}}>Proceed to Checkout</Button>
                                </TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </Container>
            <Features />
        </Box>
    )
}
