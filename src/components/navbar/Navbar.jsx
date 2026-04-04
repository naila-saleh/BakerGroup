import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from "@mui/material/Link";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import BGYLogo from '../../assets/images/logo/BakerGroup-yelloLogo.svg'
import useAuthStore from "../../store/useAuthStore.js";
import LogoutIcon from '@mui/icons-material/Logout';
import Button from "@mui/material/Button";
import useCart from "../../hooks/useCart.jsx";
import {Badge} from "@mui/material";

export default function Navbar() {
    const token = useAuthStore((state) => state.token);
    const logout = useAuthStore((state) => state.logout);
    const {data} = useCart();
    const cartCount = data?.items?.length || 0;
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate('/auth/login');
    }
    return (
        <Box sx={{ flexGrow: 1, mb: {sm: 8, xs: 6}}}>
            <AppBar position="fixed" sx={{backgroundColor: '#2D5356'}}>
                <Toolbar sx={{justifyContent: {xs: 'space-between' ,lg: 'space-around'}}}>
                    <Link component={RouterLink} to={'/'} color={"inherit"} sx={{display: 'flex', gap: 1, alignItems: 'center', textDecoration: 'none'}}>
                        <img src={BGYLogo} width={27}/>
                        <Typography variant="h6" component="div">BakerGroup</Typography>
                    </Link>
                    <Box sx={{display: {xs: 'none' ,sm: 'none',md: 'flex'}, gap: 4}}>
                        <Link component={RouterLink} to={'/'} color="inherit" underline={"none"}>Home</Link>
                        <Link component={RouterLink} to={'/products'} color="inherit" underline={"none"}>Products</Link>
                        <Link component={RouterLink} to={'/categories'} color="inherit" underline={"none"}>Categories</Link>
                        <Link component={RouterLink} to={'#'} color="inherit" underline={"none"}>About Us</Link>
                        <Link component={RouterLink} to={'#'} color="inherit" underline={"none"}>Contact Us</Link>
                        <Link component={RouterLink} to={'#'} color="inherit" underline={"none"}>Blog</Link>
                    </Box>
                    <Box sx={{display: {xs: 'none',sm: 'flex'}, gap: 2, alignItems: 'center'}}>
                        {token?
                            (
                                <>
                                    <Link component={RouterLink} to={'#'} color="inherit" underline={"none"}><SearchIcon /></Link>
                                    <Link component={RouterLink} to={'#'} color="inherit" underline={"none"}><FavoriteBorderIcon /></Link>
                                    <Link component={RouterLink} to={'/cart'} color="inherit" underline={"none"}><Badge badgeContent={cartCount} color={"#FFB934"}><ShoppingBagOutlinedIcon /></Badge></Link>
                                    <Button color="inherit" underline={"none"} onClick={handleLogout}><LogoutIcon /></Button>
                                </>
                            ):(
                                <>
                                    <Link component={RouterLink} to={'/auth/register'} color="inherit" underline={"none"}><PersonOutlineRoundedIcon /></Link>
                                </>
                            )
                        }
                    </Box>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, display: {xs: 'flex' ,sm: 'flex',md: 'none'} }}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
