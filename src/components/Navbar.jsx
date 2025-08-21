import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  IconButton
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationIcon from "@mui/icons-material/Notifications";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        width: { xs: "100%", md: "calc(100% - 260px)" },
        ml: { xs: 0, md: "260px" },
        mt: "10px",
        borderRadius: "8px",
        backgroundColor: scrolled ? "rgba(4, 33, 84, 0.5)" : "#042154",
        border: scrolled ? "1px solid white" : "none",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        boxShadow: scrolled ? "0 8px 20px rgba(255,255,255,0.15)" : "none",
        transition: "all 0.3s ease",
        px: 2,
        height: 52,
        justifyContent: "center",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", minHeight: "unset" }}>
        <Box>
          <Typography variant="caption" sx={{ color: "gray", display: "block", fontSize: "0.75rem" }}>
            Pages / Dashboard
          </Typography>
          <Typography variant="body1" sx={{ color: "white", fontWeight: "bold" }}>
            Dashboard
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
          <Box sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            background: "rgba(255,255,255,0.08)",
            borderRadius: "12px",
            px: 1.5,
            py: 0.3,
            color: "white",
          }}>
            <SearchIcon sx={{ fontSize: "18px", opacity: 0.7 }} />
            <InputBase
              placeholder="Type here..."
              sx={{
                ml: 1,
                color: "white",
                fontSize: "0.85rem",
                width: { xs: "100px", md: "200px" },
              }}
            />
          </Box>

          <IconButton sx={{ color: "#718096", fontSize: "0.8rem" }}>
            <PersonIcon fontSize="small" />
            <Typography sx={{ ml: 0.5, fontSize: "0.85rem", color: "#718096" }}>
              Sign In
            </Typography>
          </IconButton>

          <IconButton sx={{ color: "#718096" }}>
            <SettingsIcon fontSize="small" />
          </IconButton>

          <IconButton sx={{ color: "#718096" }}>
            <NotificationIcon fontSize="small" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
