import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Grid,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    Collapse,
    Box,
    useTheme,
    useMediaQuery,
    Divider,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import image from "../asstes/image.png";

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const [servicesAnchor, setServicesAnchor] = useState(null);
    const [projectsAnchor, setProjectsAnchor] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

    return (
        <>
            {/* ================= APP BAR ================= */}
            <AppBar position="static" sx={{ background: "#ebedeb", boxShadow: "none" }}>
                <Toolbar sx={{ height: 100, px: 3 }}>
                    <Grid container alignItems="center">
                        {/* Logo */}
                        <Grid item xs={6} md={3}>
                            <img src={image} alt="logo" style={{ height: 60 }} />
                        </Grid>

                        {/* Desktop Menu */}
                        {!isMobile && (
                            <Grid
                                item
                                md={7}
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                    gap: 2,
                                }}
                            >
                                <NavButton label="About Us" />

                                <DropdownButton
                                    label="Services"
                                    anchor={servicesAnchor}
                                    setAnchor={setServicesAnchor}
                                    items={["Interior Design", "Construction", "Renovation"]}
                                />

                                <DropdownButton
                                    label="Projects"
                                    anchor={projectsAnchor}
                                    setAnchor={setProjectsAnchor}
                                    items={["Residential", "Commercial", "Ongoing"]}
                                />

                                <NavButton label="Cost Calculation" />
                                <NavButton label="Gallery" />
                                <NavButton label="Blog" />
                            </Grid>
                        )}

                        {/* CTA / Hamburger */}
                        <Grid item xs={6} md={2} textAlign="right">
                            {isMobile ? (
                                <IconButton
                                    onClick={() => setDrawerOpen(true)}
                                    sx={{
                                        backgroundColor: "#1976d2",
                                        color: "#fff",
                                        "&:hover": { backgroundColor: "#1565c0" },
                                    }}
                                >
                                    <MenuIcon />
                                </IconButton>
                            ) : (
                                <Button
                                    sx={{
                                        textTransform: "none",
                                        fontWeight: 600,
                                        fontSize: 18,
                                        px: 3,
                                        py: 1.2,
                                        borderRadius: "30px",
                                        color: "#fff",
                                        background: "#303940",
                                        display: "flex",
                                        alignItems: 'flex-end',
                                        gap: 1,
                                        boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
                                    }}
                                >
                                    Get A Quote
                                    <ArrowForwardIcon />
                                </Button>
                            )}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

            {/* ================= MOBILE DRAWER ================= */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <Box
                    sx={{
                        width: 300,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    {/* Drawer Header */}
                    <Box
                        sx={{
                            px: 2,
                            py: 2,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            borderBottom: "1px solid #e0e0e0",
                        }}
                    >
                        <img src={image} alt="logo" style={{ height: 40 }} />
                        <IconButton onClick={() => setDrawerOpen(false)}>
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    {/* Drawer Menu */}
                    <List sx={{ flexGrow: 1 }}>
                        <DrawerItem label="About Us" />

                        {/* Services */}
                        <ListItemButton
                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        >
                            <ListItemText
                                primary="Services"
                                primaryTypographyProps={{ fontWeight: 600 }}
                            />
                            {mobileServicesOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </ListItemButton>

                        <Collapse in={mobileServicesOpen}>
                            <List disablePadding>
                                {["Interior Design", "Construction", "Renovation"].map((item) => (
                                    <DrawerSubItem key={item} label={item} />
                                ))}
                            </List>
                        </Collapse>

                        {/* Projects */}
                        <ListItemButton
                            onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                        >
                            <ListItemText
                                primary="Projects"
                                primaryTypographyProps={{ fontWeight: 600 }}
                            />
                            {mobileProjectsOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </ListItemButton>

                        <Collapse in={mobileProjectsOpen}>
                            <List disablePadding>
                                {["Residential", "Commercial", "Ongoing"].map((item) => (
                                    <DrawerSubItem key={item} label={item} />
                                ))}
                            </List>
                        </Collapse>

                        <DrawerItem label="Cost Calculation" />
                        <DrawerItem label="Gallery" />
                        <DrawerItem label="Blog" />
                        <DrawerItem label="Contact Us" />
                    </List>

                    <Divider />

                    {/* Mobile CTA */}
                    <Box sx={{ p: 2 }}>
                        <Button
                            fullWidth
                            sx={{
                                textTransform: "none",
                                fontWeight: 600,
                                fontSize: 16,
                                py: 1.2,
                                borderRadius: "30px",
                                color: "#fff",
                                background: "#303940",
                            }}
                        >
                            Get A Quote
                        </Button>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
};

/* ================= REUSABLE COMPONENTS ================= */

const NavButton = ({ label }) => (
    <Button
        sx={{
            textTransform: "none",
            color: "#000",
            fontWeight: 600,
            fontSize: 16,
            "&:hover": { color: "#1976d2" },
        }}
    >
        {label}
    </Button>
);

const DropdownButton = ({ label, anchor, setAnchor, items }) => {
    const open = Boolean(anchor);

    return (
        <>
            <Button
                onClick={(e) => setAnchor(e.currentTarget)}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                    textTransform: "none",
                    color: "#000",
                    fontWeight: 600,
                    fontSize: 16,
                }}
            >
                {label}
            </Button>

            <Menu anchorEl={anchor} open={open} onClose={() => setAnchor(null)}>
                {items.map((item) => (
                    <MenuItem key={item} onClick={() => setAnchor(null)}>
                        {item}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};

const DrawerItem = ({ label }) => (
    <ListItemButton>
        <ListItemText primary={label} />
    </ListItemButton>
);

const DrawerSubItem = ({ label }) => (
    <ListItemButton sx={{ pl: 4 }}>
        <ListItemText primary={label} />
    </ListItemButton>
);

export default Header;
