import {Link} from "react-router-dom";
import {Card, CardContent, CardMedia, Grid} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Product(product) {
    return (
        <Grid key={product.id} size={{lg: 4, md: 6, sm: 6, xs: 12}}>
            <Link to={`/products/${product.id}`} style={{textDecoration: 'none'}}>
                <Card sx={{boxShadow: 3, borderRadius: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 1, cursor: 'pointer'}}>
                    <CardMedia component={'img'} image={product.image} sx={{width: {md: '100%', sm: '90%', xs: '70%'}, display: 'flex', alignSelf: 'center'}}></CardMedia>
                    <CardContent sx={{backgroundColor: '#2D5356', color: 'info.light', borderRadius: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: {xl: 2, lg: 1.3, xs: 2}, ":last-child": {paddingBottom: 2}}}>
                        <Box>
                            <Typography component={'h3'}>{product.name}</Typography>
                            <Typography component={'span'} variant={'body1'}>${product.price}</Typography>
                        </Box>
                        <ShoppingCartIcon sx={{color: 'secondary.main', backgroundColor: 'info.light', fontSize: '45px', padding: '10px', borderRadius: '50%', cursor: 'pointer'}} />
                    </CardContent>
                </Card>
            </Link>
        </Grid>
    )
}