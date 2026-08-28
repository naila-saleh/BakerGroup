import {useNavigate, useParams} from "react-router-dom";
import useAdminProduct from "../../hooks/admin/useAdminProduct.jsx";
import Loader from "../../ui/loader/Loader.jsx";
import bg from '../../assets/images/hero/bg-hero.png'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import WestIcon from '@mui/icons-material/West';
import {Container, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Rating} from "@mui/material";
import {useTranslation} from "react-i18next";
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import {useState} from "react";
import EastIcon from "@mui/icons-material/East";
import Avatar from "@mui/material/Avatar";
import {Link as RouterLink} from "react-router-dom";
import useAdminCategories from "../../hooks/admin/useAdminCategories.jsx";
import useAdminDeleteProduct from "../../hooks/admin/useAdminDeleteProduct.jsx";
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';

export default function ProductDetails() {
    const {id} = useParams();
    const {data, isLoading, isError, error} = useAdminProduct(id);
    const {data: categories} = useAdminCategories();
    const {t} = useTranslation();
    const navigate = useNavigate();
    const { mutate: deleteProduct, isPending: isDeleting } = useAdminDeleteProduct();
    const language = localStorage.getItem('i18nextLng');
    const [showImage, setShowImage] = useState(data?.mainImage);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const categoryId = data?.categoryId;
    let category = '';
    for(let i=0; i<categories?.length; i++){
        if(categories[i].id === categoryId) category=categories[i].name;
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
    const changeImage = (image) => {
        setShowImage(image);
    }

    const handleDelete = () => {
        setIsDeleteDialogOpen(true);
    };

    const confirmDelete = () => {
        deleteProduct(id, {
            onSuccess: () => navigate('/admin/products'),
        });
    };

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
                <Button onClick={()=>navigate('/admin/products')} sx={{textTransform: 'none', color: 'secondary.main'}}>
                    {language==='en'?<WestIcon sx={{mr: 1}}/>:<EastIcon sx={{ml: 1}} />}
                    {t('Back to Products')}
                </Button>
                <Grid container spacing={{md: 8, sm: 5, xs: 3}} sx={{display: 'flex', marginTop: {sm: 2, xs: 1}}}>
                    <Grid size={{lg: 6, md: 12, sm: 12, xs: 12}} sx={{textAlign: 'center'}}>
                        <Box component={'img'} src={showImage?showImage:data.mainImage} alt="" sx={{width: '100%', borderRadius: '10px'}}/>
                        <Box display={data.subImages?.length?'flex':'none'} sx={{marginTop: 2, justifyContent: 'space-between'}}>
                            <Avatar onClick={() => changeImage(data.mainImage)} src={data.mainImage} alt="" sx={{width: sizeOfSubImage, height: '150px', objectFit: 'contain', borderRadius: '10px', cursor: 'pointer'}}/>
                            {data.subImages?.map(subImage=>(
                                <Avatar onClick={() => changeImage(subImage)} key={subImage} src={subImage} alt="" sx={{width: sizeOfSubImage, height: '150px', objectFit: 'contain', borderRadius: '10px', cursor: 'pointer'}}/>
                            ))}
                        </Box>
                    </Grid>
                    <Grid size={{lg: 6, md: 12, sm: 12, xs: 12}} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
                        <Box>
                            <Typography sx={{color: 'info.main', pb: 4}}>{data.name}</Typography>
                            <Typography sx={{color: 'info.dark', pb: 2}}>{data.description}</Typography>
                            {data.quantity?<Typography sx={{color: 'info.main', pb: {md: 7, sm: 5, xs: 3}}}>{data.quantity} {t('items remains')}</Typography>: <Typography sx={{color: 'error.main', pb: {md: 7, sm: 5, xs: 3}}}>{t('Out of stock')}</Typography>}
                            {data.price==0?<Typography sx={{color: 'primary.dark', fontSize: '18px', pb: {sm: 2, xs: 1}}}>custom price</Typography>:<Typography sx={{fontSize: '30px', pb: {sm: 2, xs: 1}}}>₪{data.price}</Typography>}
                            <Box sx={{display: 'flex', gap: {md: 5, xs: 3}, alignItems: 'center'}}>
                                <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}}>
                                    <Rating readOnly value={data.rate}></Rating>
                                    <Typography sx={{fontSize: '20px'}}>{data.rate}</Typography>
                                </Box>
                                <Typography sx={{color: 'info.dark'}}>{data.reviews?.length} {t('Reviews')}</Typography>
                            </Box>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'row' , gap: 1, alignItems: 'flex-start', pt: 4}}>
                            <Typography sx={{color: 'info.dark', fontSize: '18px'}}>{t('Coupon & Discount')}:</Typography>
                            <Typography component={'span'} sx={{color: 'info.main', fontSize: '18px'}}>{data.discount}%</Typography>
                        </Box>
                        <Typography sx={{color: 'secondary.main', pt: 3, pb: 2}}>{t('Product Category:')} {category}</Typography>
                        <Typography sx={{color: 'secondary.main'}}>{t('Product Status:')} {data?.status?t('Inactive'):t('Active')}</Typography>
                        <Box sx={{display: 'flex', flexDirection: 'row', gap: 2, alignItems: 'center', pt: 4}}>
                            <Button variant={'contained'} color={'error'} onClick={handleDelete} disabled={isDeleting}>
                                {isDeleting ? 'Deleting...' : 'Delete'}
                            </Button>
                            <Button variant={'contained'} component={RouterLink} to={`/admin/products/${id}/edit`} sx={{ml: 2, backgroundColor: '#2D5356'}}>Update</Button>
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
            </Container>
            <Dialog
                open={isDeleteDialogOpen}
                onClose={() => !isDeleting && setIsDeleteDialogOpen(false)}
                aria-labelledby="delete-product-dialog-title"
                PaperProps={{
                    sx: {
                        width: '100%',
                        maxWidth: 460,
                        borderRadius: 3,
                        overflow: 'hidden',
                    },
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'center', pt: 3 }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 58,
                        height: 58,
                        borderRadius: '50%',
                        color: 'error.main',
                        backgroundColor: 'rgba(211, 47, 47, 0.12)',
                    }}>
                        <WarningAmberRoundedIcon sx={{ fontSize: 34 }} />
                    </Box>
                </Box>
                <DialogTitle id="delete-product-dialog-title" sx={{ textAlign: 'center', pt: 2, pb: 1, fontWeight: 700 }}>
                    Delete product?
                </DialogTitle>
                <DialogContent sx={{ textAlign: 'center', px: { xs: 3, sm: 6 }, pb: 2 }}>
                    <Typography color="text.secondary">
                        Are you sure you want to delete <strong>{data.name}</strong>? This action cannot be undone.
                    </Typography>
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'center', gap: 1.5, px: 3, pb: 3 }}>
                    <Button
                        variant="outlined"
                        onClick={() => setIsDeleteDialogOpen(false)}
                        disabled={isDeleting}
                        sx={{ minWidth: 110, borderRadius: 2, textTransform: 'none' }}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={confirmDelete}
                        disabled={isDeleting}
                        sx={{ minWidth: 130, borderRadius: 2, textTransform: 'none' }}
                    >
                        {isDeleting ? 'Deleting...' : 'Delete product'}
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}
