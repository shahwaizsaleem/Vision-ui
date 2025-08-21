import React from "react";
import { Card, CardContent, Typography, Box, Grid, LinearProgress } from "@mui/material";
import ReactApexChart from "react-apexcharts";
import WalletIcon from '@mui/icons-material/AccountBalanceWallet';
import RocketIcon from '@mui/icons-material/RocketLaunch';
import CartIcon from '@mui/icons-material/ShoppingCart';
import ManIcon from '@mui/icons-material/Handyman';

const Chart = () => {
  const areaOptions = {
    chart: { type: "area", toolbar: { show: false }, zoom: { enabled: false } },
    dataLabels: { enabled: false },
    stroke: { curve: "smooth", width: 3 },
    grid: { borderColor: "rgba(255,255,255,0.1)", strokeDashArray: 4 },
    xaxis: {
      categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
      labels: { style: { colors: "#fff" } }
    },
    yaxis: { labels: { style: { colors: "#fff" } } },
    colors: ["#025dcf", "#29ccf3"],
    fill: {
      type: "gradient",
      gradient: { shadeIntensity: 1, opacityFrom: 0.6, opacityTo: 0.1, stops: [0, 90, 100] }
    },
    legend: { show: false },
    tooltip: { theme: "dark" },
  };

  const areaSeries = [
    { name: "Sales 1", data: [500,200,220,300,400,500,420,380,350,300,450,480] },
    { name: "Sales 2", data: [450,180,200,290,350,400,380,350,300,280,320,340] },
  ];

  const barOptions = {
    chart: { type: "bar", toolbar: { show: false } },
    plotOptions: { bar: { columnWidth: "20%", borderRadius: 6, distributed: true } },
    dataLabels: { enabled: false },
    xaxis: {
      categories: Array(10).fill(""),
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false }
    },
    yaxis: { labels: { style: { colors: "#fff" } }, axisBorder: { show: false } },
    grid: { borderColor: "rgba(255,255,255,0.1)", strokeDashArray: 4 },
    colors: ["#ffffff"],
    tooltip: { enabled: false },
    legend: { show: false },
  };

  const barSeries = [
    { name: "Active Users", data: [300, 220, 100, 280, 500, 380, 450, 320, 250, 200] }
  ];

  const iconOption = [
    { icon: <WalletIcon sx={{ fontSize: 30, backgroundColor:"#0075FF", p:"3px", borderRadius:"6px"}} />, label: "Users", value: "32,984", progress: 80, barColors: ["#0075FF", "#2D2E5F"] },
    { icon: <RocketIcon sx={{ fontSize: 30, backgroundColor:"#0075FF", p:"3px", borderRadius:"6px"}} />, label: "Clicks", value: "2,42m", progress: 90, barColors: ["#0075FF", "#2D2E5F"] },
    { icon: <CartIcon sx={{ fontSize: 30, backgroundColor:"#0075FF", p:"3px", borderRadius:"6px"}} />, label: "Sales", value: "2,400$", progress: 40, barColors: ["#0075FF", "#2D2E5F"] },
    { icon: <ManIcon sx={{ fontSize: 30, backgroundColor:"#0075FF", p:"3px", borderRadius:"6px"}} />, label: "Items", value: "320", progress: 60, barColors: ["#0075FF", "#2D2E5F"] }
  ];

  return (
    <Box sx={{ width: "100%", mt: 3, p: 2, ml:-2 }}>
      <Grid container spacing={2} alignItems="stretch">
        
        {/* First chart - 60% */}
        <Grid item xs={12} md={7}>
          <Card sx={{
            backgroundColor: "#06275f",
            borderRadius: "16px",
            color: "#fff",
            height: "100%",
            display: "flex",
            width:1000,
            flexDirection: "column",
            boxShadow: "0 4px 20px rgba(0,0,0,0.5)"
          }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Sales overview
              </Typography>
              <Typography variant="body2" sx={{ color: "#4ade80", mb: 2 }}>
                (+5) more <span style={{ color: "#A0AEC0" }}>in 2021</span>
              </Typography>
              <ReactApexChart options={areaOptions} series={areaSeries} type="area" height={300} />
            </CardContent>
          </Card>
        </Grid>

        {/* Second chart - 40% */}
        <Grid item xs={12} md={5}>
          <Card sx={{
            backgroundColor:"#061e45",
            borderRadius: "16px",
            color: "#fff",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 4px 20px rgba(0,0,0,0.5)"
          }}>
            <CardContent>
              <ReactApexChart options={barOptions} series={barSeries} type="bar" height={180} />
              <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
                Active Users
              </Typography>
              <Typography variant="body2" sx={{ color: "#22c55e", mb: 2 }}>
                (+23) <span style={{color:"#A0AEC0"}}>than last week</span>
              </Typography>
              <Grid container spacing={4}>
                {iconOption.map((item, index) => (
                  <Grid item xs={6} key={index}>
                    <Box sx={{ textAlign:"center" }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 5, mt: 2, justifyContent:"center" }}>
                        {item.icon}
                        <Typography variant="body2" sx={{ color: "#A0AEC0", fontWeight: "bold" }}>
                          {item.label}
                        </Typography>
                      </Box>
                      <Typography variant="h6">{item.value}</Typography>
                      <Box sx={{ mt:1 }}>
                        <LinearProgress
                          variant="determinate"
                          value={item.progress}
                          sx={{
                            height: 6,
                            borderRadius: 100,
                            backgroundColor: item.barColors[1],
                            "& .MuiLinearProgress-bar": { backgroundColor: item.barColors[0] }
                          }}
                        />
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Chart;
