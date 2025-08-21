import React from "react";
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
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Home";
import TableChartIcon from "@mui/icons-material/TableChart";
import ReceiptIcon from "@mui/icons-material/Receipt";
import LanguageIcon from "@mui/icons-material/Language";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const menuItems1 = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
  { text: "Tables", icon: <TableChartIcon />, path: "/tables" },
  { text: "Billing", icon: <ReceiptIcon />, path: "/billing" },
  { text: "RTL", icon: <LanguageIcon />, path: "/rtl" },
];

const menuItems2 = [
  { text: "Profile", icon: <PersonIcon />, path: "/profile" },
  { text: "Sign In", icon: <LoginIcon />, path: "/signin" },
  { text: "Sign Up", icon: <AppRegistrationIcon />, path: "/signup" },
];

export default function Sidebar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  // Fixed width on desktop (not slim), same width on mobile drawer
  const drawerWidth = 240;

  const MenuList = ({ items }) => (
    <List sx={{ p: 0, m: 0 }}>
      {items.map((item, i) => (
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
        height: "100vh", // full viewport height
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#042154", // original
        color: "white",
        p: 1,
        overflow: "hidden", // no internal scrollbar
      }}
    >
      <Box>
        {/* Header (no desktop toggle; close only on mobile) */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 1,
          }}
        >
          <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
            VISION UI FREE
          </Typography>

          {/* Close button visible only on mobile drawer */}
          <IconButton
            onClick={() => setMobileOpen(false)}
            size="small"
            sx={{ color: "white", display: { xs: "inline-flex", md: "none" } }}
            aria-label="Close sidebar"
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Menus */}
        <MenuList items={menuItems1} />

        <Typography
          variant="subtitle2"
          sx={{ opacity: 0.6, mt: 1, mb: 1, fontSize: "0.75rem" }}
        >
          ACCOUNT PAGES
        </Typography>

        <MenuList items={menuItems2} />
      </Box>

      {/* Bottom Card */}
      <Card
        sx={{
          background: "linear-gradient(135deg, #1e3a8a, #3b82f6)",
          color: "white",
          borderRadius: "12px",
          p: 1,
        }}
      >
        <CardContent sx={{ textAlign: "center", p: 2 }}>
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
      {/* Mobile hamburger: only on small screens */}
      <IconButton
        sx={{
          position: "fixed",
          top: 16,
          left: 16,
          zIndex: 1300,
          color: "white",
          display: { xs: "inline-flex", md: "none" },
        }}
        onClick={() => setMobileOpen(true)}
        aria-label="Open sidebar"
      >
        <MenuIcon />
      </IconButton>

      {/* Desktop: fixed, permanent, no toggle, full height, no border/divider, no scroll */}
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "none", md: "block" },
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            height: "100vh",
            boxSizing: "border-box",
            borderRight: "none", // remove any divider line
            boxShadow: "none",   // remove paper shadow edge (looks like a divider)
            overflow: "hidden",  // no scrollbar
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Mobile: temporary drawer */}
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
