import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Box,
  Stack,
  Avatar,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import FolderIcon from "@mui/icons-material/Folder";
import Chart from "react-apexcharts";
import PBG from "../assets/PBG.png";
import logo from "../assets/logo.png";
import P1 from "../assets/P1.png";
import P2 from "../assets/P2.png";
import P3 from "../assets/P3.png";

function StatCard({ title, value }) {
  return (
    <Card
      sx={{
        bgcolor: "#060B28F0",
        borderRadius: 2,
        boxShadow: "0 6px 18px rgba(2,6,23,0.6)",
        width: "100%",
      }}
    >
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="h5" sx={{ mt: 1, fontWeight: 700 }}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}

const projects = [
  {
    title: "Modern",
    desc: "As Uber works through a huge amount of internal management turmoil.",
    img: P1,
  },
  {
    title: "Scandinavian",
    desc: "Music is something that every person has his or her own specific opinion about.",
    img: P2,
  },
  {
    title: "Minimalist",
    desc: "Different people have different taste, and various types of music.",
    img: P3,
  },
];

export default function Profile() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabList = ["overview", "teams", "projects"];
  const loadChart = {
    series: [68],
    options: {
      chart: { type: "radialBar", sparkline: { enabled: true } },
      plotOptions: {
        radialBar: {
          hollow: { size: "65%" },
          track: { background: "#1e2a47" },
          dataLabels: {
            name: { show: false },
            value: {
              fontSize: "20px",
              fontWeight: "bold",
              color: "#fff",
              offsetY: 5,
              formatter: (val) => `${val}%`,
            },
          },
        },
      },
      colors: ["#00E396"],
    },
  };

  const sparklineOptions = {
    chart: { type: "line", sparkline: { enabled: true } },
    stroke: { curve: "smooth", width: 2 },
    colors: ["#00E396"],
    tooltip: { enabled: false },
  };

  const efficiencySeries = [{ data: [10, 15, 20, 18, 22, 19, 20] }];
  const weekSeries = [{ data: [500, 800, 1200, 1342] }];

  return (
    <>
      {/* Profile Header */}
      <Card
        sx={{
          mt: 5,
          width: "100%",
          minHeight: { xs: "100px", md: "129px" },
          borderRadius: "20px",
          p: { xs: 2, md: 3 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "space-between",
          gap: 2,
          background: "#060B28F0",
        }}
      >
        {/* Left Section */}
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar
            src={logo}
            alt="Profile"
            sx={{
              width: { xs: 50, md: 70 },
              height: { xs: 50, md: 70 },
              borderRadius: "16px",
              bgcolor: "#673ab7",
            }}
          />
          <Box>
            <Typography variant="h6" sx={{ color: "white", fontWeight: 600 }}>
              Mark Johnson
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
              mark@simmmple.com
            </Typography>
          </Box>
        </Stack>

        {/* Right Section (Tabs) */}
        <Stack
          direction="row"
          gap={2}
          position="relative"
          width="100%"
          maxWidth={{ xs: "100%", md: "450px" }}
          justifyContent="space-around"
          mt={{ xs: 2, md: 0 }}
        >
          {/* Sliding Highlight */}
          <Box
            sx={{
              position: "absolute",
              top: -4,
              left: `${tabList.indexOf(activeTab) * 33.3}%`,
              width: "30%",
              height: "44px",
              borderRadius: "12px",
              backgroundColor: "#1e88e5",
              transition: "all 0.3s ease",
              zIndex: 0,
            }}
          />

          {/* Tabs */}
          <Button
            onClick={() => setActiveTab("overview")}
            sx={{
              zIndex: 1,
              color: "white",
              textTransform: "uppercase",
              "&:hover": { backgroundColor: "transparent" },
            }}
          >
            Overview
          </Button>

          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ color: "white", cursor: "pointer", zIndex: 1 }}
            onClick={() => setActiveTab("teams")}
          >
            <GroupsIcon fontSize="small" />
            <Typography variant="body2">Teams</Typography>
          </Stack>

          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ color: "white", cursor: "pointer", zIndex: 1 }}
            onClick={() => setActiveTab("projects")}
          >
            <FolderIcon fontSize="small" />
            <Typography variant="body2">Projects</Typography>
          </Stack>
        </Stack>
      </Card>

      {/* Content Section */}
      <Box sx={{ display: "grid", gap: 2, mt: 2 }}>
        {/* Welcome Card */}
        <Card
          sx={{
            borderRadius: 4,
            color: "white",
            width: "100%",
            height: { xs: 200, md: 300 },
            backgroundImage: `url(${PBG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Box>
              <Typography variant="h6">Welcome back!</Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Nice to see you, Mark Johnson!
              </Typography>
            </Box>

            <Button
              component="a"
              
              sx={{ color: "white", alignSelf: "flex-start" }}
            >
              Turn on your car
            </Button>
          </CardContent>
        </Card>

        {/* Car Information Card */}
        <Card
          sx={{
            borderRadius: 4,
            background: "#060B28F0",
            color: "white",
            p: { xs: 2, md: 3 },
          }}
        >
          <Typography variant="h6">Car Informations</Typography>
          <Typography variant="body2">Hello, Mark Johnson! Your Car is ready.</Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              mt: 3,
              gap: 2,
            }}
          >
            {/* Radial Chart */}
            <Box sx={{ width: { xs: "100%", md: 180 }, textAlign: "center" }}>
              <Chart
                options={loadChart.options}
                series={loadChart.series}
                type="radialBar"
                height={180}
              />
              <Typography variant="caption" sx={{ display: "block", mt: 1 }}>
                0h 58 min <br /> Time to full charge
              </Typography>
            </Box>

            {/* Right Stats */}
            <Grid container spacing={2} sx={{ flex: 1 }}>
              <Grid item xs={12} sm={6}>
                <Box sx={{ bgcolor: "#0F123B", p: 2, borderRadius: 2, height: "100%" }}>
                  <Typography variant="body2" color="white">
                    Battery Health
                  </Typography>
                  <Typography variant="h6" fontWeight={700}>
                    76%
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box sx={{ bgcolor: "#0F123B", p: 2, borderRadius: 2, height: "100%" }}>
                  <Typography variant="body2" color="white">
                    Efficiency
                  </Typography>
                  <Typography variant="h6" fontWeight={700}>
                    +20%
                  </Typography>
                  <Chart
                    options={sparklineOptions}
                    series={efficiencySeries}
                    type="line"
                    height={50}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box sx={{ bgcolor: "#0F123B", p: 2, borderRadius: 2, height: "100%" }}>
                  <Typography variant="body2" color="white">
                    Consumption
                  </Typography>
                  <Typography variant="h6" fontWeight={700}>
                    163W/km
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box sx={{ bgcolor: "#0F123B", p: 2, borderRadius: 2, height: "100%" }}>
                  <Typography variant="body2" color="white">
                    This Week
                  </Typography>
                  <Typography variant="h6" fontWeight={700}>
                    1.342km
                  </Typography>
                  <Chart
                    options={{ ...sparklineOptions, colors: ["#008FFB"] }}
                    series={weekSeries}
                    type="line"
                    height={50}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Card>

        {/* Profile Information */}
        <Card sx={{ bgcolor: "#060B28F0", color: "white", borderRadius: 4 }}>
          <CardContent>
            <Typography variant="h6">Profile Information</Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Hi, I’m Mark Johnson. Decisions: If you can’t decide, the answer is no. If two equally
              difficult paths, choose the one more painful in the short term (pain avoidance is
              creating an illusion of equality).
            </Typography>

            <Typography>
              <b>Full Name:</b> Mark Johnson
            </Typography>
            <Typography>
              <b>Mobile:</b> (44) 123 1234 123
            </Typography>
            <Typography>
              <b>Email:</b> mark@simmple.com
            </Typography>
            <Typography>
              <b>Location:</b> United States
            </Typography>
            <Typography>
              <b>Social Media:</b> 🌐 🐦 📸
            </Typography>
          </CardContent>
        </Card>

        {/* Platform Settings */}
        <Card sx={{ bgcolor: "#060B28F0", color: "white", borderRadius: 4 }}>
          <CardContent>
            <Typography variant="h6">Platform Settings</Typography>
            <Typography variant="subtitle2" sx={{ mt: 2 }}>
              Account
            </Typography>
            <FormGroup>
              <FormControlLabel control={<Switch />} label="Email me when someone follows me" />
              <FormControlLabel control={<Switch />} label="Email me when someone answers to me" />
              <FormControlLabel control={<Switch />} label="Email me when someone mentions me" />
            </FormGroup>

            <Typography variant="subtitle2" sx={{ mt: 2 }}>
              Application
            </Typography>
            <FormGroup>
              <FormControlLabel control={<Switch />} label="New launches and projects" />
              <FormControlLabel control={<Switch />} label="Monthly product updates" />
              <FormControlLabel control={<Switch />} label="Subscribe to newsletter" />
              <FormControlLabel control={<Switch />} label="Receive mails weekly" />
            </FormGroup>
          </CardContent>
        </Card>

        {/* Projects Section */}
        <Card sx={{ bgcolor: "#060B28F0", color: "white", borderRadius: 4, }}>
          <CardContent >
            <Typography sx={{marginLeft: { xs: 0, sm: 0, md: "40px" }}} variant="h6">Projects</Typography>
            <Typography sx={{marginLeft: { xs: 0, sm: 0, md: "40px" }}} variant="subtitle2">Architects design houses</Typography>
            <Grid container spacing={4} sx={{ mt: 1 }}>
              {projects.map((p, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    sx={{
                      borderRadius: 3,
                      width: "100%",
                      minHeight: { xs: 220, md: 250 },
                      position: "relative",
                      overflow: "hidden",
                      marginLeft: { xs: 0, sm: 0, md: "40px" },
                    }}
                  >
                    <Box
                      component="img"
                      src={p.img}
                      alt={p.title}
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />

                    <CardContent
                      sx={{
                        position: "relative",
                        zIndex: 1,
                        color: "white",
                        background: "rgba(0,0,0,0.4)",
                        borderRadius: 3,
                        height: "100%",
                      }}
                    >
                      <Typography variant="subtitle1">{p.title}</Typography>
                      <Typography variant="body2" sx={{ mb: 2 }}>
                        {p.desc}
                      </Typography>
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{
                          color: "white",
                          borderColor: "white",
                          "&:hover": { borderColor: "#90caf9", color: "#90caf9" },
                        }}
                      >
                        View All
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
