import React, { useState } from "react";
import Sidebar from "./components/Sidebar.jsx"; 
import Navbar from "./components/Navbar.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Billing from "./pages/Billing";
import Tables from "./pages/Tables";
import Signup from "./pages/Signup.jsx";
import Signin from "./pages/Signin.jsx";
import Profile from "./pages/Profile.jsx";
import { Box } from "@mui/material";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(true);   // ✅ new
  const drawerWidth = 0;

  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} setDesktopOpen={setDesktopOpen} desktopOpen={desktopOpen}/>
        <Sidebar 
          mobileOpen={mobileOpen} 
          setMobileOpen={setMobileOpen} 
          desktopOpen={desktopOpen} 
          setDesktopOpen={setDesktopOpen} 
        /> 

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            transition: "margin 0.3s ease",
            marginLeft: desktopOpen ? `${drawerWidth}px` : "0px",
          }}
        >
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Box>
      </div>
    </BrowserRouter>
  );
}
export default App;