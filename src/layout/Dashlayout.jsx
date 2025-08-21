// DashboardLayout.jsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";

const Dashlayout = ({ children }) => {
  // Controls open/close state of sidebar
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} />

      {/* Main content area */}
      <div className="flex-1 pt-14 lg:pt-0">
        {/* Navbar with toggle button */}
        <Navbar onToggleSidebar={() => setSidebarOpen(prev => !prev)} />

        {/* Page content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default Dashlayout;
