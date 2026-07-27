import {useNavigate, useParams} from "react-router-dom";
import useProduct from "../../hooks/useProduct";
import Loader from "../../ui/loader/Loader.jsx";
import bg from '../../assets/images/hero/bg-hero.png'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import WestIcon from '@mui/icons-material/West';
import {CircularProgress, Container, Grid, Rating} from "@mui/material";
import coupon from '../../assets/images/coupon.png'
import useAddToCart from "../../hooks/useAddToCart.jsx";
import {useTranslation} from "react-i18next";
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Features from "../../components/features/Features.jsx";
import useAddReview from "../../hooks/useAddReview.jsx";
import {useForm} from "react-hook-form";
import TextField from "@mui/material/TextField";
import {useState} from "react";
import EastIcon from "@mui/icons-material/East";

export default function ProductDetails() {
    const {id} = useParams();
    const {data, isLoading, isError, error} = useProduct(id);
    const {mutate, isPending} = useAddToCart();
    const {t} = useTranslation();
    const navigate = useNavigate();
    const {mutate: addReview, isPending: isReviewPending} = useAddReview();
    const [formReview, setFormReview] = useState(false);
    const [reviewError, setReviewError] = useState('');
    const language = localStorage.getItem('i18nextLng');
    const handleShowFormReview = () => {
        setReviewError('');
        formReview === true? setFormReview(false) : setFormReview(true);
    }
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (values) => {
        setReviewError('');
        addReview(
            {
                productId: data.id,
                rating: Number(values.rating),
                comment: values.comment
            }, {
                onSuccess: () => {
                    setFormReview(false);
                },
                onError: (error) => {
                    if (error?.response?.status === 400) {
                        setReviewError('You should buy & receive the order to make a review.');
                        return;
                    }
                    setReviewError(error?.response?.data?.message || t('Something went wrong. Please try again.'));
                }
            }
        )
    }

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[200],
            ...theme.applyStyles('dark', {
                backgroundColor: theme.palette.grey[800],
            }),
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: '#D09523',
            ...theme.applyStyles('dark', {
                backgroundColor: '#FFB934',
            }),
        },
    }));
    let fiveStarsCount = 0;
    let fourStarsCount = 0;
    let threeStarsCount = 0;
    let twoStarsCount = 0;
    let oneStarCount = 0;
    function calculateRatingDistribution() {
        data.reviews?.map(review => {
            if(review.rate === 5) fiveStarsCount++;
            else if(review.rate === 4) fourStarsCount++;
            else if(review.rate === 3) threeStarsCount++;
            else if(review.rate === 2) twoStarsCount++;
            else if(review.rate === 1) oneStarCount++;
        })
    }

    if(isLoading) return <Loader />
    if(isError) return <div>{error.message}</div>
    calculateRatingDistribution();
    const sizeOfSubImage = `calc((100% - ${(data.subImages?.length)}%) / (${data.subImages?.length} + 1))`;
    return (
        <Box className={'product-details'}>
            <Box sx={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', height: '100%', paddingY: {md: 10, xs: 5}}}>
                <Typography component={'h1'} sx={{color: 'info.light', fontSize: {lg: '45px', md: '40px', sm: '35px', xs: '30px'}, textAlign: 'center',pb: 3, px: 2}}>{t('Products')}/{data.name}/{t('Product Details')}</Typography>
            </Box>
            <Container maxWidth={'xl'} sx={{px: {md: 10,sm: 5, xs: 2}, py: {md: 5,sm: 3, xs: 2}}}>
                <Button onClick={()=>navigate('/products')} sx={{textTransform: 'none', color: 'secondary.main'}}>
                    {language==='en'?<WestIcon sx={{mr: 1}}/>:<EastIcon sx={{ml: 1}} />}
                    {t('Back to Products')}
                </Button>
                <Grid container spacing={{md: 8, sm: 5, xs: 3}} sx={{display: 'flex', marginTop: {sm: 2, xs: 1}}}>
                    <Grid size={{lg: 6, md: 12, sm: 12, xs: 12}} sx={{textAlign: 'center'}}>
                        <Box component={'img'} src={data.mainImage} alt="" sx={{width: '100%', borderRadius: '10px'}}/>
                        <Box display={data.subImages?.length?'flex':'none'} sx={{marginTop: 2, justifyContent: 'space-between'}}>
                            <Box component={'img'} src={data.image} alt="" sx={{width: sizeOfSubImage, height: sizeOfSubImage, borderRadius: '10px', cursor: 'pointer', border: '2px solid secondary.main'}}/>
                            {data.subImages?.map(subImage=>(
                                <Box key={subImage} component={'img'} src={subImage} alt="" sx={{width: sizeOfSubImage, height: sizeOfSubImage, borderRadius: '10px', cursor: 'pointer'}}/>
                            ))}
                        </Box>
                    </Grid>
                    <Grid size={{lg: 6, md: 12, sm: 12, xs: 12}} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <Box>
                            <Typography sx={{color: 'info.main', pb: 2}}>{data.name}</Typography>
                            <Typography sx={{color: 'info.dark', pb: {md: 7, sm: 5, xs: 3}}}>{data.description}</Typography>
                            {data.price==0?<Typography>custom price</Typography>:<Typography sx={{fontSize: '30px', pb: {sm: 2, xs: 1}}}>₪{data.price}</Typography>}
                            <Box sx={{display: 'flex', gap: {md: 5, xs: 3}, alignItems: 'center', pb: {lg: 7, md: 5, xs: 3}}}>
                                <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}}>
                                    <Rating readOnly value={data.rate}></Rating>
                                    <Typography sx={{fontSize: '20px'}}>{data.rate}</Typography>
                                </Box>
                                <Typography sx={{color: 'info.dark'}}>{data.reviews?.length} {t('Reviews')}</Typography>
                            </Box>
                            <Button variant="contained" sx={{textTransform: 'none', color: 'info.light', backgroundColor: 'secondary.main', fontWeight: 300, px: {sm: 5, xs: 4}, py: 1.1, borderRadius: 5, mx: {md: 2, xs: 1} }}>{t('Buy Now')}</Button>
                            <Button variant="contained" sx={{textTransform: 'none', color: 'info.light', backgroundColor: '#2D5356', fontWeight: 300, px: {sm: 5, xs: 4}, py: 1.1, borderRadius: 5}}
                                    onClick={()=>mutate({
                                        ProductId: data.id,
                                        Count: 1,
                                    })}
                                    disabled={isPending}
                            >{t('Add To Cart')}</Button>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'column' , gap: 2, alignItems: 'flex-start', pt: 5}}>
                            <Typography sx={{color: 'info.dark', fontSize: '18px'}}>{t('Coupon & Discount')}</Typography>
                            <Box component={'img'} src={coupon} alt="" sx={{width: '100%'}}/>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Container className={'reviews'} maxWidth={'xl'} sx={{mt: {md: 5, xs: 3}, borderTop: '2px solid rgba(0,0,0,0.1)', py: {md: 5, xs: 3}, px: {md: 10, sm: 5, xs: 2} }}>
                <Box sx={{display: 'flex', flexDirection: {lg: 'row', xs: 'column'}, justifyContent: {lg: 'space-between', xs: 'center'}, alignItems: 'center' }}>
                    <Box sx={{mb: {lg: 0, xs: 2}, px: {lg: 2, xs: 0} }}>
                        <Typography component={'h2'} sx={{color: 'inherit', fontSize: {md: '32px', sm: '30px', xs: '25px'}, textAlign: {lg: 'start', xs: 'center'}, mb: 2, fontWeight: '500'}}>{t('Customer Reviews')}</Typography>
                        <Box sx={{display: 'flex', gap: 1, alignItems: 'center', justifyContent: {lg: 'start', xs: 'center'}}}>
                            <Rating readOnly value={data.rate}></Rating>
                            <Typography sx={{fontSize: '18px', color: 'primary.light' }}>{data.rate} {t('out of 5')}</Typography>
                        </Box>
                    </Box>
                    <Box sx={{width: {lg: '70%', xs: '100%'} }} >
                        <Box sx={{display: 'flex', flexDirection: 'row', gap: 3, alignItems: 'center', mt: 2}}>
                            <Typography sx={{fontSize: '18px', color: 'primary.light' }}>5 {t('Stars')}</Typography>
                            <Box sx={{width: {md: '80%', sm: '70%', xs: '50%'}, flexGrow: 1 }}>
                                <BorderLinearProgress
                                    variant="determinate"
                                    value={fiveStarsCount?Math.round((fiveStarsCount/data.reviews?.length)*100):0}
                                    aria-label="Export data"
                                />
                            </Box>
                            <Typography sx={{fontSize: '18px', color: 'primary.light' }}>{fiveStarsCount?Math.round((fiveStarsCount/data.reviews?.length)*100):0}%</Typography>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'row', gap: 3, alignItems: 'center', mt: 2}}>
                            <Typography sx={{fontSize: '18px', color: 'primary.light' }}>4 {t('Stars')}</Typography>
                            <Box sx={{width: {md: '80%', sm: '70%', xs: '50%'}, flexGrow: 1 }}>
                                <BorderLinearProgress
                                    variant="determinate"
                                    value={fourStarsCount?Math.round((fourStarsCount/data.reviews?.length)*100):0}
                                    aria-label="Export data"
                                />
                            </Box>
                            <Typography sx={{fontSize: '18px', color: 'primary.light' }}>{fourStarsCount?Math.round((fourStarsCount/data.reviews?.length)*100):0}%</Typography>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'row', gap: 3, alignItems: 'center', mt: 2}}>
                            <Typography sx={{fontSize: '18px', color: 'primary.light' }}>3 {t('Stars')}</Typography>
                            <Box sx={{width: {md: '80%', sm: '70%', xs: '50%'}, flexGrow: 1 }}>
                                <BorderLinearProgress
                                    variant="determinate"
                                    value={threeStarsCount?Math.round((threeStarsCount/data.reviews?.length)*100):0}
                                    aria-label="Export data"
                                />
                            </Box>
                            <Typography sx={{fontSize: '18px', color: 'primary.light' }}>{threeStarsCount?Math.round((threeStarsCount/data.reviews?.length)*100):0}%</Typography>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'row', gap: 3, alignItems: 'center', mt: 2}}>
                            <Typography sx={{fontSize: '18px', color: 'primary.light' }}>2 {t('Stars')}</Typography>
                            <Box sx={{width: {md: '80%', sm: '70%', xs: '50%'}, flexGrow: 1 }}>
                                <BorderLinearProgress
                                    variant="determinate"
                                    value={twoStarsCount?Math.round((twoStarsCount/data.reviews?.length)*100):0}
                                    aria-label="Export data"
                                />
                            </Box>
                            <Typography sx={{fontSize: '18px', color: 'primary.light' }}>{twoStarsCount?Math.round((twoStarsCount/data.reviews?.length)*100):0}%</Typography>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'row', gap: 3, alignItems: 'center', mt: 2}}>
                            <Typography sx={{fontSize: '18px', color: 'primary.light' }}>1 {t('Star')}</Typography>
                            <Box sx={{width: {md: '80%', sm: '70%', xs: '50%'}, flexGrow: 1 }}>
                                <BorderLinearProgress
                                    variant="determinate"
                                    value={oneStarCount?Math.round((oneStarCount/data.reviews?.length)*100):0}
                                    aria-label="Export data"
                                />
                            </Box>
                            <Typography sx={{fontSize: '18px', color: 'primary.light' }}>{oneStarCount?Math.round((oneStarCount/data.reviews?.length)*100):0}%</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{mt: 10, display: 'flex', flexDirection: 'column', gap: 5, borderTop: '1px solid rgba(0,0,0,0.1)', pt: 5}}>
                    {data.reviews?.map((review)=>
                        <Box key={review.userName} sx={{borderBottom: '1px solid rgba(0,0,0,0.1)', pb: 3}}>
                            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                                <Typography sx={{fontWeight: '500'}}>{t(review.userName)}</Typography>
                                <Box sx={{display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center'}}>
                                    <Typography sx={{fontSize: '14px', color: 'info.dark'}}>{new Date(review.createdAt).toDateString()}</Typography>
                                    <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}}>
                                        <Rating readOnly value={review.rating}></Rating>
                                    </Box>
                                </Box>
                            </Box>
                            <Typography sx={{color: 'info.dark', fontSize: '16px', pt: 2}}>{review.comment}</Typography>
                        </Box>
                    )}
                </Box>
                <Box sx={{mt: 5, display: 'flex', flexDirection: 'column', alignItems: {sm: 'start', xs: 'center'}, textAlign: {sm: 'start', xs: 'center'} }}>
                    <Typography component={'h2'} sx={{color: 'inherit', fontSize: {md: '32px', sm: '30px', xs: '25px'}, textAlign: {lg: 'start', xs: 'center'}, mb: 2, fontWeight: '500'}}>{t('Review this Product')}</Typography>
                    <Typography sx={{color: 'info.dark', fontSize: '16px', my: 1}}>{t('Share your thoughts with other customers')}</Typography>
                    <Button onClick={handleShowFormReview} variant="contained" sx={{textTransform: 'none', color: 'info.light', backgroundColor: 'secondary.main', fontWeight: 400, px: 4, py: 1.1, borderRadius: 5, fontSize: '15px', mt: 1 }}>{t('Write a customer review')}</Button>
                    <Box component={'form'}
                         onSubmit={handleSubmit(onSubmit)}
                         sx={{border: '2px solid rgba(45,83,86,0.4)', borderRadius: 3, my: 5, width: {md: '80%', xs: '100%'}, px: {sm: 4, xs: 2}, py: 5, display: formReview?'flex':'none', flexDirection: 'column', gap: 2, alignItems: {sm: 'start',xs: 'center'}, justifyContent: 'center'}}>
                        <Rating {...register('rating', {required: t('Rating is required')})} size="large" />
                        {errors.rating && <span style={{color: 'red'}}>{errors.rating.message}</span>}
                        <TextField {...register('comment', {required: t('Comment is required')})} label={t('Comment')} variant="standard" fullWidth multiline rows={4}
                                   error={!!errors.comment} helperText={errors.comment?.message}/>
                        {reviewError && <span style={{color: 'red', width: '100%', fontSize: '14px'}}>{reviewError}</span>}
                        <Button variant="contained" type={'submit'} sx={{textTransform: 'none', color: 'info.light', backgroundColor: '#2D5356', fontWeight: 400, px: 4, py: 1.1, borderRadius: 5, fontSize: '15px', mt: 1 }} disabled={isReviewPending}>{isReviewPending ? <CircularProgress/> : t('Submit Review')}</Button>
                    </Box>
                </Box>
            </Container>
            <Features />
        </Box>
    )
}
