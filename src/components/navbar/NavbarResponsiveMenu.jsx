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
import TextField from '@mui/material/TextField';
import Popover from '@mui/material/Popover';
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
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import useThemeStore from "../../store/useThemeStore.js";

const pages = [
    { id: 'home', to: '/', label: 'Home' },
    { id: 'products', to: '/products', label: 'Products' },
    { id: 'categories', to: '/categories', label: 'Categories' },
    { id: 'about', to: '#', label: 'About Us' },
    { id: 'contact', to: '/contactUs', label: 'Contact Us' },
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
    const mode = useThemeStore((state) => state.mode);
    const toggleMode = useThemeStore((state) => state.toggleMode);
    const icons = token
        ? [
            { id: 'mode', to: '#', icon: mode === 'light' ? <DarkModeIcon /> : <LightModeIcon /> },
            { id: 'language', to: '#', icon: <LanguageIcon /> },
            { id: 'search', to: '#', icon: <SearchIcon /> },
            { id: 'profile', to: '#', icon: <PersonOutlineRoundedIcon /> /* to: '/profile' */ },
            { id: 'favorites', to: '#', icon: <FavoriteBorderIcon /> },
            { id: 'cart', to: '#', icon: <ShoppingBagOutlinedIcon /> /* to: '/cart' */ },
            { id: 'logout', icon: <LogoutIcon /> }
        ] : [
            { id: 'mode', to: '#', icon: mode === 'light' ? <DarkModeIcon /> : <LightModeIcon /> },
            { id: 'language', to: '#', icon: <LanguageIcon /> },
            { id: 'search', to: '#', icon: <SearchIcon /> },
            { id: 'register', to: '/auth/register', icon: <LoginIcon /> }
        ];

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [searchTerm, setSearchTerm] = React.useState('');
    const [searchAnchor, setSearchAnchor] = React.useState(null);

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

    const handleSearchToggle = (event) => {
        if (searchAnchor) {
            setSearchAnchor(null);
            return;
        }

        // On small screens, anchor to the top actions trigger so the dropdown opens near the navbar.
        const anchorTarget = anchorElUser || event.currentTarget;
        setSearchAnchor(anchorTarget);
        setSearchTerm('');
        if (anchorElUser) handleCloseUserMenu();
    };

    const handleSearchClose = () => {
        setSearchAnchor(null);
    };

    const handleSearchKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
            setSearchAnchor(null);
        }
    };

    const handleSearch = () => {
        if(searchTerm.trim() === ''){
            navigate('/products');
        }else{
            navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
        }
    }

    return (
        <Box sx={{ flexGrow: 1, mb: {lg: 9, sm: 8, xs: 6}}}>
            <AppBar position="fixed" sx={{backgroundColor: '#2D5356'}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'info.light'}}>
                        <Link component={RouterLink} to={'/'} color="inherit" underline={"none"} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                            <img alt={''} src={logo} width={27}/>
                            <Typography
                                variant="h6"
                                noWrap
                                component="span"
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
                                        <Typography sx={{ textAlign: 'center',color: 'secondary.main' }}>
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
                                component="span"
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
                                            { icon.id === 'mode'?(
                                                <Button onClick={toggleMode} sx={{ minWidth: 8, p: 0, my: 1, color: 'secondary.main' }}>
                                                    {icon.icon}
                                                </Button>
                                            ):(icon.id === 'language'?(
                                                <Button key={icon.id} onClick={changeLanguage} sx={{ minWidth: 8, p: 0, my: 1, color: 'secondary.main'  }}>
                                                    {icon.icon}
                                                </Button>
                                            ) : (icon.id === 'logout' ? (
                                                <Button key={icon.id} onClick={handleLogout} sx={{ minWidth: 8, p: 0, color: 'secondary.main' }}>
                                                    {icon.icon}
                                                </Button>
                                            ) : (icon.id === 'cart' ? (
                                                    <Badge key={icon.id} badgeContent={cartCount}
                                                        sx ={{
                                                            color: "secondary.main !important",
                                                            '& .MuiBadge-badge': {
                                                                bgcolor: '#2D5356',
                                                                color: 'info.light',
                                                                borderRadius: '50%',
                                                                minWidth: '16px',
                                                                height: '16px',
                                                                padding: '0 4px',
                                                                fontSize: '0.65rem'
                                                            }
                                                    }}><Link component={RouterLink} to={icon.to} underline={"none"} sx={{color: 'secondary.main' }}>{icon.icon}</Link></Badge>
                                                ):(
                                                    (icon.id === 'search') ? (
                                                        <Button key={icon.id} sx={{ minWidth: 8, p: 0, color: 'secondary.main' }}
                                                                onClick={(e) =>{
                                                                    e.stopPropagation();
                                                                    handleSearchToggle(e);
                                                                }}
                                                        >
                                                            {icon.icon}
                                                        </Button>
                                                    ) : (
                                                        <Link key={icon.id} component={RouterLink} to={icon.to} underline={"none"} sx={{color: 'secondary.main' }}>{icon.icon}</Link>
                                                    )
                                                ))
                                                )
                                            )}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Box sx={{display: { xs: 'none', lg: 'flex' } }}>
                            {icons.map((icon) => (
                                icon.id === 'mode'? (
                                    <Button key={icon.id} onClick={toggleMode} sx={{ minWidth: 8, p: 0, color: 'info.light', display: 'block', my: 2, mx: 1 }}>
                                        {icon.icon}
                                    </Button>
                                ):(
                                    icon.id === 'language' ? (
                                        <Button key={icon.id} onClick={changeLanguage} sx={{ minWidth: 8, p: 0, color: 'info.light', display: 'block', my: 2, mx: 1 }}>
                                            {icon.icon}
                                        </Button>
                                    ):(
                                        (icon.id === 'search') ? (
                                            <Button key={icon.id} onClick={handleSearchToggle} sx={{ minWidth: 8, p: 0, color: 'info.light', display: 'block', my: 2, mx: 1 }}>
                                                {icon.icon}
                                            </Button>
                                        ) : (
                                            <Button
                                                key={icon.id}
                                                onClick={icon.id === 'logout' ? handleLogout : handleCloseNavMenu}
                                                sx={{ my: 2, color: 'white', display: 'block', minWidth: 8 }}
                                            >{ icon.id === 'logout' ? (
                                                icon.icon
                                            ) : (
                                                icon.id === 'cart' ? (
                                                    <Badge key={icon.id} badgeContent={cartCount} sx={{
                                                        '& .MuiBadge-badge': {
                                                            bgcolor: 'secondary.main',
                                                            color: 'info.light',
                                                            borderRadius: '50%',
                                                            minWidth: '16px',
                                                            height: '16px',
                                                            padding: '0 4px',
                                                            fontSize: '0.65rem'
                                                        }
                                                    }}><Link component={RouterLink} to={icon.to} underline={"none"} sx={{color: 'info.light'}}>{icon.icon}</Link></Badge>
                                                ):(
                                                    <Link key={icon.id} component={RouterLink} to={icon.to} underline={"none"} sx={{color: 'info.light'}}>{icon.icon}</Link>
                                                )
                                            )}
                                            </Button>
                                        )
                                    )
                                )
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Popover
                open={Boolean(searchAnchor)}
                anchorEl={searchAnchor}
                onClose={handleSearchClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                slotProps={{
                    paper: {
                        sx: {
                            mt: 0.5,
                            width: { xs: '220px', sm: '260px', md: '350px' },
                            maxWidth: 'calc(100vw - 24px)',
                            mr: { xs: 1, sm: 1, md: 0 },
                        }
                    }
                }}
            >
                <Box sx={{p: 2, backgroundColor: '#f5f5f5'}}>
                    <TextField autoFocus fullWidth size="small" placeholder={t('Search products')} value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={handleSearchKeyPress}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                backgroundColor: 'white',
                                color: '#333',
                                '& fieldset': {
                                    borderColor: '#ddd',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#bbb',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'secondary.main',
                                },
                            },
                            '& .MuiOutlinedInput-input::placeholder': {
                                color: '#999',
                                opacity: 1,
                            },
                        }}
                    />
                </Box>
            </Popover>
        </Box>
    );
}