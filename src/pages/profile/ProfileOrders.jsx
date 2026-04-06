import React from 'react'
import {Container, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow} from "@mui/material";
import {useTranslation} from "react-i18next";
import useProfile from "../../hooks/useProfile.jsx";
import Typography from "@mui/material/Typography";
import Loader from "../../ui/loader/Loader.jsx";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import {Link as RouterLink} from "react-router";

export default function ProfileOrders() {
    const {t} = useTranslation();
    const {data, isLoading, isError, error} = useProfile();
    if(isLoading) return <Loader />
    if(isError) return <Box color={'red'}>{error.message}</Box>
    return (
        <Container maxWidth={'xl'} sx={{px: {md: 10,sm: 5, xs: 2}, py: {md: 5,sm: 3, xs: 2}, display: 'flex', flexDirection: 'column', gap: {md: 5, sm: 3, xs: 2}}}>
            <TableContainer sx={{borderRadius: '10px'}}>
                <Table sx={{backgroundColor: '#F6F6F6', borderCollapse: 'separate', borderRadius: '10px'}}>
                    <TableHead sx={{backgroundColor: '#2D5356'}}>
                        <TableRow>
                            <TableCell colSpan={5} sx={{color: '#fff', fontSize: {md: '16px', xs: '14px'}, width: '1%', whiteSpace: 'nowrap', textAlign: 'start'}}>{t('User Orders')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{fontSize: {md: '16px', xs: '14px'}, color: '#fff', textAlign: 'start'}}>{t('Order Id')}</TableCell>
                            <TableCell sx={{fontSize: {md: '16px', xs: '14px'}, color: '#fff', textAlign: 'start'}}>{t('Amount Paid')}</TableCell>
                            <TableCell sx={{fontSize: {md: '16px', xs: '14px'}, color: '#fff', textAlign: 'start'}}>{t('Payment Status')}</TableCell>
                            <TableCell sx={{fontSize: {md: '16px', xs: '14px'}, color: '#fff', textAlign: 'start'}}>{t('Status')}</TableCell>
                            <TableCell sx={{fontSize: {md: '16px', xs: '14px'}, color: '#fff', textAlign: 'start'}}>{t('Order Date')}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.orders.map(order=>
                            <TableRow>
                                <TableCell sx={{fontSize: {md: '16px', xs: '14px'}, color: '#4C4C4C', textAlign: 'start'}}># {order.id}</TableCell>
                                <TableCell sx={{fontSize: {md: '16px', xs: '14px'}, color: '#4C4C4C', textAlign: 'start'}}>$ {order.amountPaid}</TableCell>
                                <TableCell sx={{fontSize: {md: '16px', xs: '14px'}, color: '#4C4C4C', textAlign: 'start'}}>{order.paymentStatus}</TableCell>
                                <TableCell sx={{fontSize: {md: '16px', xs: '14px'}, color: '#4C4C4C', textAlign: 'start'}}>{order.status}</TableCell>
                                <TableCell sx={{fontSize: {md: '16px', xs: '14px'}, color: '#4C4C4C', textAlign: 'start'}}>{order.orderDate}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell sx={{fontWeight: 500, borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}} colSpan={5} align={'center'}>
                                <Link to={'/profile'} component={RouterLink} variant="contained" underline={'none'} sx={{textTransform: 'none', color: '#fff', backgroundColor: '#D09523', fontSize: '14px', fontWeight: 400, px: {sm: 5, xs: 4}, py: 1.1, borderRadius: 5}}>{t('Check User Info')}</Link>
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </Container>
    )
}
