import React, { useState, useEffect } from 'react';
import { Grid, Typography, Box, Divider } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CommitIcon from '@mui/icons-material/Commit';
import VerifiedIcon from '@mui/icons-material/Verified';


const cards = [
    {
        title: 'Consultation & Planning',
        description: 'We understand your requirements, budget, and timeline, followed by site evaluation and planning.',
        icon: <CheckCircleIcon />,
    },
    {
        title: 'Design & Approval',
        description: 'Our team prepares detailed designs and cost estimates and proceeds after your approval.',
        icon: <AccountTreeIcon />,
    },
    {
        title: 'Construction & Supervision',
        description: 'Skilled professionals execute the work with continuous quality checks and safety standards.',
        icon: <CommitIcon />,
    },
    {
        title: 'Completion & Handover',
        description: 'We deliver the project on time and hand over a quality-finished structure.',
        icon: <VerifiedIcon />,
    },
];

const WhyChooseUs = () => {
    const [zoomIndex, setZoomIndex] = useState(0);

    // Auto Zoom In and Out Effect (Only for Icons)
    useEffect(() => {
        const interval = setInterval(() => {
            setZoomIndex((prevIndex) => (prevIndex + 1) % cards.length);
        }, 2000); // Change every 2 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <Grid
            container
            spacing={6} // Added spacing between grid items
            sx={{
                // backgroundImage: `url(${banner1})`,
                // background: 'radial-gradient(circle, #e9f1f4, #e5ebef, #95d3e6)',
                padding: { xs: 4, sm: 5 },
                textAlign: 'center',
                // mt: 3
            }}
        >
            <Grid item xs={12}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        marginBottom: - 6,
                        // padding: 5,
                        height: '60%'
                    }}
                >
                    <Typography variant="h3" sx={{ fontFamily: 'sans-serif', fontSize: '25px', color: 'purple', fontWeight: 400, marginBottom: 2 }}>
                        Work Process
                    </Typography>
                    <Typography variant="h2" sx={{ fontFamily: 'sans-serif', fontSize: '30px', fontWeight: 600, marginBottom: 1 }}>
                        How We Help <span style={{ color: 'purple' }}>You!</span>
                    </Typography>
                </Box>
            </Grid>
            {cards.map((card, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                    <Box
                        sx={{
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: '#fff',
                            border: '5px solid #004e6a',
                            // borderRadius: '10px',
                            padding: { xs: 3, sm: 4 }, // Increased padding inside the cards
                            height: { xs: '180px', sm: '220px', md: '200px' }, // Adjusted height for better spacing
                            marginBottom: { xs: 2, sm: 6 }, // More spacing between rows
                        }}
                    >
                        {/* Icon Positioned on the Left Border with Zoom Effect */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '-38px',
                                transform: 'translateY(-50%)',
                                backgroundColor: '#fff',
                                border: '5px solid #004e6a',
                                padding: '20px',
                                borderRadius: '50%'
                            }}
                        >
                            <Box sx={{
                                transform: zoomIndex === index ? 'scale(1.2)' : 'scale(1.8)', // Only zoom the icon
                                transition: 'transform 0.8s ease-in-out',
                                color: 'purple'
                            }}>{card.icon} </Box>
                        </Box>

                        <Typography sx={{ color: 'black', fontSize: { xs: '18px', sm: '20px' }, fontWeight: 800, textAlign: 'center' }}>
                            {card.title}
                        </Typography>
                        <Divider
                            sx={{
                                backgroundColor: '#004e6a',  // Navy blue color
                                width: { md: '50%', sm: '23%', xs: '60%' },  // Full width for separation
                                height: '1.5px',  // Slim divider
                                borderRadius: '1px',
                                margin: '5px 0'  // Space between points
                            }}
                        />
                        <Typography variant="body2" sx={{ color: 'black', fontSize: { xs: '16px', sm: '16px' }, textAlign: 'center', p: 3 }}>
                            {card.description}
                        </Typography>
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
};

export default WhyChooseUs;
