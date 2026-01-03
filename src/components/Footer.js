import React from 'react';
import { Box, Grid, Stack, Typography, Divider, IconButton, useTheme, useMediaQuery } from '@mui/material';
import {
    Email as EmailIcon,
    Phone as PhoneIcon,
    LocationOn as LocationOnIcon,
    LinkedIn as LinkedInIcon,
    Facebook as FacebookIcon,
    Instagram as InstagramIcon,
    Twitter as TwitterIcon,
    YouTube as YouTubeIcon,
} from '@mui/icons-material';

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{ width: '100%', color: 'black' }}>
            <Divider sx={{ borderWidth: 1, width: '80 % ' }} />
            {/* Main Footer */}
            <Box sx={{ px: { xs: 3, md: 8 }, py: 6, background: '#ebedeb' }}>
                <Grid container spacing={4}>

                    {/* Company Info */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                            SMITI CONSTRUCTION
                        </Typography>
                        <Stack spacing={1}>
                            <Typography variant="body2" sx={{ fontSize: isMobile ? 12 : 14, textAlign: 'justify' }}>
                                Smiti Construction is a trusted building construction company delivering high-quality residential and commercial projects. We specialize in end-to-end construction services with a focus on quality, safety, and customer satisfaction.
                            </Typography>
                        </Stack>
                    </Grid>

                    {/* Contact Info */}


                    {/* Top Services */}
                    <Grid item xs={12} md={3} sx={{ ml: { md: 5, xs: 0 } }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                            OUR SERVICES
                        </Typography>
                        <Stack spacing={1}>
                            {[
                                'Residential Construction',
                                'Commercial Construction',
                                'Project Planning & Design',
                                'Renovation & Remodeling',
                                'Structural Safety Inspections',
                                'Interior & Exterior Work',
                            ].map((service, idx) => (
                                <Typography
                                    key={idx}
                                    variant="body2"
                                    sx={{
                                        fontSize: isMobile ? 12 : 14,
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        position: 'relative',
                                        transition: 'all 0.3s ease',
                                        '&::before': {
                                            content: '"•"', // bullet point
                                            color: 'blue', // bullet color
                                            display: 'inline-block',
                                            width: '1em',
                                            marginRight: '0.5em',
                                            transform: 'translateX(0)',
                                            transition: 'all 0.3s ease',
                                        },
                                        '&:hover': {
                                            color: '#e6780b', // text color on hover
                                            transform: 'translateX(-10px)', // move left
                                            '&::before': {
                                                color: '#e6780b', // bullet color on hover
                                                transform: 'translateX(-10px)', // bullet moves with text
                                            },
                                        },
                                    }}
                                >
                                    {service}
                                </Typography>
                            ))}
                        </Stack>
                    </Grid>

                    <Grid item xs={12} md={4} >
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                            CONTACT US
                        </Typography>
                        <Stack spacing={1}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <EmailIcon sx={{ mr: 1 }} />
                                <Typography variant="body2">
                                    <a href="mailto:info@smiticonstruction.com" style={{ color: '#black', textDecoration: 'none' }}>
                                        info@smiticonstruction.com
                                    </a>
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <PhoneIcon sx={{ mr: 1 }} />
                                <Typography variant="body2">
                                    <a href="tel:+91 9945578800" style={{ color: '#black', textDecoration: 'none' }}>
                                        +91 9945578800
                                    </a>
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <LocationOnIcon sx={{ mr: 1 }} />
                                <Typography variant="body2">

                                    No- 1, Plot no 1668/1 sy.no 45/4,Nagadevanahalli 1st Block, Sir M.V. Layout, BDA, Bengaluru, 560056
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>

                <Divider sx={{ backgroundColor: '#black', my: 4 }} />

                {/* Bottom Bar */}
                <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justifyContent={isMobile ? 'center' : 'space-between'}
                >
                    {/* COPYRIGHT */}
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            display: 'flex',
                            justifyContent: isMobile ? 'center' : 'flex-start',
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{ textAlign: 'center', fontSize: isMobile ? 12 : 14 }}
                        >
                            © {new Date().getFullYear()} Smiti Construction – All rights reserved.
                        </Typography>
                    </Grid>

                    {/* SOCIAL ICONS */}
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center', // center all icons
                            gap: 2,
                            mt: isMobile ? 1 : 0, // small top margin on mobile
                        }}
                    >
                        {[LinkedInIcon, FacebookIcon, InstagramIcon, TwitterIcon, YouTubeIcon].map(
                            (Icon, idx) => (
                                <IconButton
                                    key={idx}
                                    sx={{
                                        color: 'blue', // icon color
                                        width: 35,
                                        height: 35,
                                        '&:hover': { color: '#e6780b' },
                                    }}
                                    onClick={() => window.open('#', '_blank')}
                                >
                                    <Icon sx={{ fontSize: 24 }} />
                                </IconButton>
                            )
                        )}
                    </Grid>
                </Grid>

            </Box>
        </Box>
    );
};

export default Footer;
