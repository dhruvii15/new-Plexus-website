import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Box, Button, Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PortfolioIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Link as ScrollLink } from 'react-scroll';

// img
import logo from '../img/logo.png';

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const navLinks = [
        { label: 'Home', icon: <HomeIcon />, to: '/', type: 'link' },
        { label: 'About Us', icon: <PersonIcon />, to: 'aboutUsSection', type: 'scroll' },
        { label: 'Portfolio', icon: <PortfolioIcon />, to: 'portfolioSection', type: 'scroll' },
        { label: 'Contact Us', icon: <ContactMailIcon />, to: 'hiringSection', type: 'scroll' },
    ];

    return (
        <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar>
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <RouterLink to="/">
                        <img
                            src={logo}
                            alt="Plexus"
                            style={{ width: '200px', display: 'none' }}
                            className="img-fluid d-sm-block"
                        />
                        <img
                            src={logo}
                            alt="Plexus"
                            style={{ width: '150px', display: 'block' }}
                            className="img-fluid d-sm-none"
                        />
                    </RouterLink>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    {navLinks.map((link) => (
                        link.type === 'link' ? (
                            <Button
                                key={link.label}
                                component={RouterLink}
                                to={link.to}
                                sx={{ margin: '0 10px', fontSize: '20px', textTransform: 'none' }}
                                startIcon={link.icon}
                            >
                                {link.label}
                            </Button>
                        ) : (
                            <ScrollLink
                                key={link.label}
                                to={link.to}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={200}
                                style={{ textDecoration: 'none', margin: '0 10px', fontSize: '20px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                            >
                                {link.icon}
                                <Typography sx={{ marginLeft: 1 }}>{link.label}</Typography>
                            </ScrollLink>
                        )
                    ))}
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton color="inherit" edge="start" onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                            <List>
                                {navLinks.map((link) => (
                                    <ListItem button key={link.label}>
                                        {link.type === 'link' ? (
                                            <Button
                                                component={RouterLink}
                                                to={link.to}
                                                sx={{ width: '100%', justifyContent: 'flex-start', textTransform: 'none' }}
                                                startIcon={link.icon}
                                            >
                                                {link.label}
                                            </Button>
                                        ) : (
                                            <ScrollLink
                                                to={link.to}
                                                spy={true}
                                                smooth={true}
                                                offset={-70}
                                                duration={200}
                                                style={{ textDecoration: 'none', width: '100%' }}
                                            >
                                                <ListItemIcon>{link.icon}</ListItemIcon>
                                                <ListItemText primary={link.label} />
                                            </ScrollLink>
                                        )}
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Drawer>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
