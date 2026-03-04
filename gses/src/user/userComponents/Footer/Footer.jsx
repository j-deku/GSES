import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Link as MUILink,
  IconButton,
  Divider,
  Fab,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link } from "react-router-dom";
import process from "process";

const gold = "#D4AF37";
const wine = "#4B0F1C";
const white = "#fff";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);
  const AUTH = import.meta.env.VITE_US_AUTH;
  const AUTH_LINK_TEXT = import.meta.env.VITE_AUTH_LINK_TEXT;
  const AUTH_LK = import.meta.env.VITE_AUTH_LINK1;
  const PATH = import.meta.env.VITE_AUTH_PATH;

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#1a0f0f",
        background: `linear-gradient(180deg, #1a0f0f 0%, #323232 100%)`,
        color: "#d9d9d9",
        px: { xs: 3, md: 10 },
        py: 10,
        mt: 10,
        overflow: "hidden",
      }}
      component="footer"
    >
      {/* Glow behind social icons */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "10%",
          width: "200px",
          height: "200px",
          background: `radial-gradient(circle, ${gold}40 0%, transparent 70%)`,
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />

      {/* Footer Grid */}
      <Grid container spacing={5} sx={{ position: "relative", zIndex: 1 }}>
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {/* Logo */}
            <Typography
              variant="h5"
              component={Link}
              to="/"
              sx={{
                color: gold,
                fontWeight: "bold",
                textDecoration: "none",
                letterSpacing: 2,
              }}
            >
              GSES
            </Typography>
            <Typography>
              Brightening your celebrations with stunning electrical gadget
              designs. Explore our creations and make every moment special.
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              {[
                {
                  href: "https://facebook.com",
                  icon: <FacebookIcon />,
                },
                {
                  href: "https://wa.me/+233544684595/",
                  icon: <WhatsAppIcon />,
                },
                {
                  href: "https://linkedin.com/in/jdeku-jdek",
                  icon: <LinkedInIcon />,
                },
              ].map((item, i) => (
                <IconButton
                  key={i}
                  component="a"
                  href={item.href}
                  target="_blank"
                  sx={{
                    color: gold,
                    transition: "0.3s",
                    "&:hover": {
                      color: white,
                      transform: "scale(1.2)",
                      filter: "drop-shadow(0 0 10px #D4AF37)",
                    },
                  }}
                >
                  {item.icon}
                </IconButton>
              ))}
            </Box>
          </Box>
        </Grid>

        {/* Center Section */}
        <Grid item xs={6} md={3}>
          <Typography variant="h6" color={white} gutterBottom>
            COMPANY
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            <MUILink
              href="/"
              underline="none"
              sx={{ color: "#d9d9d9", "&:hover": { color: gold } }}
            >
              Home
            </MUILink>
            <MUILink
              href="/aboutUs"
              underline="none"
              sx={{ color: "#d9d9d9", "&:hover": { color: gold } }}
            >
              About Us
            </MUILink>
            <MUILink
              href="/deliveryInfo"
              underline="none"
              sx={{ color: "#d9d9d9", "&:hover": { color: gold } }}
            >
              Delivery
            </MUILink>
            <MUILink
              href="/privacy-policy"
              underline="none"
              sx={{ color: "#d9d9d9", "&:hover": { color: gold } }}
            >
              Privacy
            </MUILink>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid item xs={6} md={3}>
          <Typography variant="h6" color={white} gutterBottom>
            GET IN TOUCH
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            <MUILink
              href="tel:+233246062758"
              underline="none"
              sx={{ color: "#d9d9d9", "&:hover": { color: gold } }}
            >
              🔗 +233-246-062-758
            </MUILink>
            <MUILink
              href="mailto:jdeku573@gmail.com"
              underline="none"
              sx={{ color: "#d9d9d9", "&:hover": { color: gold } }}
            >
              🔗 jdeku573@gmail.com
            </MUILink>
            <MUILink
              href="sms:+233246062758"
              underline="none"
              sx={{ color: "#d9d9d9", "&:hover": { color: gold } }}
            >
              🔗 Chat via SMS
            </MUILink>
            <MUILink
            href={PATH}
            underline="none"
            sx={{color:"#d9d9d9", "&:hover": { color: gold }}}
            >
              {AUTH_LINK_TEXT}
            </MUILink>
          </Box>
        </Grid>
      </Grid>

      {/* Divider */}
      <Divider
        sx={{ my: 5, bgcolor: "gray", position: "relative", zIndex: 1 }}
      />

      {/* Copyright */}
      <Typography
        textAlign="center"
        sx={{ color: "#d9d9d9", position: "relative", zIndex: 1 }}
      >
        &copy; {new Date().getFullYear()} GSES. All Rights Reserved
      </Typography>

      {/* Scroll Up Button */}
      {showScroll && (
        <Fab
          color="secondary"
          size="small"
          onClick={scrollTop}
          sx={{
            position: "fixed",
            bottom: 100,
            right: 40,
            bgcolor: gold,
            color: wine,
            "&:hover": { bgcolor: white, color: wine, transform: "scale(1.1)" },
            zIndex: 1000,
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      )}
    </Box>
  );
};

export default Footer;
