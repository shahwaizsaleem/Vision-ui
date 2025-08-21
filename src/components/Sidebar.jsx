import React from "react";
import {
  Drawer,
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Card,
  CardContent,
  Button,
  IconButton,
  Tooltip,
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
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();

  const drawerWidth = open ? 260 : 72;

  const MenuList = ({ items, primary }) => (
    <List>
      {items.map((item, index) => {
        const button = (
          <ListItemButton
            onClick={() => navigate(item.path)}
            sx={{
              borderRadius: "8px",
              mb: 1,
              justifyContent: open ? "initial" : "center",
              background:
                primary && index === 0 && open
                  ? "rgba(59,130,246,0.3)"
                  : "transparent",
              "&:hover": { background: "rgba(59,130,246,0.2)" },
            }}
          >
            <ListItemIcon
              sx={{
                color: primary ? "white" : "#0075ff",
                minWidth: 0,
                mr: open ? 1.5 : 0,
                justifyContent: "center",
              }}
            >
              {item.icon}
            </ListItemIcon>
            {open && <ListItemText primary={item.text} />}
          </ListItemButton>
        );

        return open ? (
          <Box key={item.text}>{button}</Box>
        ) : (
          <Tooltip key={item.text} title={item.text} placement="right">
            <Box>{button}</Box>
          </Tooltip>
        );
      })}
    </List>
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          transition: "width 200ms ease",
          background: "linear-gradient(to bottom, #060B26F0 94%, #1A1F3700 0%)",
          color: "white",
          padding: "0.75rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      }}
    >
      {/* Header + Toggle */}
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: open ? "space-between" : "center",
            mb: 1,
          }}
        >
          {open && (
            <Typography variant="subtitle2" sx={{ opacity: 0.8 }}>
              VISION UI FREE
            </Typography>
          )}
          <IconButton
            onClick={() => setOpen((v) => !v)}
            size="small"
            sx={{ color: "white" }}
            aria-label={open ? "Close sidebar" : "Open sidebar"}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", mb: 1 }} />

        {/* Menu Group 1 */}
        <MenuList items={menuItems1} primary />

        {/* Section label */}
        {open && (
          <Typography
            variant="subtitle2"
            sx={{ opacity: 0.6, mt: 1, mb: 1, fontSize: "0.75rem" }}
          >
            ACCOUNT PAGES
          </Typography>
        )}

        {/* Menu Group 2 */}
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
        <CardContent sx={{ textAlign: "center", p: open ? 2 : 1 }}>
          <Typography variant="h6" fontWeight="bold" sx={{ fontSize: open ? "1.1rem" : "0.9rem" }}>
            Need help?
          </Typography>
          {open && (
            <Typography variant="body2" sx={{ mb: 1 }}>
              Please check our docs
            </Typography>
          )}
          <Button
            fullWidth={open}
            variant="contained"
            size="small"
            sx={{
              mt: open ? 0.5 : 0,
              background: "white",
              color: "#1e3a8a",
              textTransform: "none",
              "&:hover": { background: "#f1f5f9" },
              px: open ? 2 : 1,
              minWidth: open ? 120 : 36,
            }}
          >
            {open ? "Documentation" : "Docs"}
          </Button>
        </CardContent>
      </Card>
    </Drawer>
  );
}
