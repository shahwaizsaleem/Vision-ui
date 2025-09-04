import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Stack,
  LinearProgress,
  Box,
  TableContainer,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import T1 from '../assets/T1.png';
import T2 from '../assets/T2.png';
import T3 from '../assets/T3.png';
import T4 from '../assets/T4.png';
import T5 from '../assets/T5.png';
import T6 from '../assets/T6.png';
import T7 from '../assets/T7.png';
import T8 from '../assets/T8.png';
import T9 from '../assets/T9.png';
import T0 from '../assets/T0.png';

const authors = [
  { name: "Esthera Jackson", email: "esthera@simmple.com", function: "Manager Organization", status: "Online", employed: "14/06/21", image: T1 },
  { name: "Alexa Liras", email: "alexa@simmple.com", function: "Programmer Developer", status: "Offline", employed: "14/06/21", image: T2 },
  { name: "Laurent Michael", email: "laurent@simmple.com", function: "Executive Projects", status: "Online", employed: "14/06/21", image: T3 },
  { name: "John Doe", email: "john@simmple.com", function: "Designer UI/UX", status: "Offline", employed: "10/07/22", image: T4 },
  { name: "Mark Wilson", email: "mark@simmmple.com", function: "Team Lead", status: "Online", employed: "22/01/23", image: T5 },
];

const projects = [
  { name: "Chakra Soft UI Version", budget: "$14,000", completion: 60, status: "working", icon: <img src={T6}  alt="chakra" style={{ width: 20, height: 20, borderRadius: "50%" }} /> },
  { name: "Add Progress Track", budget: "$3,000", completion: 10, status: "complete", icon: <img src={T7}  alt="progress" style={{ width: 20, height: 20, borderRadius: "50%" }} /> },
  { name: "Fix Platform Errors", budget: "Not set", completion: 100, status: "Done", icon: <img src={T8} alt="errors" style={{ width: 20, height: 20, borderRadius: "50%" }} /> },
  { name: "Launch our Mobile App", budget: "$32,000", completion: 100, status: "Done", icon: <img src={T9} alt="errors" style={{ width: 20, height: 20, borderRadius: "50%" }} /> },
  { name: "Add the New Pricing Page", budget: "$400", completion: 25, status: "Working", icon: <img src={T0} alt="errors" style={{ width: 20, height: 20, borderRadius: "50%" }} /> },
];

export default function Tables() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <section>
      {/* Authors Card */}
      <Box sx={{ mb: 4, mt: 10 }}>
        <Card
          sx={{
            width: "100%",
            borderRadius: 2,
            bgcolor: "#0F123B",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
          }}
        >
          <CardContent sx={{ p: isSmall ? 1 : 3 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "white", mb: 2, fontSize: isSmall ? 16 : 20 }}>
              Authors Table
            </Typography>

            <TableContainer sx={{ maxHeight: isSmall ? 300 : 400, overflowX: "auto"  }}>
              <Table size="small" stickyHeader>
                <TableHead>
                  <TableRow >
                    <TableCell sx={{ color: "#718096", fontSize: isSmall ? 10 : 12,backgroundColor: "#0F123B" }}>AUTHOR</TableCell>
                    <TableCell sx={{ color: "#718096", fontSize: isSmall ? 10 : 12,backgroundColor: "#0F123B" }}>FUNCTION</TableCell>
                    <TableCell sx={{ color: "#718096", fontSize: isSmall ? 10 : 12,backgroundColor: "#0F123B" }}>STATUS</TableCell>
                    <TableCell sx={{ color: "#718096", fontSize: isSmall ? 10 : 12,backgroundColor: "#0F123B" }}>EMPLOYED</TableCell>
                    <TableCell sx={{ color: "#718096", fontSize: isSmall ? 10 : 12,backgroundColor: "#0F123B" }}>ACTION</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {authors.map((author, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <img src={author.image} alt={author.name} style={{ width: isSmall ? 30 : 40, height: isSmall ? 30 : 40, borderRadius: "6px" }} />
                          <Box>
                            <Typography sx={{ color: "white", fontSize: isSmall ? 12 : 14 }}>{author.name}</Typography>
                            <Typography sx={{ color: "gray", fontSize: isSmall ? 10 : 12 }}>{author.email}</Typography>
                          </Box>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Typography sx={{ color: "white", fontSize: isSmall ? 11 : 13 }}>{author.function}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          sx={{
                            color: "white",
                            fontSize: isSmall ? 10 : 12,
                            bgcolor: author.status === "Online" ? "green" : "gray",
                            px: 2,
                            py: 0.5,
                            borderRadius: 2,
                            display: "inline-block",
                          }}
                        >
                          {author.status}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={{ color: "white", fontSize: isSmall ? 11 : 13 }}>{author.employed}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography sx={{ color: "#4299E1", fontSize: isSmall ? 11 : 13, cursor: "pointer" }}>Edit</Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Box>

      {/* Projects Card */}
      <Box>
        <Card
          sx={{
            width: "100%",
            borderRadius: 3,
            bgcolor: "#0F123B",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
          }}
        >
          <CardContent sx={{ p: isSmall ? 1 : 3 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "white", fontSize: isSmall ? 16 : 20 }}>
              Projects
            </Typography>
            <Typography variant="body2" sx={{ color: "limegreen", mb: 2, fontSize: isSmall ? 11 : 14 }}>
              ✔ 30 done this month
            </Typography>

            <TableContainer sx={{ maxHeight: isSmall ? 250 : 300, overflowX: "auto" }}>
              <Table size="small" stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: "#718096", fontSize: isSmall ? 10 : 12,backgroundColor: "#0F123B" }}>COMPANIES</TableCell>
                    <TableCell sx={{ color: "#718096", fontSize: isSmall ? 10 : 12,backgroundColor: "#0F123B" }}>BUDGET</TableCell>
                    <TableCell sx={{ color: "#718096", fontSize: isSmall ? 10 : 12,backgroundColor: "#0F123B" }}>STATUS</TableCell>
                    <TableCell sx={{ color: "#718096", fontSize: isSmall ? 10 : 12,backgroundColor: "#0F123B" }}>COMPLETION</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {projects.map((proj, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Stack direction="row" alignItems="center" spacing={0.5}>
                          {proj.icon}
                          <Typography sx={{ color: "white", fontSize: isSmall ? 11 : 13 }}>{proj.name}</Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>
                        <Typography sx={{ color: "white", fontSize: isSmall ? 11 : 13 }}>{proj.budget}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          sx={{
                            color: "white",
                            fontSize: isSmall ? 10 : 12,
                            px: 2,
                            py: 0.5,
                            borderRadius: 2,
                            display: "inline-block",
                          }}
                        >
                          {proj.status}
                        </Typography>
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
                            <Typography variant="caption" sx={{ color: "#A0AEC0", fontSize: isSmall ? 10 : 12 }}>
                              {`${proj.completion}%`}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Box>
    </section>
  );
}
