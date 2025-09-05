import React from "react";
import Chart from "../components/Chart.jsx";
import Card from "../components/Card.jsx";
import Tablets from "../components/Tablets.jsx";
import Hero from "../components/Hero.jsx";
import { Box } from "@mui/material";

export default function Dashboard() {
  return (
  <Box
  sx={{
    width: "100%",
    maxWidth: "99vw", // 🔑 prevents overflow beyond viewport
    mt: 5,
    px: { sm: -1, lg: 4 },
    display: "flex",
    flexDirection: "column",
    gap: { xs: 2, md: 3 },
    ml: { xs: -2, sm: -1 }, // 🔑 avoid pushing too far left
     // 🔑 removes ghost spacing on the right
  }}
>
      {/* Top Card */}
      <Card />

      {/* Hero Section */}
      <Hero />

      {/* Chart (scrollable only on small screens) */}        
      <Chart />
      

      {/* Tablets (scrollable only on small screens) */}        
      <Tablets />
      
    </Box>
  );
}
