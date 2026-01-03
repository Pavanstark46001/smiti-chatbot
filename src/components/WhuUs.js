import React, { useRef } from "react";
import { Box, Typography, Link } from "@mui/material";
import { gsap } from "gsap";

const demoItems = [
    {
        link: "#",
        text: "End-to-End Construction",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        text1: 'From planning and design to execution and handover, we manage every stage seamlessly.'
    },
    {
        link: "#",
        text: "Experienced Engineering and Construction Team",
        image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
        text1: 'Skilled architects, engineers, and supervisors ensure quality workmanship at every step.'
    },
    {
        link: "#",
        text: "Quality Materials and Strong Structural Standards",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
        text1: 'We use premium materials and follow strict safety and construction norms.'
    },
    {
        link: "#",
        text: "On-Time Delivery and Support",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
        text1: 'Well-planned schedules and disciplined execution ensure timely completion.'
    },
    {
        link: "#",
        text: "Transparent Pricing and Clear Communication",
        image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
        text1: 'No hidden costs—every detail is discussed and approved before execution.'
    },
];

export default function App() {
    return (
        <Box sx={{ bgcolor: "#fff", px: { xs: 2, md: 8 }, py: 6, mt: { xs: -7 } }}>
            <Typography
                sx={{
                    textAlign: "center",
                    fontWeight: 600,
                    mb: 2,
                    fontSize: { xs: "1.5rem", md: "2.4rem" },
                    color: "#060010",
                    fontFamily: "Poppins, Inter, sans-serif",
                }}
            >
                Why Choose Us
            </Typography>
            <Typography sx={{
                textAlign: "center",
                // fontWeight: 600,
                fontSize: { xs: "16px", md: "20px" },
                mb: 4,
            }}>We combine quality construction, experienced professionals, and reliable delivery to build spaces you can trust.</Typography>

            <Box
                sx={{
                    height: { xs: "auto", md: "520px" },
                    bgcolor: "#ffffff",
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "1px solid #060010",
                }}
            >
                <FlowingMenu items={demoItems} />
            </Box>
        </Box>
    );
}

function FlowingMenu({ items }) {
    return (
        <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            {items.map((item, i) => (
                <MenuItem key={i} {...item} />
            ))}
        </Box>
    );
}

function MenuItem({ link, text, image, text1 }) {
    const marqueeRef = useRef(null);

    const show = () =>
        gsap.to(marqueeRef.current, { y: "0%", duration: 0.5, ease: "power3.out" });

    const hide = () =>
        gsap.to(marqueeRef.current, { y: "101%", duration: 0.4, ease: "power3.in" });

    return (
        <Box
            sx={{
                flex: 1,
                position: "relative",
                overflow: "hidden",
                borderTop: "1px solid #060010",
                minHeight: { xs: 80, md: "auto" },
                backgroundColor: '#fafafa'
                // background: 'radial-gradient(circle, #e9f1f4, #e5ebef, #95d3e6)',

            }}
        >
            {/* Default State */}
            <Link
                href={link}
                underline="none"
                onMouseEnter={show}
                onMouseLeave={hide}
                onTouchStart={show}
                onTouchEnd={hide}
                sx={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#060010",
                    fontWeight: 500,
                    // textTransform: "uppercase",
                    fontSize: { xs: "0.9rem", md: "1.6rem" },
                    textAlign: "center",
                    px: 2,
                    bgcolor: "#fafafa",
                    // backgroundColor: '#edf2ef',
                    // background: 'radial-gradient(circle, #e9f1f4, #e5ebef, #95d3e6)',
                    fontFamily: "Poppins, Inter, sans-serif",
                }}
            >
                {text}
            </Link>

            {/* Hover Panel */}
            <Box
                ref={marqueeRef}
                sx={{
                    position: "absolute",
                    inset: 0,
                    bgcolor: "#060010",
                    transform: "translateY(101%)",
                    pointerEvents: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                    px: 2,
                }}
            >
                <Typography
                    sx={{
                        fontSize: { xs: "0.9rem", md: "1.4rem" },
                        color: "#ffffff",
                        fontWeight: 400,

                        fontFamily: "Poppins, Inter, sans-serif",
                    }}
                >
                    {text1}
                </Typography>

                <Box
                    sx={{
                        width: { xs: 110, md: 200 },
                        height: { xs: 36, md: 60 },
                        borderRadius: "30px",
                        backgroundImage: `url(${image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
            </Box>
        </Box>
    );
}
