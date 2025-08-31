import { Card, CardContent, Typography, LinearProgress, Grid, Button, Box } from "@mui/material";
import { FormGroup, FormControlLabel, Switch } from "@mui/material";

const projects = [
  { title: "Modern", desc: "As Uber works through a huge amount of internal management turmoil." },
  { title: "Scandinavian", desc: "Music is something that every person has his or her own specific opinion about." },
  { title: "Minimalist", desc: "Different people have different taste, and various types of music." },
];
export default function Profile() {
  return (
    <Box sx={{ display: "grid", gap: 2, mt:10}}>
      {/* Welcome Card */}
      <Card sx={{ bgcolor: "#1e2a3a", color: "white", borderRadius: 4 }}>
        <CardContent>
          <Typography variant="h6">Welcome back!</Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Nice to see you, Mark Johnson!
          </Typography>
          <Button >
            Turn on your car
          </Button>
        </CardContent>
      </Card>

      {/* Car Information Card */}
      <Card sx={{ bgcolor: "#1e2a3a", color: "white", borderRadius: 4 }}>
        <CardContent>
          <Typography variant="h6">Car Information</Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Hello, Mark Johnson! Your car is ready.
          </Typography>

          <Typography variant="h4" sx={{ mb: 1 }}>68%</Typography>
          <LinearProgress variant="determinate" value={68} sx={{ mb: 2 }} />

          <Typography variant="body2">Time to full charge: 0h 58min</Typography>

          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={6}>
              <Typography variant="body2">Battery Health</Typography>
              <Typography>76%</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">Consumption</Typography>
              <Typography>163W/km</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">Efficiency</Typography>
              <Typography>+20%</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">This Week</Typography>
              <Typography>1.342 km</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card sx={{ bgcolor: "#1e2a3a", color: "white", borderRadius: 4 }}>
      <CardContent>
        <Typography variant="h6">Profile Informations</Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Hi, I'm Mark Johnson. Decisions: If you can’t decide, the answer is no...
        </Typography>

        <Typography><b>Full Name:</b> Mark Johnson</Typography>
        <Typography><b>Mobile:</b> (44) 123 1234 123</Typography>
        <Typography><b>Email:</b> mark@simmple.com</Typography>
        <Typography><b>Location:</b> United States</Typography>
        <Typography><b>Social Media:</b> 🌐 🐦 📸</Typography>
      </CardContent>
    </Card>
    <Card sx={{ bgcolor: "#1e2a3a", color: "white", borderRadius: 4 }}>
      <CardContent>
        <Typography variant="h6">Platform Settings</Typography>
        <Typography variant="subtitle2" sx={{ mt: 2 }}>Account</Typography>

        <FormGroup>
          <FormControlLabel control={<Switch />} label="Email me when someone follows me" />
          <FormControlLabel control={<Switch />} label="Email me when someone answers to me" />
          <FormControlLabel control={<Switch />} label="Email me when someone mentions me" />
        </FormGroup>

        <Typography variant="subtitle2" sx={{ mt: 2 }}>Application</Typography>
        <FormGroup>
          <FormControlLabel control={<Switch />} label="New launches and projects" />
          <FormControlLabel control={<Switch />} label="Monthly product updates" />
          <FormControlLabel control={<Switch />} label="Subscribe to newsletter" />
          <FormControlLabel control={<Switch />} label="Receive mails weekly" />
        </FormGroup>
      </CardContent>
    </Card>
      <Card sx={{ bgcolor: "#1e2a3a", color: "white", borderRadius: 4 }}>
      <CardContent>
        <Typography variant="h6">Projects</Typography>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          {projects.map((p, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ bgcolor: "#2d3a4f", borderRadius: 3 }}>
                <CardContent>
                  <Typography variant="subtitle1">{p.title}</Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>{p.desc}</Typography>
                  <Button variant="outlined" size="small" sx={{ color: "white", borderColor: "white" }}>
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
  );
}
