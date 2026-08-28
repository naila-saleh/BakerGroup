import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import InventoryIcon from '@mui/icons-material/Inventory';
import ClassIcon from '@mui/icons-material/Class';
import ReviewsIcon from '@mui/icons-material/Reviews';
import logo from '../../assets/images/logo/woodLine.png'
import Link from "@mui/material/Link";
import {Link as RouterLink} from "react-router";
import {useNavigate} from "react-router-dom";

const drawerWidth = 240;

export default function Sidebar({ children }) {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const [selectedText, setSelectedText] = React.useState('Welcome to Admin Panel');
    const navigate = useNavigate();

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const list = [
        { text: 'Users', to: '/admin', icon: <SupervisedUserCircleIcon sx={{ color: 'secondary.main' }} /> },
        { text: 'Products', to: '/admin/products', icon: <InventoryIcon sx={{ color: 'secondary.main' }} /> },
        { text: 'Categories', to: '/admin', icon: <ClassIcon sx={{ color: 'secondary.main' }} /> },
        { text: 'Reviews', to: '/admin', icon: <ReviewsIcon sx={{ color: 'secondary.main' }} /> },
    ];

    const handleItemClick = (text) => {
        navigate(text.toLowerCase());
        setSelectedText(text);
    };

    const drawer = (
        <Box sx={{ backgroundColor: '#2D5356', height: '100%', color: 'info.light'}}>
            <Toolbar sx={{ borderBottom: '1px solid', borderColor: 'info.light' }} >
                <Link component={RouterLink} to={'/'} color="inherit" underline={"none"} sx={{ display: 'flex', alignItems: 'center' }}>
                    <img alt={''} src={logo} width={27}/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="span"
                        sx={{
                            ml: 1,
                            mr: 2,
                            display: 'flex',
                            fontFamily: 'monospace',
                            fontWeight: 600,
                            letterSpacing: '0.5px',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        WoodLine
                    </Typography>
                </Link>
            </Toolbar>
            <Divider />
            <List>
                {list.map(({ text, icon }) => (
                    <ListItem key={text} disablePadding >
                        <ListItemButton onClick={() => handleItemClick(text)}>
                            <ListItemIcon>
                                {icon}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex'}}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { md: `calc(100% - ${drawerWidth}px)` },
                    ml: { md: `${drawerWidth}px` },
                }}
            >
                <Toolbar sx={{ backgroundColor: 'secondary.main'}}>
                    <IconButton
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {selectedText}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    slotProps={{
                        root: {
                            keepMounted: true, // Better open performance on mobile.
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', md: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { md: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
};