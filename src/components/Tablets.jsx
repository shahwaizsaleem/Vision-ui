import { Box, Card, CardContent, Typography, Avatar, AvatarGroup, LinearProgress, Grid } from "@mui/material";
import XdIcon from '@mui/icons-material/Close'; 
import BugReportIcon from '@mui/icons-material/BugReport';
import LaunchIcon from '@mui/icons-material/Launch';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddTaskIcon from '@mui/icons-material/AddTask';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const projects = [
  { name: "Chakra Vision UI Version", members: ["A", "B", "C"], budget: "$14,000", completion: 60, icon: <XdIcon sx={{ color: "#f24e1e" }} /> },
  { name: "Add Progress Track", members: ["D", "E"], budget: "$3,000", completion: 10, icon: <AddTaskIcon sx={{ color: "#377dff" }} /> },
  { name: "Fix Platform Errors", members: ["F", "G"], budget: "Not set", completion: 100, icon: <BugReportIcon sx={{ color: "#ff4757" }} /> },
  { name: "Launch our Mobile App", members: ["H", "I", "J"], budget: "$20,500", completion: 100, icon: <LaunchIcon sx={{ color: "#2ed573" }} /> },
  { name: "Add the New Pricing Page", members: ["K"], budget: "$500", completion: 25, icon: <ShoppingCartIcon sx={{ color: "#1e90ff" }} /> },
  { name: "Redesign New Online Shop", members: ["M", "N"], budget: "$2,000", completion: 40, icon: <XdIcon sx={{ color: "#e84393" }} /> },
];

const orders = [
  { label: "$2400, Design changes", date: "22 DEC 7:20 PM", icon: <NotificationsIcon sx={{ color: "#377dff" }} /> },
  { label: "New order #1832412", date: "21 DEC 11:00 PM", icon: <ShoppingCartIcon sx={{ color: "#ff4757" }} /> },
  { label: "Server Payments for April", date: "21 DEC 9:34 PM", icon: <CloudUploadIcon sx={{ color: "#1e90ff" }} /> },
  { label: "New card added for order #4395", date: "20 DEC 2:20 AM", icon: <CreditCardIcon sx={{ color: "#ffa502" }} /> },
  { label: "New card added for order #4395", date: "18 DEC 4:54 AM", icon: <CreditCardIcon sx={{ color: "#a29bfe" }} /> },
  { label: "New order #9583120", date: "17 DEC", icon: <XdIcon sx={{ color: "#e84393" }} /> },
];

export default function DashboardCards() {
  return (
    <Box sx={{ p: 4,minHeight: "100vh" }}>
      <Grid container spacing={2}>
        
        {/* Projects Card */}
        <Grid item xs={12}>
    <Card 
      sx={{ 
        width: 1032, 
        height: 500,   // rectangle height
        borderRadius: 3, 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "flex", 
        justifyContent: "center",
        bgcolor: "#061e45", // or use className="rectangle-card",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
      }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>Projects</Typography>
              <Typography variant="body2" sx={{ color: "limegreen", mb: 2 }}>✔ 30 done this month</Typography>

              <Box sx={{ display: "flex", justifyContent: "space-between", px: 1, color: "#718096", fontSize: 14, }}>
                <Typography>COMPANIES</Typography>
                <Typography>MEMBERS</Typography>
                <Typography>BUDGET</Typography>
                <Typography>COMPLETION</Typography>
              </Box>

              {projects.map((proj, index) => (
                <Box key={index} sx={{ display: "flex", alignItems: "flex", justifyContent: "space-between", mt: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "flex", gap: 1, width: 200 }}>
                    {proj.icon}
                    <Typography sx={{ color: "white" }}>{proj.name}</Typography>
                  </Box>

                  <AvatarGroup max={4} sx={{ justifyContent: "center", width: 50 }}>
                    {proj.members.map((m, i) => (
                      <Avatar key={i}>{m[0]}</Avatar>
                    ))}
                  </AvatarGroup>

                  <Typography sx={{ width: 100, textAlign: "center", color: "white" }}>{proj.budget}</Typography>

                  <Box sx={{ width: 120 }}>
                    <LinearProgress variant="determinate" value={proj.completion} sx={{ height: 6, borderRadius: 5 }} />
                  </Box>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Orders Overview Card */}
        <Grid item xs={6}>
             <Card 
      sx={{ 
        width: 500, 
        height: 500,  // equal width & height -> square
        borderRadius: 3, 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "flex", 
        justifyContent: "space-around",
        bgcolor: "#061e45", // or use className="square-card"
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)" 
      }}
    >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>Orders overview</Typography>
              <Typography variant="body2" sx={{ color: "limegreen", mb: 2 }}>+30% this month</Typography>

              {orders.map((order, index) => (
                <Box key={index} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between",  p: 1, borderRadius: 2, mt: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {order.icon}
                    <Typography sx={{ color: "white" }}>{order.label}</Typography>
                  </Box>
                  <Typography variant="caption" sx={{ color: "#A0AEC0" }}>{order.date}</Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
