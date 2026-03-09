import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import logo from '../../assets/images/logo/BakerGroup-yelloLogo.svg'
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import Link from "@mui/material/Link";
import {Link as RouterLink} from "react-router";

const pages = [
    <Link component={RouterLink} to={'/'} color="inherit" underline={"none"}>Home</Link>,
    <Link component={RouterLink} to={'#'} color="inherit" underline={"none"}>Products</Link>,
    <Link component={RouterLink} to={'/categories'} color="inherit" underline={"none"}>Categories</Link>,
    <Link component={RouterLink} to={'#'} color="inherit" underline={"none"}>About Us</Link>,
    <Link component={RouterLink} to={'#'} color="inherit" underline={"none"}>Contact Us</Link>,
    <Link component={RouterLink} to={'#'} color="inherit" underline={"none"}>Blog</Link>
];
const icons = [
    <Link component={RouterLink} to={'#'} underline={"none"} sx={{color: {md: '#fff', xs: '#D09523'}}}><SearchIcon /></Link>,
    <Link component={RouterLink} to={'#'} underline={"none"} sx={{color: {md: '#fff', xs: '#D09523'}}}><FavoriteBorderIcon /></Link>,
    <Link component={RouterLink} to={'/cart'} underline={"none"} sx={{color: {md: '#fff', xs: '#D09523'}}}><ShoppingBagOutlinedIcon /></Link>,
    <Link component={RouterLink} to={'/auth/register'} underline={"none"} sx={{color: {md: '#fff', xs: '#D09523'}}}><PersonOutlineRoundedIcon /></Link>
];

export default function NavbarResponsiveMenu() {
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

    return (
        <Box sx={{ flexGrow: 1, mb: {md: 9, sm: 8, xs: 6}}}>
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
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography sx={{ textAlign: 'center',color: '#D09523' }}>{page}</Typography>
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
                                    ml: 1,
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
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{display: { xs: 'flex', md: 'none' } }}>
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
                                sx={{ display: { xs: 'block', md: 'none' } }}
                            >
                                {icons.map((icon) => (
                                    <MenuItem key={icon} onClick={handleCloseUserMenu}>
                                        <Typography sx={{ textAlign: 'center'}}>{icon}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Box sx={{display: { xs: 'none', md: 'flex' } }}>
                            {icons.map((icon) => (
                                <Button
                                    key={icon}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block', minWidth: 8 }}
                                >
                                    {icon}
                                </Button>
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
