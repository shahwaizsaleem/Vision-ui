import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  AvatarGroup,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
} from "@mui/material";

import BugReportIcon from "@mui/icons-material/BugReport";
import LaunchIcon from "@mui/icons-material/Launch";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LayersIcon from "@mui/icons-material/Layers";
import PersonIcon from "@mui/icons-material/Person";

export default function Tables() {
  const isSmall = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      <Card
        sx={{
          bgcolor: "#060B28F0",
          color: "white",
          borderRadius: 4,
          mb: 3,
        }}
      >
        <CardContent sx={{ p: isSmall ? 1 : 2 }}>
          <Typography
            variant="h6"
            sx={{ mb: 2, fontSize: isSmall ? 14 : 18 }}
          >
            Projects
          </Typography>
          <TableContainer
            sx={{ width: "100%", maxWidth: "100%", overflowX: "auto" }}
          >
            <Table size="small" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      whiteSpace: "nowrap",
                      fontSize: isSmall ? 10 : 12,
                      color: "white",
                    }}
                  >
                    AUTHOR
                  </TableCell>
                  <TableCell sx={{ fontSize: isSmall ? 10 : 12, color: "white" }}>
                    FUNCTION
                  </TableCell>
                  <TableCell sx={{ fontSize: isSmall ? 10 : 12, color: "white" }}>
                    STATUS
                  </TableCell>
                  <TableCell sx={{ fontSize: isSmall ? 10 : 12, color: "white" }}>
                    EMPLOYED
                  </TableCell>
                  <TableCell sx={{ fontSize: isSmall ? 10 : 12, color: "white" }}>
                    COMPLETION
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[
                  {
                    author: "John Doe",
                    function: "Developer",
                    status: "Active",
                    employed: "Yes",
                    completion: 70,
                    avatar: "https://i.pravatar.cc/40?img=1",
                  },
                  {
                    author: "Jane Smith",
                    function: "Designer",
                    status: "Inactive",
                    employed: "No",
                    completion: 45,
                    avatar: "https://i.pravatar.cc/40?img=2",
                  },
                ].map((row, idx) => (
                  <TableRow key={idx}>
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <Avatar
                          src={row.avatar}
                          alt={row.author}
                          sx={{
                            width: isSmall ? 28 : 40,
                            height: isSmall ? 28 : 40,
                            mr: 1,
                          }}
                        />
                        <Typography sx={{ fontSize: isSmall ? 11 : 13 }}>
                          {row.author}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ fontSize: isSmall ? 11 : 13 }}>
                      {row.function}
                    </TableCell>
                    <TableCell sx={{ fontSize: isSmall ? 11 : 13 }}>
                      {row.status}
                    </TableCell>
                    <TableCell sx={{ fontSize: isSmall ? 11 : 13 }}>
                      {row.employed}
                    </TableCell>
                    <TableCell sx={{ minWidth: 100 }}>
                      <LinearProgress
                        variant="determinate"
                        value={row.completion}
                        sx={{
                          height: 8,
                          borderRadius: 5,
                          bgcolor: "#1A1C3B",
                          "& .MuiLinearProgress-bar": { bgcolor: "#4CAF50" },
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      <Card
        sx={{
          bgcolor: "#060B28F0",
          color: "white",
          borderRadius: 4,
        }}
      >
        <CardContent sx={{ p: isSmall ? 1 : 2 }}>
          <Typography
            variant="h6"
            sx={{ mb: 2, fontSize: isSmall ? 14 : 18 }}
          >
            Orders
          </Typography>
          <TableContainer
            sx={{ width: "100%", maxWidth: "100%", overflowX: "auto" }}
          >
            <Table size="small" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontSize: isSmall ? 10 : 12, color: "white" }}>
                    ORDER ID
                  </TableCell>
                  <TableCell sx={{ fontSize: isSmall ? 10 : 12, color: "white" }}>
                    CUSTOMER
                  </TableCell>
                  <TableCell sx={{ fontSize: isSmall ? 10 : 12, color: "white" }}>
                    STATUS
                  </TableCell>
                  <TableCell sx={{ fontSize: isSmall ? 10 : 12, color: "white" }}>
                    ACTION
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[
                  {
                    id: "#1234",
                    customer: "Alice",
                    status: "Shipped",
                    icon: <ShoppingCartIcon fontSize="small" />,
                  },
                  {
                    id: "#5678",
                    customer: "Bob",
                    status: "Processing",
                    icon: <LayersIcon fontSize="small" />,
                  },
                ].map((order, idx) => (
                  <TableRow key={idx}>
                    <TableCell sx={{ fontSize: isSmall ? 11 : 13 }}>
                      {order.id}
                    </TableCell>
                    <TableCell sx={{ fontSize: isSmall ? 11 : 13 }}>
                      {order.customer}
                    </TableCell>
                    <TableCell sx={{ fontSize: isSmall ? 11 : 13 }}>
                      {order.status}
                    </TableCell>
                    <TableCell>{order.icon}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
}
