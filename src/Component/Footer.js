import React from 'react';
import { Container, Grid, Box, Typography, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    const phoneNumber = '+91 90238 38674';

    const handleLinkedInClick = () => {
        const linkedinUrl = 'https://www.linkedin.com/company/plexus-technology2024/';
        window.open(linkedinUrl, '_blank');
    };

    const handleWhatsappClick = () => {
        const message = 'Hi, I would like to inquire about the services provided by Plexus Technology.';
        const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\s+/g, '')}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleInstaClick = () => {
        const instaUrl = 'https://www.instagram.com/plexus_technology/?igsh=MWdkdWZheGxrZjZkZQ%3D%3D';
        window.open(instaUrl, '_blank');
    };

    const handlePhoneClick = () => {
        window.location.href = `tel:${phoneNumber.replace(/\s+/g, '')}`;
    };

    return (
        <Box sx={{ background: '#F8F8F8', color: '#1c1c1c', overflow: 'hidden', borderRadius: 10, boxShadow: '0 -4px 50px rgb(219, 231, 250)' }}>
            <Container>
                <Grid container spacing={2} alignItems="center" justifyContent="center" py={5} px={2}>
                    <Grid item xs={12} md={4} pt={4} textAlign="center">
                        <Typography variant="h5" fontWeight="bold" color="black" pt={4}>
                            Plexus Technology
                        </Typography>
                        <Typography variant="body1" pt={2}>
                            305, A.R Mall, opp. panvel point,<br />
                            mota varachha, 394101
                        </Typography>
                        <Typography variant="body1" textAlign="center" fontWeight="bold" pt={3} m={0}
                            onClick={handlePhoneClick}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer'
                            }}>
                            <span style={{ color: 'black', paddingRight: '8px' }}>Phone:</span>
                            <span style={{ fontWeight: 'normal', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {phoneNumber}
                            </span>
                        </Typography>
                        <Typography variant="body1" fontWeight="bold">
                            <span style={{ color: 'black', paddingRight: '8px' }}>Email:</span>
                            <span style={{ fontWeight: 'normal' }}>
                                <a
                                    href="mailto:hr.plexustechnology@gmail.com?subject=Job%20Application&body=Dear%20HR,%0D%0A%0D%0AI%20am%20writing%20to%20express%20my%20interest%20in%20the%20available%20position%20at%20Plexus%20Technology.%20Please%20find%20my%20resume%20attached.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Name]"
                                    style={{ textDecoration: 'none', fontSize: '1rem', color: '#1c1c1c' }}
                                >
                                    hr.plexustechnology@gmail.com
                                </a>
                            </span>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} textAlign="center" pt={4}>
                        <Box pt={4}>
                            <Typography variant="h5" fontWeight="bold" color="black">
                                Quick Links
                                    <Typography variant="body1" style={{ paddingTop: "11px" }}>
                                        <Link to="/about-us" style={{ textDecoration: "none", color: "inherit" }}>
                                            About us
                                        </Link>
                                    </Typography>
                                    <Typography variant="body1" style={{ paddingTop: "11px" }}>
                                        <Link to="/portfolio" style={{ textDecoration: "none", color: "inherit" }}>
                                            Portfolio
                                        </Link>
                                    </Typography>
                                    <Typography variant="body1" style={{ paddingTop: "11px" }}>
                                        <Link to="/about-us" style={{ textDecoration: "none", color: "inherit" }}>
                                            Company Culture
                                        </Link>
                                    </Typography>
                                    <Typography variant="body1" style={{ paddingTop: "11px" }}>
                                        <Link to="/contact-us" style={{ textDecoration: "none", color: "inherit" }}>
                                            Contact us
                                        </Link>
                                    </Typography>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} textAlign="center" pt={4}>
                        <Box pt={4}>
                            <img src={logo} alt="plexus-technology" style={{ width: '180px', height: 'auto' }} />
                            <Typography variant="body2" pt={2} style={{ fontSize: '17px' }} fontWeight="bold">
                                Follow Us
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, py: 2, color: 'black' }}>
                                <div className="common-footer hover-box box1" onClick={handleLinkedInClick}>
                                    <IconButton>
                                        <LinkedInIcon fontSize="large" className="hover-box2 hover1 fs-4 text-white" />
                                    </IconButton>
                                </div>
                                <div className="common-footer hover-box box2" onClick={handleWhatsappClick}>
                                    <IconButton>
                                        <WhatsAppIcon fontSize="large" className="hover-box2 hover2 fs-4 text-white" />
                                    </IconButton>
                                </div>
                                <div className="common-footer hover-box box3" onClick={handleInstaClick}>
                                    <IconButton>
                                        <InstagramIcon fontSize="large" className="hover-box2 hover3 fs-4 text-white" />
                                    </IconButton>
                                </div>
                            </Box>
                            <hr className='d-block d-md-none'></hr>
                            <Typography variant="body2" pb={2} style={{ fontSize: '14px' }} textAlign={'center'} className='d-block d-md-none'>
                                All rights Reserved. © Plexus Technology
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <hr className='d-none d-md-block'></hr>
                <Typography variant="body2" pb={2} style={{ fontSize: '14px' }} textAlign={'end'} className='d-none d-md-block'>
                    All rights Reserved. © Plexus Technology
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;