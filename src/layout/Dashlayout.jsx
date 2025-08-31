// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import { Outlet } from "react-router-dom";

// export default function Dashlayout() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const handleSidebarToggle = () => {
//     setIsSidebarOpen((prev) => !prev);
//   };

//   return (
//     <div className="flex">
//       {/* Navbar */}
//       <Navbar onMenuClick={handleSidebarToggle} />

//       {/* Sidebar */}
//       <Sidebar open={isSidebarOpen} onClose={handleSidebarToggle} />

//       {/* Main Content */}
//       <main className="flex-1 p-4 mt-16">
//         <Outlet /> {/* 👈 This renders Dashboard, Billing, Tables etc. */}
//       </main>
//     </div>
//   );
// }
