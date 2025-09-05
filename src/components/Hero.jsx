import React from 'react';
import background from '../assets/background.png';
import Typography from '@mui/material/Typography';
import { Box, Paper, IconButton, CircularProgress } from "@mui/material";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap", // ✅ allows stacking on small screens
        gap: 2,
        mb: 2,
      }}
      className="px-4"
    >
      {/* Card 1 */}
      <Box
        sx={{
          flex: { xs: "1 1 100%", md: "1 1 100%" }, // ✅ full width on all
          height: { xs: "220px", sm: "260px", md: "344px" },
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "10px",
          p: { xs: 2, md: 3 },
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
        }}
      >
        <Typography sx={{ color: "#a0aec0", mb: 1 }} variant="subtitle2" fontWeight="bold">
          Welcome back,
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: "#fff", fontSize: { xs: "18px", sm: "22px", md: "28px" }, mb: 1 }}
        >
          Mark Johnson
        </Typography>
        <Typography variant="body2" sx={{ color: "#a0aec0" }}>
          Glad to see you again!
        </Typography>
        <Typography variant="body2" sx={{ color: "#a0aec0" }}>
          Ask me anything.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <IconButton sx={{ color: "#718096", fontSize: "0.8rem", display: "flex", alignItems: "center" }}>
            <Typography sx={{ ml: 0.5, fontSize: "0.75rem", color: "#718096" }}>Tap to record</Typography>
            <ArrowRightAltIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* Card 2 */}
      <Paper
        sx={{
          flex: { xs: "1 1 100%", md: "1 1 48%" }, // ✅ full width on mobile, half on desktop
          p: { xs: 2, md: 3 },
          borderRadius: 4,
          backgroundColor: "#051232",
          color: "#fff",
          mt: { xs: 2, md: 1 },
          height: { xs: "220px", sm: "260px", md: "344px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)"
        }}
      >
        <Box>
          <Typography variant="subtitle1" fontWeight="bold">Satisfaction Rate</Typography>
          <Typography variant="body2" sx={{ color: "#a0aec0" }}>From all projects</Typography>
        </Box>

        <Box sx={{ position: "relative", display: "inline-flex", mx: "auto" }}>
          <CircularProgress variant="determinate" value={90} size={100} thickness={4} sx={{ color: "#1976d2" }} />
          <Box sx={{ top: 0, left: 0, bottom: 0, right: 0, position: "absolute", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <InsertEmoticonIcon sx={{ fontSize: { xs: 28, md: 40 }, color: "#0075ff" }} />
          </Box>
        </Box>

        <Box sx={{ p: 1.5, borderRadius: 3, display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#060C29" }}>
          <Typography variant="caption">0%</Typography>
          <Box sx={{ textAlign: "center", minWidth: "60px" }}>
            <Typography variant="h6" fontWeight="bold" color="white">95%</Typography>
            <Typography variant="caption" sx={{ color: "#a0aec0" }}>Based on likes</Typography>
          </Box>
          <Typography variant="caption">100%</Typography>
        </Box>
      </Paper>

      {/* Card 3 */}
      <Box
        sx={{
          flex: { xs: "1 1 100%", md: "1 1 48%" }, // ✅ responsive
          height: { xs: "260px", sm: "280px", md: "344px" },
          background: "linear-gradient(to bottom, #060B28BD, #0E153AB5)",
          borderRadius: "16px",
          p: { xs: 2, md: 3 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          color: "#fff",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
          mt: { xs: 2, md: 1 }
        }}
      >
        {/* Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="subtitle1" fontWeight="bold">Referral Tracking</Typography>
          <IconButton sx={{ color: "#fff" }}><MoreHorizIcon /></IconButton>
        </Box>

        {/* Content */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexGrow: 1,  }}>
          {/* Left stats */}
          <Box>
            <Box sx={{ mb: 2, backgroundColor: "#060C29", p: 2, borderRadius: "12px" }}>
              <Typography variant="caption" sx={{ color: "#A0AEC0" }}>Invited</Typography>
              <Typography variant="subtitle1" fontWeight="bold" color="#fff">145 people</Typography>
            </Box>
            <Box sx={{ backgroundColor: "#060C29", p: 2, borderRadius: "12px" }}>
              <Typography variant="caption" sx={{ color: "#A0AEC0" }}>Bonus</Typography>
              <Typography variant="subtitle1" fontWeight="bold" color="#fff">1,465</Typography>
            </Box>
          </Box>

          {/* Right circular progress */}
          <Box sx={{ position: "relative", display: "inline-flex" }}>
            <CircularProgress variant="determinate" value={75} size={90} thickness={5} sx={{ color: "#00ffcc" }} />
            <Box
              sx={{
                top: 0, left: 0, bottom: 0, right: 0,
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Typography variant="caption" sx={{ color: "#fff" }}>Safety</Typography>
              <Typography variant="h6" fontWeight="bold" color="#fff">9.3</Typography>
              <Typography variant="caption" fontWeight="bold" sx={{ color: "#fff" }}>Total Score</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
