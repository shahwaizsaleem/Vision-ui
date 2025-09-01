import React, { useState } from "react";
import Sidebar from "./components/Sidebar.jsx"; 
import Navbar from "./components/Navbar.jsx";
import { Routes, Route, BrowserRouter, useLocation, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Billing from "./pages/Billing";
import Tables from "./pages/Tables";
import Signup from "./pages/Signup.jsx";
import Signin from "./pages/Signin.jsx";
import Profile from "./pages/Profile.jsx";
import { Box } from "@mui/material";

function Layout({ children }) {
  const location = useLocation();
  const hideLayout = location.pathname === "/signin" || location.pathname === "/signup";

  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(true);
  const drawerWidth = 0;

  return (
    <div style={{ display: "flex" }}>
      {!hideLayout && (
        <>
          <Navbar 
            mobileOpen={mobileOpen} 
            setMobileOpen={setMobileOpen} 
            setDesktopOpen={setDesktopOpen} 
            desktopOpen={desktopOpen}
          />
          <Sidebar 
            mobileOpen={mobileOpen} 
            setMobileOpen={setMobileOpen} 
            desktopOpen={desktopOpen} 
            setDesktopOpen={setDesktopOpen} 
          />
        </>
      )}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: hideLayout ? 0 : 3,
          transition: "margin 0.3s ease",
          marginLeft: !hideLayout && desktopOpen ? `${drawerWidth}px` : "0px",
        }}
      >
        {children}
      </Box>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root ("/") to Signin */}
        <Route path="/" element={<Navigate to="/Signin" replace />} />

        {/* Auth Pages */}
        <Route path="/Signin" element={<Layout><Signin /></Layout>} />
        <Route path="/Signup" element={<Layout><Signup /></Layout>} />

        {/* Dashboard Pages */}
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/billing" element={<Layout><Billing /></Layout>} />
        <Route path="/tables" element={<Layout><Tables /></Layout>} />
        <Route path="/profile" element={<Layout><Profile /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
