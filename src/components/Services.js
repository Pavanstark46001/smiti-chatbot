import { useState, useEffect } from "react";
import { Box, Card, CardMedia, Typography, useMediaQuery, useTheme } from "@mui/material";

const books = [
    {
        id: 1,
        title: "Residential Construction",
        author: "Urban Builders",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    },
    {
        id: 2,
        title: "Modern Architecture",
        author: "Design Studio",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    },
    {
        id: 3,
        title: "Construction Planning",
        author: "Civil Experts",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    },
    {
        id: 4,
        title: "Industrial Projects",
        author: "BuildTech Group",
        image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41",
    },
    {
        id: 5,
        title: "Smart Infrastructure",
        author: "Future Engineers",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
];

export default function CardCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // <600px
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600-900px

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % books.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    const getPosition = (index) => {
        let diff = (index - currentIndex + books.length) % books.length;
        if (diff > books.length / 2) diff -= books.length;
        return diff;
    };

    const getStyle = (index) => {
        const pos = getPosition(index);
        const isCenter = pos === 0;

        // Responsive sizing
        const cardWidth = isMobile ? 180 : isTablet ? 220 : 250;
        const cardHeight = isMobile ? 260 : isTablet ? 320 : 350;
        const cardSpacing = isMobile ? 200 : isTablet ? 240 : 280;
        const scale = isCenter ? (isMobile ? 1.1 : isTablet ? 1.15 : 1.25) : isMobile ? 0.8 : isTablet ? 0.85 : 0.85;

        return {
            position: "absolute",
            width: cardWidth,
            height: cardHeight,
            transform: `translateX(${pos * cardSpacing}px) scale(${scale})`,
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            zIndex: isCenter ? 10 : 5 - Math.abs(pos),
            opacity: Math.abs(pos) > 2 ? 0 : 1,
            cursor: "pointer",
            boxShadow: isCenter
                ? "0 20px 50px rgba(0,0,0,0.45)"
                : "0 10px 30px rgba(0,0,0,0.3)",
            borderRadius: 5,
        };
    };

    return (
        <Box
            sx={{
                height: isMobile ? "75vh" : "85vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#fff",
                px: { xs: 2, sm: 4, md: 6 },
            }}
        >
            {/* Title */}
            <Typography
                variant={isMobile ? "h6" : "h5"}
                sx={{
                    mb: 3,
                    color: "purple",
                    fontWeight: 700,
                    textAlign: "center",
                }}
            >
                OUR SERVICES
            </Typography>

            <Typography
                variant={isMobile ? "h6" : "h3"}
                sx={{
                    mb: 4,
                    fontWeight: 600,
                    textAlign: "center",
                    background: "black",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                Complete Construction and Design Solutions
            </Typography>

            {/* Carousel */}
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    height: isMobile ? 300 : 450,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                }}
            >
                {books.map((book, index) => (
                    <Card key={book.id} sx={getStyle(index)} onClick={() => setCurrentIndex(index)}>
                        <CardMedia
                            component="img"
                            image={book.image}
                            alt={book.title}
                            sx={{ height: isMobile ? 180 : 280, objectFit: "cover" }}
                        />

                        <Box sx={{ p: 1.5 }}>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontWeight: 600,
                                    fontSize: isMobile ? "0.8rem" : "1rem",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                }}
                            >
                                {book.title}
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                    fontSize: isMobile ? "0.7rem" : "0.9rem",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                }}
                            >
                                {book.author}
                            </Typography>
                        </Box>
                    </Card>
                ))}
            </Box>

            {/* Dots */}
            <Box sx={{ display: "flex", gap: 1, mt: 4 }}>
                {books.map((_, index) => (
                    <Box
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        sx={{
                            width: currentIndex === index ? (isMobile ? 16 : 28) : (isMobile ? 8 : 10),
                            height: isMobile ? 8 : 10,
                            borderRadius: 2,
                            bgcolor: currentIndex === index ? "primary.main" : "grey.400",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
}
