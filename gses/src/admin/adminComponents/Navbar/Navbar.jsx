import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { StoreContext } from "../../../user/context/StoreContext";

const wine = "#4B0F1C";
const gold = "#D4AF37";
const white = "#fff";

const adminNavItems = [
  { label: "Dashboard", path: "/admin/dashboard" },
  { label: "Users", path: "/admin/users" },
  { label: "Orders", path: "/admin/orders" },
  { label: "Products", path: "/admin/products" },
  { label: "Settings", path: "/admin/settings" },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { adminInfo, logout } = useContext(StoreContext); // adminInfo = {name,email}
  const navigate = useNavigate();

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const handleSignOut = () => {
    logout(); // clear auth
    navigate("/admin/login");
  };

  return (
    <>
      {/* Top Navbar */}
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
          to="/admin/dashboard"
          sx={{
            color: gold,
            fontWeight: "bold",
            textDecoration: "none",
            letterSpacing: 2,
          }}
        >
          GSES Admin
        </Typography>

        {/* Desktop Links */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 4,
            alignItems: "center",
          }}
        >
          {adminNavItems.map((item, i) => (
            <Typography
              key={i}
              component={Link}
              to={item.path}
              sx={{
                color: white,
                textDecoration: "none",
                fontWeight: 500,
                "&:hover": { color: gold, borderBottom: `2px solid ${gold}` },
                transition: "all 0.3s ease",
              }}
            >
              {item.label}
            </Typography>
          ))}

          {/* Admin Info & Sign Out */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar sx={{ bgcolor: gold, color: wine, width: 32, height: 32 }}>
              {adminInfo?.name?.[0] || "A"}
            </Avatar>
            <Typography>{adminInfo?.name || "Admin"}</Typography>
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
              }}
              onClick={handleSignOut}
            >
              Sign Out
            </Button>
          </Box>
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
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Admin Menu
          </Typography>
          <Divider sx={{ bgcolor: gold, mb: 2 }} />

          <List>
            {adminNavItems.map((item, idx) => (
              <ListItem
                key={idx}
                component={Link}
                to={item.path}
                onClick={toggleDrawer(false)}
                sx={{
                  "&:hover": { bgcolor: gold, color: wine },
                  borderRadius: 1,
                  mb: 1,
                  px: 2,
                }}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>

          <Divider sx={{ bgcolor: gold, my: 2 }} />

          <Box sx={{ mt: "auto" }}>
            <Typography mb={1}>{adminInfo?.name || "Admin"}</Typography>
            <Button
              variant="contained"
              sx={{
                background: `linear-gradient(180deg, rgba(102,17,13,0.94), rgba(189,92,48,0.94))`,
                borderRadius: 2,
                px: 3,
                color: white,
                fontWeight: "bold",
                textTransform: "none",
                width: "100%",
                "&:hover": { opacity: 0.9 },
              }}
              onClick={handleSignOut}
            >
              Sign Out
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
