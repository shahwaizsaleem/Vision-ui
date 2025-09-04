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
        width: { xs: "100%", md: "calc(100%)" }, // Set width to 100% on small screens, and calc on medium and up
        mt: 4, 
      }}
    >
      <Card />
      <Hero />
      <Chart />
      <Tablets />
    </Box>
  );
}