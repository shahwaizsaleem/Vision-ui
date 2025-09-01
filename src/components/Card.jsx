import * as React from "react";
import { Card as MuiCard, CardContent, Typography, Box } from "@mui/material";
import WalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LanguageIcon from "@mui/icons-material/Language";
import NotesIcon from "@mui/icons-material/TextSnippet";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Card() {
  const stats = [
    {
      label: "Today's Money",
      value: "$53,000",
      change: "+55%",
      changeColor: "success.main",
      icon: <WalletIcon sx={{ fontSize: 32 }} />,
      highlight: true,
    },
    {
      label: "Today's Users",
      value: "2,300",
      change: "+5%",
      changeColor: "success.main",
      icon: <LanguageIcon sx={{ fontSize: 32 }} />,
    },
    {
      label: "New Clients",
      value: "+3,052",
      change: "-14%",
      changeColor: "error.main",
      icon: <NotesIcon sx={{ fontSize: 32 }} />,
    },
    {
      label: "Total Sales",
      value: "$173,000",
      change: "+8%",
      changeColor: "success.main",
      icon: <ShoppingCartIcon sx={{ fontSize: 32 }} />,
    },
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
        gap: 3,
        p: 2,
      }}
    >
      {stats.map((stat, index) => (
        <MuiCard
          key={index}
          sx={{
            bgcolor: "#0d1f43",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 2,
            borderRadius: 2,
            minHeight: 100,
            boxShadow: stat.highlight ? "0 0 12px rgba(0,117,255,0.7)" : "none",
          }}
        >
          <CardContent sx={{ p: 0 }}>
            <Typography variant="body2" sx={{ color: "#A0AEC0" }}>
              {stat.label}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "white", mr: 1 }}>
                {stat.value}
              </Typography>
              <Typography sx={{ color: stat.changeColor, fontSize: "0.9rem" }}>
                {stat.change}
              </Typography>
            </Box>
          </CardContent>

          <Box
            sx={{
              bgcolor: "#0075ff",
              p: 1,
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              minWidth: 40,
              justifyContent: "center",
            }}
          >
            {stat.icon}
          </Box>
        </MuiCard>
      ))}
    </Box>
  );
}
