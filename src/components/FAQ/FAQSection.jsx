import React from 'react'
import {useTranslation} from "react-i18next";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import {Container} from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import Box from "@mui/material/Box";
import WestIcon from "@mui/icons-material/West";
import CloseIcon from '@mui/icons-material/Close';

export default function FaqSection() {
    const {t} = useTranslation();
    const [expanded, setExpanded] = React.useState(false);
    const language = localStorage.getItem('i18nextLng');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Container maxWidth={'xl'} sx={{mb: {md: 10, sm: 8, xs: 5}, px: {md: 10, sm: 5, xs: 2}, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography component={'h2'} sx={{fontSize: {md: '40px', sm: '35px', xs: '32px'}, fontWeight: '500', width: {xl: '30%', lg: '40%', md: '55%', sm: '66%', xs: '100%'}, alignSelf: 'center', textAlign: 'center', pb: 2 }}>{t("Got Questions? We've Got Answers!")}</Typography>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{backgroundColor: 'rgba(0,0,0,0.05)', boxShadow: 3, '&.Mui-expanded': {backgroundColor: '#2D5356', color: 'info.light'}, borderRadius: 1 }}>
                <AccordionSummary
                    expandIcon={
                        expanded === 'panel1' ?
                            <Box sx={{width: 56, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.08)', backgroundColor: 'info.light'}}>
                                <CloseIcon sx={{color: '#2D5356', fontSize: 18}} />
                            </Box>
                            : (language==='en'?
                                    <Box sx={{width: 56, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.08)', backgroundColor: '#fff'}}>
                                        <EastIcon sx={{color: '#2D5356', fontSize: 18}} />
                                    </Box>:
                                    <Box sx={{width: 56, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.08)', backgroundColor: '#fff'}}>
                                        <WestIcon sx={{color: '#2D5356', fontSize: 18}} />
                                    </Box>
                            )
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography component="span" sx={{ fontWeight: '500', fontSize: '18px' }}>
                        {t('How do I choose the right furniture for my space?')}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{color: 'info.light'}}>
                        {t('When selecting furniture, consider the size and layout of your space, your personal style, and the functionality you need. Measure your room and choose pieces that fit well without overcrowding. Opt for furniture that complements your existing decor and meets your lifestyle needs.')}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{backgroundColor: 'rgba(0,0,0,0.05)', boxShadow: 3, '&.Mui-expanded': {backgroundColor: '#2D5356', color: 'info.light'}, borderRadius: 1 }}>
                <AccordionSummary
                    expandIcon={
                        expanded === 'panel2' ?
                            <Box sx={{width: 56, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.08)', backgroundColor: 'info.light'}}>
                                <CloseIcon sx={{color: '#2D5356', fontSize: 18}} />
                            </Box>
                            : (language==='en'?
                                    <Box sx={{width: 56, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.08)', backgroundColor: '#fff'}}>
                                        <EastIcon sx={{color: '#2D5356', fontSize: 18}} />
                                    </Box>:
                                    <Box sx={{width: 56, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.08)', backgroundColor: '#fff'}}>
                                        <WestIcon sx={{color: '#2D5356', fontSize: 18}} />
                                    </Box>
                            )
                    }
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography component="span" sx={{ fontWeight: '500', fontSize: '18px' }}>
                        {t('What materials are your furniture items made of?')}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{color: 'info.light'}}>
                        {t('Our furniture is crafted from a variety of high-quality materials, including solid wood, metal, glass, and upholstered fabrics. We source our materials from trusted suppliers to ensure durability and aesthetic appeal. Each piece is designed to meet our standards for quality and style.')}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{backgroundColor: 'rgba(0,0,0,0.05)', boxShadow: 3, '&.Mui-expanded': {backgroundColor: '#2D5356', color: 'info.light'}, borderRadius: 1 }}>
                <AccordionSummary
                    expandIcon={
                        expanded === 'panel3' ?
                            <Box sx={{width: 56, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.08)', backgroundColor: 'info.light'}}>
                                <CloseIcon sx={{color: '#2D5356', fontSize: 18}} />
                            </Box>
                            : (language==='en'?
                                    <Box sx={{width: 56, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.08)', backgroundColor: '#fff'}}>
                                        <EastIcon sx={{color: '#2D5356', fontSize: 18}} />
                                    </Box>:
                                    <Box sx={{width: 56, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.08)', backgroundColor: '#fff'}}>
                                        <WestIcon sx={{color: '#2D5356', fontSize: 18}} />
                                    </Box>
                            )
                    }
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography component="span" sx={{ fontWeight: '500', fontSize: '18px' }}>
                        {t('What is your delivery process?')}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{color: 'info.light'}}>
                        {t('We offer reliable delivery services to ensure your furniture arrives safely and on time. Once your order is processed, we will provide you with an estimated delivery date. Our team will handle the transportation and delivery of your items, and we will keep you informed throughout the process.')}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{backgroundColor: 'rgba(0,0,0,0.05)', boxShadow: 3, '&.Mui-expanded': {backgroundColor: '#2D5356', color: 'info.light'}, borderRadius: 1 }}>
                <AccordionSummary
                    expandIcon={
                        expanded === 'panel4' ?
                            <Box sx={{width: 56, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.08)', backgroundColor: 'info.light'}}>
                                <CloseIcon sx={{color: '#2D5356', fontSize: 18}} />
                            </Box>
                            : (language==='en'?
                                    <Box sx={{width: 56, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.08)', backgroundColor: '#fff'}}>
                                        <EastIcon sx={{color: '#2D5356', fontSize: 18}} />
                                    </Box>:
                                    <Box sx={{width: 56, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.08)', backgroundColor: '#fff'}}>
                                        <WestIcon sx={{color: '#2D5356', fontSize: 18}} />
                                    </Box>
                            )
                    }
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography component="span" sx={{ fontWeight: '500', fontSize: '18px' }}>
                        {t('What is your return and exchange policy?')}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{color: 'info.light'}}>
                        {t('We want you to be completely satisfied with your purchase. If you are not happy with your furniture, you can return or exchange it within 30 days of delivery. Please ensure that the item is in its original condition and packaging. For more details on our return and exchange process, please visit our Return Policy page or contact our customer service team.')}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx={{backgroundColor: 'rgba(0,0,0,0.05)', boxShadow: 3, '&.Mui-expanded': {backgroundColor: '#2D5356', color: 'info.light'}, borderRadius: 1 }}>
                <AccordionSummary
                    expandIcon={
                        expanded === 'panel5' ?
                            <Box sx={{width: 56, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.08)', backgroundColor: 'info.light'}}>
                                <CloseIcon sx={{color: '#2D5356', fontSize: 18}} />
                            </Box>
                            : (language==='en'?
                                    <Box sx={{width: 56, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.08)', backgroundColor: '#fff'}}>
                                        <EastIcon sx={{color: '#2D5356', fontSize: 18}} />
                                    </Box>:
                                    <Box sx={{width: 56, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.08)', backgroundColor: '#fff'}}>
                                        <WestIcon sx={{color: '#2D5356', fontSize: 18}} />
                                    </Box>
                            )
                    }
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                    >
                    <Typography component="span" sx={{ fontWeight: '500', fontSize: '18px' }}>
                        {t('How can I contact customer support for assistance?')}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{color: 'info.light'}}>
                        {t('Our customer support team is available 24/7 to assist you with any questions or concerns you may have. You can reach us through email, phone, or live chat. We strive to provide prompt and helpful responses to all inquiries.')}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Container>
    );
}
