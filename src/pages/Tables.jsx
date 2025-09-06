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

  const tableScrollStyles = {
    overflowX: isSmall ? "auto" : "visible",
    overflowY: "visible",
    width: "100%",
    maxHeight: "auto",
    '&::-webkit-scrollbar': { height: 6, width: 6 },
    '&::-webkit-scrollbar-track': { backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 3 },
    '&::-webkit-scrollbar-thumb': { backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: 3 },
  };

  return (
    <section className="flex flex-col gap-4 mt-10 px-2 md:px-0">
      {/* Authors Card */}
      <Card sx={{ width: "100%", borderRadius: 3, bgcolor: "#0F123B", boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)" }}>
        <CardContent sx={{ p: isSmall ? 1.5 : 3 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "white", mb: 2, fontSize: isSmall ? 14 : 20 }}>
            Authors Table
          </Typography>

          <TableContainer sx={tableScrollStyles}>
            <Table size="small" sx={{ width: isSmall ? "auto" : "100%", tableLayout: "fixed" }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: "#718096", fontSize: isSmall ? 9 : 12, backgroundColor: "#0F123B", padding: isSmall ? "8px 4px" : "16px" }}>
                    AUTHOR
                  </TableCell>
                  <TableCell sx={{ color: "#718096", fontSize: isSmall ? 9 : 12, backgroundColor: "#0F123B", padding: isSmall ? "8px 4px" : "16px" }}>
                    FUNCTION
                  </TableCell>
                  <TableCell sx={{ color: "#718096", fontSize: isSmall ? 9 : 12, backgroundColor: "#0F123B", padding: isSmall ? "8px 4px" : "16px" }}>
                    STATUS
                  </TableCell>
                  <TableCell sx={{ color: "#718096", fontSize: isSmall ? 9 : 12, backgroundColor: "#0F123B", padding: isSmall ? "8px 4px" : "16px" }}>
                    EMPLOYED
                  </TableCell>
                  <TableCell sx={{ color: "#718096", fontSize: isSmall ? 9 : 12, backgroundColor: "#0F123B", padding: isSmall ? "8px 4px" : "16px" }}>
                    ACTION
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {authors.map((author, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ padding: isSmall ? '8px 4px' : '16px' }}>
                      <Stack direction="row" alignItems="center" spacing={isSmall ? 0.5 : 1}>
                        <img src={author.image} alt={author.name} style={{ width: isSmall ? 20 : 32, height: isSmall ? 20 : 32, borderRadius: 4 }} />
                        <Box sx={{ minWidth: 0, overflow: 'hidden' }}>
                          <Typography sx={{ color: "white", fontSize: isSmall ? 10 : 14, fontWeight: "medium", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                            {author.name}
                          </Typography>
                          <Typography sx={{ color: "gray", fontSize: isSmall ? 8 : 12, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                            {author.email}
                          </Typography>
                        </Box>
                      </Stack>
                    </TableCell>
                    <TableCell sx={{ padding: isSmall ? '8px 4px' : '16px' }}>
                      <Typography sx={{ color: "white", fontSize: isSmall ? 9 : 13, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {author.function}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ padding: isSmall ? '8px 4px' : '16px' }}>
                      <Typography sx={{ color: "white", fontSize: isSmall ? 8 : 11, bgcolor: author.status === "Online" ? "green" : "gray", px: isSmall ? 0.5 : 1, py: isSmall ? 0.25 : 0.5, borderRadius: 1, display: "inline-block", textAlign: 'center', minWidth: isSmall ? '45px' : '60px' }}>
                        {author.status}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ padding: isSmall ? '8px 4px' : '16px' }}>
                      <Typography sx={{ color: "white", fontSize: isSmall ? 9 : 13, whiteSpace: "nowrap" }}>
                        {author.employed}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ padding: isSmall ? '8px 4px' : '16px' }}>
                      <Typography sx={{ color: "#4299E1", fontSize: isSmall ? 9 : 13, cursor: "pointer", whiteSpace: "nowrap" }}>
                        Edit
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      {/* Projects Card */}
      <Card sx={{ width: "100%", borderRadius: 3, bgcolor: "#0F123B", boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)" }}>
        <CardContent sx={{ p: isSmall ? 1.5 : 3 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "white", fontSize: isSmall ? 14 : 20 }}>
            Projects
          </Typography>
          <Typography variant="body2" sx={{ color: "limegreen", mb: 2, fontSize: isSmall ? 10 : 14 }}>
            ✔ 30 done this month
          </Typography>

          <TableContainer sx={tableScrollStyles}>
            <Table size="small" sx={{ width: isSmall ? '100%' : '100%', tableLayout: "fixed" }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: "#718096", fontSize: isSmall ? 9 : 12, backgroundColor: "#0F123B", padding: isSmall ? '8px 4px' : '16px' }}>
                    COMPANIES
                  </TableCell>
                  <TableCell sx={{ color: "#718096", fontSize: isSmall ? 9 : 12, backgroundColor: "#0F123B", padding: isSmall ? '8px 4px' : '16px' }}>
                    BUDGET
                  </TableCell>
                  <TableCell sx={{ color: "#718096", fontSize: isSmall ? 9 : 12, backgroundColor: "#0F123B", padding: isSmall ? '8px 4px' : '16px' }}>
                    STATUS
                  </TableCell>
                  <TableCell sx={{ color: "#718096", fontSize: isSmall ? 9 : 12, backgroundColor: "#0F123B", padding: isSmall ? '8px 4px' : '16px' }}>
                    COMPLETION
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {projects.map((proj, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ padding: isSmall ? '6px 3px' : '16px' }}>
                      <Stack direction="row" alignItems="center" spacing={isSmall ? 0.2 : 0.5}>
                        <Box sx={{ flexShrink: 0 }}>
                          {React.cloneElement(proj.icon, { style: { width: isSmall ? 14 : 20, height: isSmall ? 14 : 20, borderRadius: "50%" } })}
                        </Box>
                        <Typography sx={{ color: "white", fontSize: isSmall ? 8 : 13, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", minWidth: 0 }}>
                          {proj.name}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell sx={{ padding: isSmall ? '6px 3px' : '16px' }}>
                      <Typography sx={{ color: "white", fontSize: isSmall ? 8 : 13, whiteSpace: "nowrap" }}>
                        {proj.budget}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ padding: isSmall ? '6px 3px' : '16px' }}>
                      <Typography sx={{ color: "white", fontSize: isSmall ? 7 : 12, px: isSmall ? 0.3 : 1, py: isSmall ? 0.2 : 0.5, borderRadius: 1, display: "inline-block", whiteSpace: "nowrap", bgcolor: 'rgba(255,255,255,0.1)' }}>
                        {proj.status}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ padding: isSmall ? '6px 3px' : '16px' }}>
                      <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
                        <Box sx={{ width: "100%", mr: isSmall ? 0.3 : 1 }}>
                          <LinearProgress variant="determinate" value={proj.completion} sx={{ height: isSmall ? 2 : 6, borderRadius: 2, bgcolor: 'rgba(255,255,255,0.1)', '& .MuiLinearProgress-bar': { borderRadius: 2 } }} />
                        </Box>
                        <Box sx={{ minWidth: isSmall ? 18 : 30, flexShrink: 0 }}>
                          <Typography variant="caption" sx={{ color: "#A0AEC0", fontSize: isSmall ? 7 : 11, whiteSpace: "nowrap" }}>
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
    </section>
  );
}
