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
} from "@mui/material";

const authors = [
  { name: "Esthera Jackson", email: "esthera@simmple.com", function: "Manager Organization", status: "Online", employed: "14/06/21", image: "https://via.placeholder.com/40" },
  { name: "Alexa Liras", email: "alexa@simmple.com", function: "Programmer Developer", status: "Offline", employed: "14/06/21", image: "https://via.placeholder.com/40" },
  { name: "Laurent Michael", email: "laurent@simmple.com", function: "Executive Projects", status: "Online", employed: "14/06/21", image: "https://via.placeholder.com/40" },
  { name: "John Doe", email: "john@simmple.com", function: "Designer UI/UX", status: "Offline", employed: "10/07/22", image: "https://via.placeholder.com/40" },
  { name: "Sarah Lee", email: "sarah@simmple.com", function: "Team Lead", status: "Online", employed: "22/01/23", image: "https://via.placeholder.com/40" },
];

const projects = [
  { name: "Chakra Soft UI Version", budget: "$14,000", completion: 60, status: "working", icon: <img src="https://mui.com/static/images/avatar/1.jpg" alt="chakra" style={{ width: 24, height: 24, borderRadius: "50%" }} /> },
  { name: "Add Progress Track", budget: "$3,000", completion: 10, status: "complete", icon: <img src="https://mui.com/static/images/avatar/2.jpg" alt="progress" style={{ width: 24, height: 24, borderRadius: "50%" }} /> },
  { name: "Fix Platform Errors", budget: "Not set", completion: 100, status: "waiting", icon: <img src="https://mui.com/static/images/avatar/3.jpg" alt="errors" style={{ width: 24, height: 24, borderRadius: "50%" }} /> },
  { name: "Fix Platform Errors", budget: "Not set", completion: 100, status: "waiting", icon: <img src="https://mui.com/static/images/avatar/4.jpg" alt="errors" style={{ width: 24, height: 24, borderRadius: "50%" }} /> },
  { name: "Fix Platform Errors", budget: "Not set", completion: 100, status: "waiting", icon: <img src="https://mui.com/static/images/avatar/5.jpg" alt="errors" style={{ width: 24, height: 24, borderRadius: "50%" }} /> },
];

export default function Tables() {
  return (
    <section>
      {/* Authors Card */}
      <Box sx={{ mb: 4,mt:10, }}>
        <Card
          sx={{
            width: "100%",
            height: 450,
            borderRadius: 2,
            bgcolor: "#061e45",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
          }}
        >
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "white", mb: 2 }}>
              Authors Table
            </Typography>

            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: "#718096", fontSize: 12 }}>AUTHOR</TableCell>
                  <TableCell sx={{ color: "#718096", fontSize: 12 }}>FUNCTION</TableCell>
                  <TableCell sx={{ color: "#718096", fontSize: 12 }}>STATUS</TableCell>
                  <TableCell sx={{ color: "#718096", fontSize: 12 }}>EMPLOYED</TableCell>
                  <TableCell sx={{ color: "#718096", fontSize: 12 }}>ACTION</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {authors.map((author, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <img src={author.image} alt={author.name} style={{ width: 40, height: 40, borderRadius: "6px" }} />
                        <Box>
                          <Typography sx={{ color: "white", fontSize: 14 }}>{author.name}</Typography>
                          <Typography sx={{ color: "gray", fontSize: 12 }}>{author.email}</Typography>
                        </Box>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ color: "white", fontSize: 13 }}>{author.function}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: 12,
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
                      <Typography sx={{ color: "white", fontSize: 13 }}>{author.employed}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ color: "#4299E1", fontSize: 13, cursor: "pointer" }}>Edit</Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Box>

      {/* Projects Card */}
      <Box>
        <Card
          sx={{
            width: "100%",
            height: 350,
            borderRadius: 3,
            bgcolor: "#061e45",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
          }}
        >
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>
              Projects
            </Typography>
            <Typography variant="body2" sx={{ color: "limegreen", mb: 2 }}>
              ✔ 30 done this month
            </Typography>

            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: "#718096", fontSize: 12 }}>COMPANIES</TableCell>
                  <TableCell sx={{ color: "#718096", fontSize: 12 }}>BUDGET</TableCell>
                  <TableCell sx={{ color: "#718096", fontSize: 12 }}>STATUS</TableCell>
                  <TableCell sx={{ color: "#718096", fontSize: 12 }}>COMPLETION</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {projects.map((proj, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={0.5}>
                        {proj.icon}
                        <Typography sx={{ color: "white", fontSize: 13 }}>{proj.name}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ color: "white", fontSize: 13 }}>{proj.budget}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: 12,
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
                          <Typography variant="caption" sx={{ color: "#A0AEC0" }}>
                            {`${proj.completion}%`}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Box>
    </section>
  );
}
