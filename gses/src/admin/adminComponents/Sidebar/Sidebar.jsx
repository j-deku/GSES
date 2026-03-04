import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Badge,
  Tooltip,
} from "@mui/material";

import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import NotificationsIcon from "@mui/icons-material/Notifications";

const drawerWidth = 240;
const collapsedWidth = 70;

const NavItem = ({ to, icon, label, collapsed }) => {
  return (
    <NavLink to={to} style={{ textDecoration: "none", color: "inherit" }}>
      {({ isActive }) => (
        <Tooltip title={collapsed ? label : ""} placement="right">
          <ListItemButton
            sx={{
              mx: 1,
              borderRadius: 2,
              mb: 1,
              bgcolor: isActive ? "#fff0ed" : "transparent",
              "&:hover": {
                bgcolor: "#f5f5f5",
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>{icon}</ListItemIcon>

            {!collapsed && (
              <ListItemText
                primary={label}
                primaryTypographyProps={{
                  fontWeight: 500,
                }}
              />
            )}
          </ListItemButton>
        </Tooltip>
      )}
    </NavLink>
  );
};

const Sidebar = ({ ordersCount = 0, notificationsCount = 0 }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: collapsed ? collapsedWidth : drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: collapsed ? collapsedWidth : drawerWidth,
          transition: "width 0.3s ease",
          overflowX: "hidden",
          boxSizing: "border-box",
        },
      }}
    >
      {/* Toggle */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
        <IconButton onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <MenuIcon /> : <MenuOpenIcon />}
        </IconButton>
      </Box>

      {/* Menu */}
      <List>
        <NavItem
          to="add"
          icon={<AddBoxIcon />}
          label="Add Items"
          collapsed={collapsed}
        />

        <NavItem
          to="list"
          icon={<ListAltIcon />}
          label="List Items"
          collapsed={collapsed}
        />

        <NavItem
          to="order"
          icon={
            <Badge badgeContent={ordersCount} color="error">
              <LocalShippingIcon />
            </Badge>
          }
          label="Orders"
          collapsed={collapsed}
        />

        <NavItem
          to="notification"
          icon={
            <Badge badgeContent={notificationsCount} color="error">
              <NotificationsIcon />
            </Badge>
          }
          label="Notifications"
          collapsed={collapsed}
        />
      </List>
    </Drawer>
  );
};

export default Sidebar;
