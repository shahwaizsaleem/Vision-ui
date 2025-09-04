import React, { useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  Button,
  IconButton,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Home";
import TableChartIcon from "@mui/icons-material/TableChart";
import ReceiptIcon from "@mui/icons-material/Receipt";
import LanguageIcon from "@mui/icons-material/Language";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";   // 🔹 for desktop toggle button
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SDimg from '../assets/SDimg.png';

const menuItems1 = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
  { text: "Tables", icon: <TableChartIcon />, path: "/tables" },
  { text: "Billing", icon: <ReceiptIcon />, path: "/billing" },
  // { text: "RTL", icon: <LanguageIcon />, path: "/rtl" },
];

const menuItems2 = [
  { text: "Profile", icon: <PersonIcon />, path: "/profile" },
  { text: "Sign In", icon: <LoginIcon />, path: "/signin" },
  { text: "Sign Up", icon: <AppRegistrationIcon />, path: "/signup" },
];

export default function Sidebar({ mobileOpen, setMobileOpen,desktopOpen}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const drawerWidth = 240;

  // 🔹 new state for desktop open/close

  const MenuList = ({ items }) => (
    <List sx={{ p: 0, m: 0 }}>
      {items.map((item) => (
        <ListItemButton
          key={item.text}
          onClick={() => {
            navigate(item.path);
            if (isMobile) setMobileOpen(false);
          }}
          sx={{
            borderRadius: "8px",
            mb: 1,
            "&:hover": { background: "rgba(59,130,246,0.2)" },
          }}
        >
          <ListItemIcon
            sx={{
              color: "#0075ff",
              
              minWidth: 0,
              mr: 1.5,
              justifyContent: "center",
            }}
          >
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItemButton>
      ))}
    </List>
  );

  const drawerContent = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0F123B",
        color: "white",
        p: 1,
        overflowY: "auto",
      }}
    >
      <Box>
        {/* 🔹 Logo + Heading + Close Button */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            mb: 2,
            mt: 1,
            px: 1,
          }}
        >
          {/* Logo + Text */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="subtitle1" sx={{ opacity: 2 }}>
              VISION UI FREE
            </Typography>
          </Box>

          {/* Close button (mobile only) */}
          <IconButton
            onClick={() => setMobileOpen(false)}
            size="small"
            sx={{
              color: "white",
              position: "absolute",
              right: 8,
              display: { xs: "inline-flex", md: "none" },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* 🔹 Divider line */}
        <Box
          sx={{
            height: "1px",
            background: "rgba(255,255,255,0.5)",
            width: "60%",
            mx: "auto",
            mb: 1,
              boxShadow: "0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.6)",
          }}
        />

        <MenuList items={menuItems1} />

        <Typography
          variant="subtitle2"
          sx={{ opacity: 0.6, mt: 1, mb: 1, fontSize: "0.75rem" }}
        >
          ACCOUNT PAGES
        </Typography>

        <MenuList items={menuItems2} />
      </Box>

      {/* 🔹 Bottom Help Card */}
      <Card
        sx={{
          overflow: "hidden",
          position: "relative", 
          color: "white",
          borderRadius: "12px",
          p: 1,
        }}
      >
          <img
    src={SDimg} // replace with your image path
    alt="Background"
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: 0,
    }}
  />
        <CardContent sx={{ textAlign: "center", p: 2,position: "relative",
      zIndex: 1, }}>
          <Typography variant="h6" fontWeight="bold" sx={{ fontSize: "1.1rem" }}>
            Need help?
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Please check our docs
          </Typography>
          <Button
            fullWidth
            variant="contained"
            size="small"
            sx={{
              background: "white",
              color: "#1e3a8a",
              textTransform: "none",
              "&:hover": { background: "#f1f5f9" },
              px: 2,
              minWidth: 120,
            }}
          >
            Documentation
          </Button>
        </CardContent>
      </Card>
    </Box>
  );

  return (
    <>
      {/* 🔹 Desktop Sidebar (toggleable) */}
      <Drawer
        variant="persistent"
        open={desktopOpen}
        sx={{
display: { xs: "none", md: desktopOpen ? "block" : "none" },          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            height: "100vh",
            boxSizing: "border-box",
            borderRight: "none",
            boxShadow: "none",
            overflow: "hidden",
            display: "flex",       // 👈 make sidebar content stretch
            flexDirection: "column",

          },
        }}
      >
        {drawerContent}
      </Drawer>

     

      {/* 🔹 Mobile Sidebar */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            height: "100vh",
            boxSizing: "border-box",
            borderRight: "none",
            boxShadow: "none",
            overflow: "hidden",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
