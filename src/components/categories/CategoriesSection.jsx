import React, {useRef} from 'react'
import Box from "@mui/material/Box";
import useCategories from "../../hooks/useCategories";
import Loader from "../../ui/loader/Loader.jsx";
import {Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import chair from '../../assets/images/chair.png'
import Button from "@mui/material/Button";
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import {Autoplay, Pagination, Navigation, A11y} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Category from "../../ui/category/Category.jsx";
import {useTranslation} from "react-i18next";

export default function CategoriesSection() {
    const {data, isLoading, isError, error} = useCategories();
    const {t} = useTranslation();
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    if (isLoading) return <Loader />
    if (isError) return <Box>{error.message}</Box>

    const categories = data.response.data || [];

    return (
        <Container maxWidth={'xl'} sx={{px: {lg: 15, md: 10, sm: 5, xs: 2}, py: {md: 5, sm: 3, xs: 2}}}>
            <Box sx={{display: 'flex', flexWrap: 'wrap', flexDirection: {sm: 'row', xs: 'column'}, justifyContent: 'space-between', alignItems: 'center', mb: 4, gap: {md: 0, xs: 2}}}>
                <Typography component={'h2'} sx={{fontSize: {md: '40px', sm: '35px', xs: '31px'}, fontWeight: 500}}>{t('Featured Categories')}</Typography>
                <Box sx={{display: 'flex', gap: 1.5}}>
                    <Button ref={prevRef} sx={{minWidth: 'unset', p: 0, borderRadius: '14px'}}>
                        <Box sx={{width: 56, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.08)', backgroundColor: '#fff'}}>
                            <WestIcon sx={{color: '#D09523', fontSize: 18}} />
                        </Box>
                    </Button>
                    <Button ref={nextRef} sx={{minWidth: 'unset', p: 0, borderRadius: '14px'}}>
                        <Box sx={{width: 56, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '14px', backgroundColor: '#D09523'}}>
                            <EastIcon sx={{color: '#fff', fontSize: 18}} />
                        </Box>
                    </Button>
                </Box>
            </Box>
            <Box sx={{'& .swiper': {pb: 6},
                    '& .swiper-pagination-bullet': {width: 10, height: 10, backgroundColor: '#D9D9D9', opacity: 1},
                    '& .swiper-pagination-bullet-active': {width: 30, borderRadius: '10px', backgroundColor: '#2F6B68'}}}>
                <Swiper
                    modules={[Autoplay, Pagination, Navigation, A11y]}
                    loop={true}
                    speed={800}
                    spaceBetween={24}
                    slidesPerView={5}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    pagination={{
                        clickable: true
                    }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 16
                        },
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 16
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 24
                        },
                        1280: {
                            slidesPerView: 5,
                            spaceBetween: 24
                        }
                    }}
                >
                    {categories.map((category, index) => (
                        <SwiperSlide key={category._id || category.name || index}>
                            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2.5, cursor: 'pointer', textAlign: 'center'}}>
                                <Category {...category} />
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Container>
    )
}
