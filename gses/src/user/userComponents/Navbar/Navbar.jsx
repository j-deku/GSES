/* eslint-disable  */
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const wine = "#4B0F1C";
const gold = "#D4AF37";
const white = "#fff";

const Navbar = () => {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "Contacts", path: "#contactUs" },
    { label: "About", path: "/aboutUs" },
  ];

  const url = "http://localhost:5000";

  useEffect(() => {
    const profile = async () => {
      try {
        const response = await axios.get(`${url}/api/user/me`, {
          withCredentials: true,
        });

        if (response.data.user) {
          setUser(response.data.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        setUser(null);
      }
    };

    profile();
  }, []);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 2,
          px: { xs: 3, md: 10 },
          position: "sticky",
          top: 0,
          zIndex: 1000,
          bgcolor: wine,
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        }}
      >
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

        {/* Desktop Menu */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 4,
            alignItems: "center",
          }}
        >
          {navItems.map((item, i) => (
            <Typography
              key={i}
              component={item.path.startsWith("#") ? "a" : Link}
              to={item.path.startsWith("#") ? undefined : item.path}
              href={item.path.startsWith("#") ? item.path : undefined}
              sx={{
                color: location.pathname === item.path ? gold : white,
                textDecoration: "none",
                fontWeight: 500,
                "&:hover": { color: gold, borderBottom: `2px solid ${gold}` },
                transition: "all 0.3s ease",
              }}
            >
              {item.label}
            </Typography>
          ))}
        </Box>

        {/* Desktop CTA */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          {user?.name ? (
            <div>{user.name}</div>
          ) : (
            <Button
              onClick={() => navigate("/auth")}
              variant="contained"
              sx={{
                background: `linear-gradient(180deg, rgba(102,17,13,0.94), rgba(189,92,48,0.94))`,
                borderRadius: 2,
                px: 3,
                color: white,
                fontWeight: "bold",
                textTransform: "none",
                "&:hover": { opacity: 0.9 },
              }}
            >
              Sign In
            </Button>
          )}
        </Box>

        {/* Mobile Hamburger */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton onClick={toggleDrawer(true)} sx={{ color: white }}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            bgcolor: wine,
            height: "100%",
            color: white,
            display: "flex",
            flexDirection: "column",
            p: 2,
          }}
          role="presentation"
        >
          <List sx={{ flexGrow: 1 }}>
            {navItems.map((item, i) => (
              <ListItem
                button
                key={i}
                component={item.path.startsWith("#") ? "a" : Link}
                to={item.path.startsWith("#") ? undefined : item.path}
                href={item.path.startsWith("#") ? item.path : undefined}
                onClick={toggleDrawer(false)}
              >
                <ListItemText
                  primary={item.label}
                  sx={{
                    color: location.pathname === item.path ? gold : white,
                  }}
                />
              </ListItem>
            ))}
          </List>

          <Divider sx={{ bgcolor: gold, my: 1 }} />

          <Button
            variant="contained"
            sx={{
              background: `linear-gradient(180deg, rgba(102,17,13,0.94), rgba(189,92,48,0.94))`,
              borderRadius: 2,
              px: 3,
              color: white,
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": { opacity: 0.9 },
              mt: 2,
            }}
            onClick={toggleDrawer(false) && (() => navigate("/auth"))}
          >
            Sign In
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
