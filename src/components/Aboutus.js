import React, { useState } from "react";
import { Typography, Grid, useMediaQuery, Container, Box } from "@mui/material";
import banner2 from "../asstes/Banner.jpg";

const Aboutdigital = () => {
    const [isHovered, setIsHovered] = useState(false);

    const isMobile = useMediaQuery("(max-width:600px)");

    return (
        <Container maxWidth="lg" sx={{ py: 5 }}>
            <Grid container spacing={4} alignItems="center">
                {/* IMAGE SECTION */}
                <Grid
                    item
                    xs={12}
                    md={5}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: { xs: 4, md: 0 },
                    }}
                >
                    {/* IMAGE WRAPPER */}
                    <Box
                        sx={{
                            position: "relative",
                            width: { xs: 260, md: 1000 },
                            height: { xs: 260, md: 420 },
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* IMAGE */}
                        <Box
                            component="img"
                            src={banner2}
                            alt="Smiti Construction"
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                borderRadius: "50%",
                                border: "2px solid purple",
                            }}
                        />

                        {/* 5+ YEARS BADGE */}
                        <Box
                            sx={{
                                position: "absolute",
                                bottom: { xs: 10, md: 20 },
                                right: { xs: 10, md: 0 },
                                width: { xs: 90, md: 140 },
                                height: { xs: 90, md: 140 },
                                borderRadius: "50%",
                                bgcolor: "gold",
                                color: "black",
                                border: '4px solid white',
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: 4,
                                transform: isHovered ? "translateY(-10px)" : "translateY(0)",
                                transition: "all 0.3s ease",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: { xs: "26px", md: "40px" },
                                    fontWeight: 800,
                                }}
                            >
                                15+
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: { xs: "10px", md: "13px" },
                                    fontWeight: 600,
                                    textAlign: "center",
                                }}
                            >
                                Years Experience
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                {/* TEXT SECTION */}
                <Grid item xs={12} md={7}>
                    <Typography
                        sx={{
                            fontWeight: "bold",
                            fontSize: { xs: 18, md: 20 },
                            // ml: { xs: 0, md: 9 },
                            color: "#2a4bb8",
                        }}
                    >
                        About
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: 28, md: 34 },
                            fontWeight: 600,
                            // ml: { xs: 0, md: 9 },
                            mb: 2,
                        }}
                    >
                        Smiti Construction
                    </Typography>

                    <Typography variant='body1' sx={{ marginTop: '15px', textAlign: 'justify', ml: { xs: 0, md: 0, sm: 0 } }}> Smiti Construction is a trusted building construction company committed to delivering high-quality, reliable, and cost-effective construction solutions. With a strong focus on quality workmanship and customer satisfaction, we undertake residential and commercial projects with professionalism and care. </Typography>
                    <Typography variant='body1' sx={{ marginTop: '15px', textAlign: 'justify', ml: { xs: 0, md: 0, sm: 0 } }}> We specialize in <span style={{
                        padding: "8px 6px",
                        border: "2px solid purple",
                        borderRadius: "50%",
                        fontWeight: 600
                    }}>
                        End-to-End construction services
                    </span> managing every stage from planning and design to execution and final handover. Our experienced team of engineers, architects, and skilled professionals ensures that every project meets structural standards, safety norms, and client expectations. </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Aboutdigital;
