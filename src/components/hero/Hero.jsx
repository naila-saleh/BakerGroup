import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";
import bg from '../../assets/images/hero/bg-hero.png'
import bedroom from '../../assets/images/hero/bedroom.png'
import livingroom from '../../assets/images/hero/livingroom.jpg'
import waitingroom from '../../assets/images/hero/waitingroom.jpg'
import Link from "@mui/material/Link";
import {Link as RouterLink} from "react-router-dom";
import EastIcon from '@mui/icons-material/East';
import Button from "@mui/material/Button";
import WestIcon from '@mui/icons-material/West';
import style from './hero.module.css'
export default function Hero() {
    return (
        <Box sx={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', height: '100%', paddingY: {md: 10, xs: 5}}}>
            <Grid container spacing={1} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%'}}>
                <Grid item size={{xl: 5, lg: 5, md: 12, sm: 12, xs: 12}} sx={{display: 'flex', flexDirection: 'column', alignItems: {xl:'flex-start', lg: 'flex-start', md: 'center', sm: 'center', xs: 'center'}, gap: 2, textAlign: {xl: 'start', lg: 'start', xs: 'center'}, paddingX: {md: 10, sm: 5, xs: 2}, color: 'white'}}>
                    <Typography component={'span'} sx={{textTransform: 'uppercase', color: 'inherit', letterSpacing: 2, fontSize: {md: '12px', xs: '10px'}, backgroundColor: '#426466', border: 'solid #537476 1px', padding: '8px 20px', borderRadius: '30px'}}>Furniture Design Ideas</Typography>
                    <Typography component={'h1'} sx={{color: 'inherit', fontSize: {xl: '55px', lg: '45px', md: '40px', xs: '30px'}, fontWeight: '500'}}>Modern Interior Design Studio</Typography>
                    <Typography component={'p'} sx={{color: '#A6BCBE', fontSize: {xl: '18px', lg: '18px', md: '15px'}}}>Choosing the right furniture for your home online will add elegance and functionality to your interior while also being cost effective and long lasting.</Typography>
                    <Box sx={{display: 'flex', gap: 1, marginTop: {md: 3, xs: 1}, flexDirection: {xl: 'row', lg: 'row', md: 'row', sm: 'column', xs: 'column'}}}>
                        <Link component={RouterLink} to={'#'} sx={{display: 'flex', gap: 1, alignItems: 'center', color: 'inherit', fontSize: {xl: '18px', md: '15px', xs: '13px'}, backgroundColor: '#D09523', padding: '10px 30px', borderRadius: '30px'}} underline={'none'}>Shop Now <EastIcon /></Link>
                        <Link component={RouterLink} to={'https://www.instagram.com/sohyb.bakergroup/'} sx={{color: 'inherit', fontSize: {xl: '18px', md: '15px', xs: '13px'}, padding: '10px'}}>Follow Instagram</Link>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: {sm: 'row', xs: 'column'}, gap: {xl: 8, md: 4, xs: 2}, marginTop: {md: 5, xs: 1}, marginBottom: {md: 0, xs: 2}}}>
                        <Box sx={{display: 'flex', flexDirection: 'column'}}>
                            <Typography component={'span'} sx={{color: 'inherit', fontSize: {lg: '20px', md: '18px'}}}>2500+</Typography>
                            <Typography component={'span'} sx={{color: '#A6BCBE', fontSize: {xl: '14px', md: '14px'}}}>Unique Styles</Typography>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'column'}}>
                            <Typography component={'span'} sx={{color: 'inherit', fontSize: {lg: '20px', md: '18px'}}}>5000+</Typography>
                            <Typography component={'span'} sx={{color: '#A6BCBE', fontSize: {xl: '14px', md: '14px'}}}>Happy Customers</Typography>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'column'}}>
                            <Typography component={'span'} sx={{color: 'inherit', fontSize: {lg: '20px', md: '18px'}}}>300+</Typography>
                            <Typography component={'span'} sx={{color: '#A6BCBE', fontSize: {xl: '14px', md: '14px'}}}>Certified Outlets</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item size={{xl: 7, lg: 7, md: 12, sm: 12, xs: 12}} sx={{paddingLeft: {xl: 4, lg: 2}, display: 'flex', flexDirection: 'column', alignItems: {xl:'flex-start', lg: 'center', md: 'center', sm: 'center', xs: 'center'}}}>
                    <Box sx={{display: 'flex', flexDirection: {md: 'row', xs: 'column'}, gap: {xl: 3, lg: 2, md: 3, sm: 3}, justifyContent: 'flex-start', alignItems: 'center', height: '100%', color: 'white'}}>
                        <Box sx={{position: 'relative'}}>
                            <Box sx={{width: { xl: 380, lg: 320, md: 380, sm: 400, xs: 300 }}}>
                                <img src={bedroom} alt="" height={'480px'} style={{width: '100%' ,borderRadius: '10px', position: "relative", top: 0, left: 0, boxShadow: '0 10px 20px rgba(0,0,0,0.25)'}}/>
                            </Box>
                            <Box className={style.overlay} sx={{display: 'flex', gap: {xl: 15, lg: 5, md: 15}, alignItems: 'flex-end', justifyContent: 'space-between', padding: '30px 20px', position: 'absolute', bottom: 0}}>
                                <Typography component={'span'} sx={{fontSize: '25px'}}>Bed Room</Typography>
                                <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}}>
                                    <Typography component={'span'} sx={{fontSize: '20px', fontWeight: '500'}}>1200+</Typography>
                                    <Typography component={'span'} sx={{fontSize: '18px'}}>item</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{position: 'relative'}}>
                            <Box sx={{width: { xl: 180, lg: 130, md: 180, sm: 400, xs: 300 }}}>
                                <img src={livingroom} alt="" height={'480px'} style={{width: '100%', borderRadius: '10px', position: "relative", top: 0, left: 0, boxShadow: '0 10px 20px rgba(0,0,0,0.25)'}}/>
                            </Box>
                            <Box className={style.overlay} sx={{display: 'flex', gap: {xl: 15, lg: 5, md: 15}, alignItems: 'flex-end', justifyContent: 'space-between', padding: '30px 20px', position: 'absolute', bottom: 0}}>
                                <Typography component={'span'} sx={{fontSize: '25px', transform: {md: 'rotate(-90deg)', xs: 'none'}, whiteSpace: {md: 'nowrap', xs: 'none'}, position: {md: 'absolute'}, bottom: {md: 75}, left: {md: 23}}}>Living Room</Typography>
                                <Box sx={{display: {md: 'none', xs: 'flex'}, gap: 1, alignItems: 'center'}}>
                                    <Typography component={'span'} sx={{fontSize: '20px', fontWeight: '500'}}>1200+</Typography>
                                    <Typography component={'span'} sx={{fontSize: '18px'}}>item</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{position: 'relative'}}>
                            <Box sx={{width: { xl: 180, lg: 130, md: 180,sm: 400, xs: 300 }}}>
                                <img src={waitingroom} alt="" height={'480px'} style={{width: '100%', borderRadius: '10px', position: "relative", top: 0, left: 0, boxShadow: '0 10px 20px rgba(0,0,0,0.25)'}}/>
                            </Box>
                            <Box className={style.overlay} sx={{display: 'flex', gap: {xl: 15, lg: 5, md: 15}, alignItems: 'flex-end', justifyContent: 'space-between', padding: '30px 20px', position: 'absolute', bottom: 0}}>
                                <Typography component={'span'} sx={{fontSize: '25px', transform: {md: 'rotate(-90deg)', xs: 'none'}, whiteSpace: {md: 'nowrap', xs: 'none'}, position: {md: 'absolute'}, bottom: {md: 80}, left: {md: 10}}}>Waiting Room</Typography>
                                <Box sx={{display: {md: 'none', xs: 'flex'}, gap: 1, alignItems: 'center'}}>
                                    <Typography component={'span'} sx={{fontSize: '20px', fontWeight: '500'}}>1200+</Typography>
                                    <Typography component={'span'} sx={{fontSize: '18px'}}>item</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'flex-start', color: 'white', marginTop: {md: 3, xs: 1}, alignSelf: {xl: 'flex-start', md: 'center'}}}>
                        <Button sx={{backgroundColor: '#426466', borderRadius: '35px', paddingY: '8px', color: 'inherit'}}><WestIcon /></Button>
                        <Button sx={{backgroundColor: '#D09523', borderRadius: '35px', paddingY: '8px', color: 'inherit'}}><EastIcon /></Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
