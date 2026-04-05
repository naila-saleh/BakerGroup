import React, {useState} from 'react'
import Box from "@mui/material/Box";
import bg from "../../assets/images/hero/bg-hero.png";
import Typography from "@mui/material/Typography";
import {
    Container,
    FormControl, FormControlLabel, FormLabel, InputAdornment, InputLabel, Radio, RadioGroup, Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TableRow
} from "@mui/material";
import Button from "@mui/material/Button";
import useCart from "../../hooks/useCart.jsx";
import Loader from "../../ui/loader/Loader.jsx";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import {useNavigate} from "react-router-dom";
import Features from "../../components/features/Features.jsx";
import useCheckout from "../../hooks/useCheckout.jsx";
import {useTranslation} from "react-i18next";

export default function Checkout() {
    const {data, isLoading, isError, error} = useCart();
    const [paymentMethod, setPaymentMethod] = useState('Cash');
    const navigate = useNavigate();
    const {t} = useTranslation();
    const {mutate: checkoutMutate, isPending: checkoutIsPending} = useCheckout();
    if(isLoading) return <Loader />
    if(isError) return <Box color={'red'}>{error.message}</Box>
    return (
        <Box className={'checkout'}>
            <Box sx={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', height: '100%', paddingY: {lg: 15,md: 12, sm: 10, xs: 8}}}>
                <Typography component={'h1'} sx={{color: '#fff',fontSize: {lg: '45px', md: '40px', sm: '35px', xs: '30px'}, textAlign: 'center'}}>{t('Shopping Cart')}/ {t('Checkout')}</Typography>
            </Box>
            <Container maxWidth={'xl'} sx={{px: {md: 10,sm: 5, xs: 2}, py: {md: 5,sm: 3, xs: 2}}}>
                <Typography component={'h2'} sx={{fontSize: {lg: '35px', md: '30px', sm: '28px', xs: '25px'}, fontWeight: '500'}}>{t('Billing Details')}</Typography>
                <Box>
                    <FormControl component={'form'} sx={{display: 'flex', flexDirection: 'column', gap: {md: 5, sm: 3, xs: 2}, py: {md: 5,sm: 3, xs: 2}}}>
                        <Box sx={{display: 'flex', flexDirection: {lg: 'row', xs: 'column'}, gap: {md: 5, sm: 3, xs: 2}}}>
                            <Box sx={{display: 'flex', flexDirection: 'column', gap: 3, width: {lg: '200%', xs: '100%'}}}>
                                <Box className={'full-name'} sx={{display: 'flex', gap: 2, flexDirection: {md: 'row', xs: 'column'}}}>
                                    <TextField label={t('First Name')} variant={'outlined'} fullWidth />
                                    <TextField label={t('Last Name')} variant={'outlined'} fullWidth />
                                </Box>
                                <Box className={'contact-info'} sx={{display: 'flex', gap: 2, flexDirection: {md: 'row', xs: 'column'}}}>
                                    <TextField label={t("Phone Number")} variant="outlined" fullWidth
                                               slotProps={{
                                                   input: {
                                                       startAdornment: (
                                                           <InputAdornment position="start">
                                                               <Select variant="standard" disableUnderline defaultValue={'+970'} sx={{minWidth: 70, '& .MuiSelect-select': {py: 0, pl: 0,},}}>
                                                                   <MenuItem value="+970">+970</MenuItem>
                                                                   <MenuItem value="+972">+972</MenuItem>
                                                               </Select>
                                                           </InputAdornment>
                                                       )
                                                   }
                                               }}
                                    />
                                    <TextField label={t('Email Address')} variant={'outlined'} fullWidth />
                                </Box>
                                <TextField label={t('Company Name (Optional)')} variant={'outlined'} fullWidth />
                                <FormControl>
                                    <InputLabel id={'region'}>{t('Region')}</InputLabel>
                                    <Select labelId={'region'} id={'region'} label={t('Region')} fullWidth variant={'outlined'}>
                                        <MenuItem value={'WestBank'}>{t('West Bank')}</MenuItem>
                                        <MenuItem value={'Gaza'}>{t('Gaza')}</MenuItem>
                                        <MenuItem value={'OccupiedInterior'}>{t('Occupied Interior')}</MenuItem>
                                    </Select>
                                </FormControl>
                                <Box className={'address'} sx={{display: 'flex', gap: 2, flexDirection: {md: 'row', xs: 'column'}}}>
                                    <FormControl fullWidth>
                                        <InputLabel id={'city'}>{t('City')}</InputLabel>
                                        <Select labelId={'city'} id={'city'} label={'City'} fullWidth variant={'outlined'}>
                                            <MenuItem value={'Qalqilya'}>{t('Qalqilya')}</MenuItem>
                                            <MenuItem value={'Nablus'}>{t('Nablus')}</MenuItem>
                                            <MenuItem value={'Ramallah'}>{t('Ramallah')}</MenuItem>
                                            <MenuItem value={'AlBirah'}>{t('Al Birah')}</MenuItem>
                                            <MenuItem value={'Hebron'}>{t('Hebron')}</MenuItem>
                                            <MenuItem value={'Jerusalem'}>{t('Jerusalem')}</MenuItem>
                                            <MenuItem value={'Jenin'}>{t('Jenin')}</MenuItem>
                                            <MenuItem value={'Tubas'}>{t('Tubas')}</MenuItem>
                                            <MenuItem value={'Tulkarm'}>{t('Tulkarm')}</MenuItem>
                                            <MenuItem value={'Salfit'}>{t('Salfit')}</MenuItem>
                                            <MenuItem value={'Bethlehem'}>{t('Bethlehem')}</MenuItem>
                                            <MenuItem value={'Jericho'}>{t('Jericho')}</MenuItem>
                                            <MenuItem value={'Qabatiya'}>{t('Qabatiya')}</MenuItem>
                                            <MenuItem value={'Gaza'}>{t('Gaza')}</MenuItem>
                                            <MenuItem value={'KhanYounis'}>{t('Khan Younis')}</MenuItem>
                                            <MenuItem value={'Rafah'}>{t('Rafah')}</MenuItem>
                                            <MenuItem value={'DeirAlBalah'}>{t('Deir Al Balah')}</MenuItem>
                                            <MenuItem value={'BeitLahiya'}>{t('Beit Lahiya')}</MenuItem>
                                            <MenuItem value={'Jabalya'}>{t('Jabalya')}</MenuItem>
                                            <MenuItem value={'BaytHanun'}>{t('Bayt Hanun')}</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <TextField label={t('Address')} variant={'outlined'} fullWidth />
                                    <TextField label={t('Zip Code')} variant={'outlined'} fullWidth />
                                </Box>
                            </Box>
                            <TableContainer sx={{borderRadius: '10px'}}>
                                <Table sx={{backgroundColor: '#F6F6F6', borderCollapse: 'separate', borderRadius: '10px'}}>
                                    <TableHead sx={{backgroundColor: '#2D5356'}}>
                                        <TableRow>
                                            <TableCell colSpan={2} sx={{color: '#fff', fontSize: {md: '16px', xs: '14px'}, width: '1%', whiteSpace: 'nowrap', textAlign: 'start'}}>{t('Order Summary')}</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell sx={{fontSize: {md: '16px', xs: '14px'}, color: '#4C4C4C', textAlign: 'start'}}>{t('Subtotal')}</TableCell>
                                            <TableCell sx={{fontSize: {md: '16px', xs: '14px'}, color: '#4C4C4C', textAlign: 'start'}}>$ {data.cartTotal}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{fontSize: {md: '16px', xs: '14px'}, color: '#4C4C4C', textAlign: 'start'}}>{t('Shipping')}</TableCell>
                                            <TableCell sx={{fontSize: {md: '16px', xs: '14px'}, color: '#4C4C4C', textAlign: 'start'}}>Free</TableCell>
                                        </TableRow>
                                        <TableRow sx={{backgroundColor: '#fff'}}>
                                            <TableCell sx={{fontSize: {md: '17px', xs: '15px'}, fontWeight: 'bold', textAlign: 'start'}}>{t('Total')}</TableCell>
                                            <TableCell sx={{fontSize: {md: '17px', xs: '15px'}, fontWeight: 'bold', textAlign: 'start'}}>$ {data.cartTotal}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                    <TableFooter>
                                        <TableRow>
                                            <TableCell sx={{fontWeight: 500, borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}} colSpan={2} align={'center'}>
                                                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', justifyContent: {sm: 'center', xs: 'flex-start'}}}>
                                                    <Button onClick={()=>checkoutMutate(paymentMethod)} variant="contained" sx={{textTransform: 'none', color: '#fff', backgroundColor: '#D09523', fontSize: '14px', fontWeight: 400, px: {xl: 5, md: 3, sm: 4, xs: 1.5}, py: 1.1, borderRadius: 5}}>{t('Confirm Payment')}</Button>
                                                    <Button onClick={()=>navigate('/cart')} variant="contained" sx={{textTransform: 'none', color: '#fff', backgroundColor: '#616161', fontSize: '14px', fontWeight: 400, px: {sm: 5, xs: 4}, py: 1.1, borderRadius: 5}}>{t('Cancel')}</Button>
                                                </Box>
                                            </TableCell>
                                        </TableRow>
                                    </TableFooter>
                                </Table>
                            </TableContainer>
                        </Box>
                        <Box>
                            <Typography component={'h3'} sx={{fontSize: {lg: '30px', md: '25px', sm: '22px', xs: '20px'}, fontWeight: '500', mt: 5}}>{t('How would you like to pay?')}</Typography>
                            <FormControl>
                                <RadioGroup name="paymentMethod" value={paymentMethod} onChange={(e)=>setPaymentMethod(e.target.value)}>
                                    <FormControlLabel  value="Cash" control={<Radio sx={{'&.Mui-checked': {color: '#D09523'}}} />} label={t("Pay Cash on Delivery")} />
                                    <FormControlLabel value="Visa" control={<Radio sx={{'&.Mui-checked': {color: '#D09523'}}} />} label={t("Pay with Credit Card")} />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                    </FormControl>
                    <Features />
                </Box>
            </Container>
        </Box>
    )
}
