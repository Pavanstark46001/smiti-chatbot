import React, { useEffect, useRef } from 'react';
import { Box, Grid, Typography, Button, Stack, useMediaQuery } from '@mui/material';
import { gsap } from 'gsap';

import banner from '../asstes/banner1.jpg';

import HomeIcon from '@mui/icons-material/Home';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const services = [
    {
        title: 'Full Construction',
        desc: 'From ground up to move-in ready homes and commercial spaces',
        color: '#22c55e',
        icon: <HomeIcon />
    },
    {
        title: 'Interior Design',
        desc: 'Beautiful, functional spaces that reflect your style',
        color: '#f59e0b',
        icon: <MeetingRoomIcon />
    },
    {
        title: 'Renovations',
        desc: 'Transform existing spaces into modern masterpieces',
        color: '#ef4444',
        icon: <CleaningServicesIcon />
    },
    {
        title: 'Project Management',
        desc: 'End-to-end coordination for seamless execution',
        color: '#a855f7',
        icon: <ManageAccountsIcon />
    }
];

const Banner = () => {
    const cardsRef = useRef([]);
    const isMobile = useMediaQuery('(max-width:600px)');
    const isTablet = useMediaQuery('(min-width:601px) and (max-width:1200px)');

    /* Entrance animation */
    useEffect(() => {
        gsap.fromTo(
            cardsRef.current,
            { opacity: 0, y: 70 },
            {
                opacity: 0.6,
                y: 0,
                duration: 1,
                stagger: 0.25,
                ease: 'power3.out'
            }
        );
    }, []);

    const handleMouseEnter = (el) => {
        gsap.to(el, {
            scale: 1.06,
            y: -8,
            boxShadow: '0px 25px 45px rgba(0,0,0,0.4)',
            duration: 0.4,
            ease: 'power3.out'
        });
    };

    const handleMouseLeave = (el) => {
        gsap.to(el, {
            scale: 1,
            y: 0,
            boxShadow: '0px 12px 25px rgba(0,0,0,0.25)',
            duration: 0.4,
            ease: 'power3.out'
        });
    };

    return (
        <Box
            sx={{
                height: { xs: '240vh', md: '95vh' },
                position: 'relative',
                overflow: 'hidden',
                backgroundImage: `linear-gradient(rgba(6,0,16,.75), rgba(6,0,16,.75)), url(${banner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: { xs: 'flex-start', md: 'center' },
                py: { xs: 6, md: 0 }
            }}
        >
            <Grid container px={{ xs: 2, md: 8 }} spacing={{ xs: 4, md: 7 }}>
                {/* LEFT CONTENT */}
                <Grid
                    item
                    xs={12}
                    md={6}
                    textAlign={{ xs: 'center', md: 'left' }}
                    mt={{ xs: 4, md: 0 }}
                >
                    <Typography
                        sx={{
                            display: 'inline-block',
                            px: 2,
                            py: 1,
                            mb: 2,
                            borderRadius: '20px',
                            backgroundColor: 'gold',
                            color: '#000',
                            fontSize: { xs: 12, sm: 14 },
                            fontWeight: 600
                        }}
                    >
                        COMPLETE CONSTRUCTION SOLUTIONS
                    </Typography>

                    <Typography
                        sx={{
                            color: '#fff',
                            fontWeight: 700,
                            mb: 2,
                            fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                            lineHeight: 1.2
                        }}
                    >
                        Transform Your <br /> Vision Into Reality
                    </Typography>

                    <Typography
                        sx={{
                            color: '#e5e7eb',
                            maxWidth: { xs: '100%', md: 520 },
                            mx: { xs: 'auto', md: 0 },
                            mb: 4,
                            fontSize: { xs: 14, sm: 15, md: 16 },
                            textAlign: { xs: 'center', md: 'left' }
                        }}
                    >
                        From foundation to finishing touches—we build your dream space with
                        precision, quality, and stunning interior design.
                    </Typography>

                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={2}
                        mb={6}
                        justifyContent={{ xs: 'center', md: 'flex-start' }}
                    >
                        <Button
                            sx={{
                                backgroundColor: 'gold',
                                color: '#000',
                                px: 3,
                                py: 1.4,
                                fontWeight: 600,
                                borderRadius: '10px',
                                "&:hover": {
                                    backgroundColor: '#16a34a',
                                    transform: 'translateY(-2px)'
                                }
                            }}
                        >
                            Get Free Consultation →
                        </Button>

                        <Button
                            variant="outlined"
                            sx={{
                                color: '#fff',
                                borderColor: '#fff',
                                px: 3,
                                py: 1.4,
                                fontWeight: 600,
                                borderRadius: '10px',
                                "&:hover": {
                                    color: '#22c55e',
                                    borderColor: '#22c55e',
                                    transform: 'translateY(-2px)'
                                }
                            }}
                        >
                            View Our Projects
                        </Button>
                    </Stack>

                    {/* STATS */}
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 3, sm: 6 }}
                        alignItems={{ xs: 'center', sm: 'flex-start' }}
                    >
                        <Stat value="15+" label="Years Experience" />
                        <Stat value="500+" label="Projects Completed" />
                        <Stat value="100%" label="Client Satisfaction" />
                    </Stack>
                </Grid>

                {/* RIGHT CARDS */}
                <Grid item xs={12} md={6}>
                    <Grid container rowSpacing={{ xs: 4, md: 10 }} columnSpacing={{ xs: 2, md: 4 }}>
                        {services.map((item, i) => (
                            <Grid item xs={12} sm={6} key={i}>
                                <Box
                                    ref={(el) => (cardsRef.current[i] = el)}
                                    onMouseEnter={() => handleMouseEnter(cardsRef.current[i])}
                                    onMouseLeave={() => handleMouseLeave(cardsRef.current[i])}
                                    sx={{
                                        backdropFilter: 'blur(10px)',
                                        backgroundColor: 'white',

                                        WebkitBackdropFilter: 'blur(10px)', // Safari support
                                        borderTopLeftRadius: '20%',
                                        borderBottomRightRadius: '20%',
                                        p: { xs: 3, md: 4 },
                                        color: 'black',
                                        border: '3px solid gold',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: '14px',
                                            backgroundColor: item.color,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            mb: 2
                                        }}
                                    >
                                        {item.icon}
                                    </Box>

                                    <Typography variant="h6" fontWeight={600} mb={1}>
                                        {item.title}
                                    </Typography>

                                    <Typography sx={{ color: 'black', fontSize: { xs: 12, md: 14 } }}>
                                        {item.desc}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

            {/* 🔥 CURVED WHITE BOTTOM */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: -1,
                    left: 0,
                    width: '100%',
                    lineHeight: 0
                }}
            >
                <svg
                    viewBox="0 0 1240 160"
                    preserveAspectRatio="none"
                    style={{
                        width: '100%',
                        height: '150px',
                        display: 'block',
                        transform: 'scaleY(-1)'
                    }}
                >
                    <path
                        fill="white"
                        d="M0,40 C240,120 480,120 720,80 960,40 1200,40 1440,60 L1440,0 L0,0 Z"
                    />
                </svg>
            </Box>
        </Box>
    );
};

const Stat = ({ value, label }) => (
    <Box textAlign={{ xs: 'center', sm: 'left' }}>
        <Typography sx={{ color: 'white', fontSize: { xs: 24, md: 32 }, fontWeight: 700 }}>
            {value}
        </Typography>
        <Typography sx={{ color: '#e5e7eb', fontSize: { xs: 12, md: 14 } }}>
            {label}
        </Typography>
    </Box>
);

export default Banner;
