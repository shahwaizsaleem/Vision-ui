import React from "react";
import Chart from "../components/Chart.jsx";
import Card from "../components/Card.jsx";
import Tablets from "../components/Tablets.jsx";
import Hero from "../components/Hero.jsx";
import { Box } from "@mui/material";

export default function Dashboard() {
  return (
    <Box sx={{ width: { xs: "100%", md: "(100% - 260px)" },  p: 2, mt:4, }}  >
      <Card />
      <Hero />
      <Chart />
      <Tablets />
    </Box>
  );
}
