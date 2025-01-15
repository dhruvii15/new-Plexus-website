/* eslint-disable */
import React from 'react';
import { Container, Grid, Box, Typography, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from '../img/logo.png';

const Footer = () => {
    const handleLinkedInClick = () => {
        const linkedinUrl = 'https://www.linkedin.com/company/plexus-technology2024/';
        window.open(linkedinUrl, '_blank');
    };

    const handleWhatsappClick = () => {
        const phoneNumber = '+91 90238 38674';
        const message = 'Hi, I would like to inquire about the services provided by Plexus Technology.';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleInstaClick = () => {
        const instaUrl = 'https://www.instagram.com/plexus_technology/?igsh=MWdkdWZheGxrZjZkZQ%3D%3D';
        window.open(instaUrl, '_blank');
    };

    return (
        <Box sx={{background: '#F8F8F8', color: '#1c1c1c', overflow: 'hidden', borderRadius: 10, boxShadow: '0 -4px 50px rgba(235,241,250 ,1)' }}>
            <Container>
                <Grid container spacing={2} alignItems="center" justifyContent="center" py={5} px={2}>
                    <Grid item xs={12} lg={5} pt={4}>
                        <Typography variant="h4" fontWeight="bold" color="black">
                            Plexus Technology
                        </Typography>
                        <Typography variant="body1" pt={2}>
                            305, A.R Mall, opp. panvel point,<br />
                            mota varachha, 394101
                        </Typography>
                        <Typography variant="body1" fontWeight="bold" pt={3} m={0}>
                            <span style={{ color: 'black', paddingRight: '8px' }}>Phone:</span>
                            <span style={{ fontWeight: 'normal' }}>+91 90238 38674</span>
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
                    <Grid item xs={12} lg={7} textAlign="center" pt={3}>
                        <Box pt={3}>
                            <img src={logo} alt="plexus-technology" style={{ width: '220px', height: 'auto' }} />
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
                            <Typography variant="body2" py={2} style={{ fontSize: '14px' }}>
                                All rights Reserved. © Plexus Technology
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
