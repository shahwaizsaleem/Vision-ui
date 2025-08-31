import { 
  Box, Card, CardContent, Typography, Avatar, AvatarGroup, 
  LinearProgress, Table, TableBody, TableCell, 
  TableHead, TableRow, Stack 
} from "@mui/material";

import XdIcon from '@mui/icons-material/Close'; 
import BugReportIcon from '@mui/icons-material/BugReport';
import LaunchIcon from '@mui/icons-material/Launch';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddTaskIcon from '@mui/icons-material/AddTask';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const projects = [
  { name: "Chakra Vision UI Version", members: ["https://i.pravatar.cc/150?img=1","https://i.pravatar.cc/150?img=2","https://i.pravatar.cc/150?img=3"], budget: "$14,000", completion: 60, icon: <XdIcon sx={{ color: "#f24e1e", fontSize: 20 }} /> },
  { name: "Add Progress Track", members: ["https://i.pravatar.cc/150?img=4","https://i.pravatar.cc/150?img=5"], budget: "$3,000", completion: 10, icon: <AddTaskIcon sx={{ color: "#377dff", fontSize: 20 }} /> },
  { name: "Fix Platform Errors", members: ["https://i.pravatar.cc/150?img=6","https://i.pravatar.cc/150?img=7"], budget: "Not set", completion: 100, icon: <BugReportIcon sx={{ color: "#ff4757", fontSize: 20 }} /> },
  { name: "Launch our Mobile App", members: ["https://i.pravatar.cc/150?img=8","https://i.pravatar.cc/150?img=9","https://i.pravatar.cc/150?img=10"], budget: "$20,500", completion: 100, icon: <LaunchIcon sx={{ color: "#2ed573", fontSize: 20 }} /> },
  { name: "Add the New Pricing Page", members: ["https://i.pravatar.cc/150?img=11"], budget: "$500", completion: 25, icon: <ShoppingCartIcon sx={{ color: "#1e90ff", fontSize: 20 }} /> },
  { name: "Redesign New Online Shop", members: ["https://i.pravatar.cc/150?img=12","https://i.pravatar.cc/150?img=13"], budget: "$2,000", completion: 40, icon: <XdIcon sx={{ color: "#e84393", fontSize: 20 }} /> },
];

const orders = [
  { label: "$2400, Design changes", date: "22 DEC 7:20 PM", icon: <NotificationsIcon sx={{ color: "#377dff", fontSize: 20 }} /> },
  { label: "New order #1832412", date: "21 DEC 11:00 PM", icon: <ShoppingCartIcon sx={{ color: "#ff4757", fontSize: 20 }} /> },
  { label: "Server Payments for April", date: "21 DEC 9:34 PM", icon: <CloudUploadIcon sx={{ color: "#1e90ff", fontSize: 20 }} /> },
  { label: "New card added for order #4395", date: "20 DEC 2:20 AM", icon: <CreditCardIcon sx={{ color: "#ffa502", fontSize: 20 }} /> },
  { label: "New card added for order #4395", date: "18 DEC 4:54 AM", icon: <CreditCardIcon sx={{ color: "#a29bfe", fontSize: 20 }} /> },
  { label: "New order #9583120", date: "17 DEC", icon: <XdIcon sx={{ color: "#e84393", fontSize: 20 }} /> },
];

export default function Tablets() {
  return (
    <Box sx={{  minHeight: "50vh",display: "flex", gap: 3,alignItems: "stretch",p: 2 }}>
      
      {/* Projects Card */}
      <Card 
        sx={{ 
          width: "70%",
          height:"400px",
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          bgcolor: "#061e45",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
          mb: 4
        }}
      >
        <CardContent sx={{ overflowX: "auto" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "white", fontSize: { xs: 16, sm: 18 } }}>Projects</Typography>
          <Typography variant="body2" sx={{ color: "limegreen", mb: 2, fontSize: { xs: 12, sm: 14 } }}>✔ 30 done this month</Typography>

          <Box sx={{ width: "100%", overflowX: "auto" }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: "#718096", fontSize: { xs: 10, sm: 12 } }}>COMPANIES</TableCell>
                  <TableCell sx={{ color: "#718096", fontSize: { xs: 10, sm: 12 } }}>MEMBERS</TableCell>
                  <TableCell sx={{ color: "#718096", fontSize: { xs: 10, sm: 12 } }}>BUDGET</TableCell>
                  <TableCell sx={{ color: "#718096", fontSize: { xs: 10, sm: 12 } }}>COMPLETION</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {projects.map((proj, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        {proj.icon}
                        <Typography sx={{ color: "white", fontSize: { xs: 11, sm: 13 } }}>{proj.name}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <AvatarGroup 
                        max={4} 
                        sx={{ "& .MuiAvatar-root": { width: { xs: 20, sm: 24 }, height: { xs: 20, sm: 24 } } }}
                      >
                        {proj.members.map((img, i) => (
                          <Avatar key={i} src={img} />
                        ))}
                      </AvatarGroup>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ color: "white", fontSize: { xs: 11, sm: 13 } }}>{proj.budget}</Typography>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box sx={{ width: "100%", mr: 1 }}>
                          <LinearProgress 
                            variant="determinate" 
                            value={proj.completion} 
                            sx={{ height: 6, borderRadius: 5 }} 
                          />
                        </Box>
                        <Box sx={{ minWidth: 30 }}>
                          <Typography variant="caption" sx={{ color: "#A0AEC0", fontSize: { xs: 10, sm: 12 } }}>
                            {`${proj.completion}%`}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </CardContent>
      </Card>

      {/* Orders Overview Card */}
      <Card 
        sx={{ 
          width: "45%",
          height:"400px",
          borderRadius: 2,
          bgcolor: "#061e45",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
        }}
      >
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "white", fontSize: { xs: 16, sm: 18 } }}>Orders overview</Typography>
          <Typography variant="body2" sx={{ color: "limegreen", mb: 2, fontSize: { xs: 12, sm: 14 } }}>+30% this month</Typography>
          
          <Stack spacing={1} sx={{ mt: 2 }}>
            {orders.map((order, index) => (
              <Stack 
                key={index} 
                direction="row" 
                alignItems="center" 
                justifyContent="space-between" 
                sx={{ 
                  p: { xs: 0.5, sm: 1 }, 
                  borderRadius: 2 
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1}>
                  {order.icon}
                  <Typography sx={{ color: "white", fontSize: { xs: 11, sm: 13 } }}>{order.label}</Typography>
                </Stack>
                <Typography variant="caption" sx={{ color: "#A0AEC0", fontSize: { xs: 10, sm: 12 } }}>{order.date}</Typography>
              </Stack>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
