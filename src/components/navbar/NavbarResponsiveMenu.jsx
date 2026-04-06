import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import logo from '../../assets/images/logo/BakerGroup-yelloLogo.svg'
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import Link from "@mui/material/Link";
import {Link as RouterLink} from "react-router-dom";
import useAuthStore from "../../store/useAuthStore.js";
import LogoutIcon from '@mui/icons-material/Logout';
import {useNavigate} from "react-router-dom";
import useCart from "../../hooks/useCart";
import {Badge} from "@mui/material";
import {useTranslation} from "react-i18next";
import LanguageIcon from '@mui/icons-material/Language';
import i18n from "i18next";
import LoginIcon from '@mui/icons-material/Login';

const pages = [
    { id: 'home', to: '/', label: 'Home' },
    { id: 'products', to: '/products', label: 'Products' },
    { id: 'categories', to: '/categories', label: 'Categories' },
    { id: 'about', to: '#', label: 'About Us' },
    { id: 'contact', to: '#', label: 'Contact Us' },
    { id: 'blog', to: '#', label: 'Blog' }
];

export default function NavbarResponsiveMenu() {
    const token = useAuthStore((state) => state.token);
    const logout = useAuthStore((state) => state.logout);
    const {t} = useTranslation();
    const changeLanguage = ()=>{
        const newLng = i18n.language === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLng);
    }
    const {data} = useCart();
    const cartCount = data?.items?.length || 0;
    const navigate = useNavigate();
    const icons = token
        ? [
            { id: 'language', to: '#', icon: <LanguageIcon /> },
            { id: 'search', to: '#', icon: <SearchIcon /> },
            { id: 'profile', to: '/profile', icon: <PersonOutlineRoundedIcon /> },
            { id: 'favorites', to: '#', icon: <FavoriteBorderIcon /> },
            { id: 'cart', to: '/cart', icon: <ShoppingBagOutlinedIcon />},
            { id: 'logout', icon: <LogoutIcon /> }
        ] : [
            { id: 'language', to: '#', icon: <LanguageIcon /> },
            { id: 'search', to: '#', icon: <SearchIcon /> },
            { id: 'register', to: '/auth/register', icon: <LoginIcon /> }
        ];

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogout = () => {
        logout();
        handleCloseUserMenu();
        handleCloseNavMenu();
        navigate('/auth/login');
    };

    return (
        <Box sx={{ flexGrow: 1, mb: {lg: 9, sm: 8, xs: 6}}}>
            <AppBar position="fixed" sx={{backgroundColor: '#2D5356'}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#fff', backgroundColor: '#2D5356'}}>
                        <Link component={RouterLink} to={'/'} color="inherit" underline={"none"} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                            <img alt={''} src={logo} width={27}/>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="#app-bar-with-responsive-menu"
                                sx={{
                                    ml: 1,
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 600,
                                    letterSpacing: '0.5px',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                BakerGroup
                            </Typography>
                        </Link>
                        <Box sx={{display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{ display: { xs: 'block', md: 'none' } }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                                        <Typography sx={{ textAlign: 'center',color: '#D09523' }}>
                                            <Link component={RouterLink} to={page.to} color="inherit" underline={"none"}>{t(`${page.label}`)}</Link>
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Link component={RouterLink} to={'/'} color="inherit" underline={"none"} sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
                            <img alt={''} src={logo} width={27}/>
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                href="#app-bar-with-responsive-menu"
                                sx={{
                                    mx: 1,
                                    display: { xs: 'flex', md: 'none' },
                                    flexGrow: 1,
                                    fontFamily: 'monospace',
                                    fontWeight: 600,
                                    letterSpacing: '0.5px',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                BakerGroup
                            </Typography>
                        </Link>
                        <Box sx={{display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page.id}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    <Link component={RouterLink} to={page.to} color="inherit" underline={"none"}>{t(`${page.label}`)}</Link>
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{display: { xs: 'flex', lg: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenUserMenu}
                                color="inherit"
                            >
                                <BubbleChartIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                                sx={{ display: { xs: 'block', lg: 'none' } }}
                            >
                                {icons.map((icon) => (
                                    <MenuItem key={icon.id} onClick={icon.id === 'logout' ? handleLogout : handleCloseUserMenu}>
                                        <Typography sx={{ textAlign: 'center'}}>
                                            { icon.id === 'language'?(
                                                <Button onClick={changeLanguage} sx={{ minWidth: 8, p: 0, my: 1, color: '#D09523'  }}>
                                                    {icon.icon}
                                                </Button>
                                            ) : (icon.id === 'logout' ? (
                                                <Button onClick={handleLogout} sx={{ minWidth: 8, p: 0, color: '#D09523' }}>
                                                    {icon.icon}
                                                </Button>
                                            ) : (icon.id === 'cart' ? (
                                                    <Badge badgeContent={cartCount}
                                                        sx ={{
                                                            color: "#D09523 !important",
                                                            '& .MuiBadge-badge': {
                                                                bgcolor: '#2D5356',
                                                                color: '#fff',
                                                                borderRadius: '50%',
                                                                minWidth: '16px',
                                                                height: '16px',
                                                                padding: '0 4px',
                                                                fontSize: '0.65rem'
                                                            }
                                                    }}><Link component={RouterLink} to={icon.to} underline={"none"} sx={{color: '#D09523' }}>{icon.icon}</Link></Badge>
                                                ):(
                                                    <Link component={RouterLink} to={icon.to} underline={"none"} sx={{color: '#D09523' }}>{icon.icon}</Link>
                                                ))
                                            )}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Box sx={{display: { xs: 'none', lg: 'flex' } }}>
                            {icons.map((icon) => (
                                icon.id === 'language' ? (
                                    <Button onClick={changeLanguage} sx={{ minWidth: 8, p: 0, color: '#fff', display: 'block', my: 2, mr: 1 }}>
                                        {icon.icon}
                                    </Button>
                                ):(
                                    <Button
                                        key={icon.id}
                                        onClick={icon.id === 'logout' ? handleLogout : handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block', minWidth: 8 }}
                                    >{ icon.id === 'logout' ? (
                                            icon.icon
                                        ) : (
                                            icon.id === 'cart' ? (
                                                <Badge badgeContent={cartCount} sx={{
                                                    '& .MuiBadge-badge': {
                                                        bgcolor: '#D09523',
                                                        color: '#fff',
                                                        borderRadius: '50%',
                                                        minWidth: '16px',
                                                        height: '16px',
                                                        padding: '0 4px',
                                                        fontSize: '0.65rem'
                                                    }
                                                }}><Link component={RouterLink} to={icon.to} underline={"none"} sx={{color: '#fff'}}>{icon.icon}</Link></Badge>
                                            ):(
                                                <Link component={RouterLink} to={icon.to} underline={"none"} sx={{color: '#fff'}}>{icon.icon}</Link>
                                            )
                                        )}
                                    </Button>
                                )
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}
/* <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px'}}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box> */
