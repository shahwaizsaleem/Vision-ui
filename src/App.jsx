import React from "react";
import Sidebar from "./components/Sidebar.jsx"; 
import Navbar from "./components/Navbar.jsx"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Billing from "./pages/Billing";
import Tables from "./pages/Tables";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* Sidebar stays on the left */}
        <Navbar />
      <Sidebar />
        {/* Page content */}
        <div className="content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/tables" element={<Tables />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
