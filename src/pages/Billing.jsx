import React, { useState } from "react";
import { BarChart3, TrendingUp, Users, DollarSign } from "lucide-react";
import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardTitle from "@mui/material/Typography";

// ✅ DashboardLayout (JSX)
const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    
    <div className="lg:ml-64 transition-all duration-300 pt-14">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="lg:ml-64 transition-all duration-300">
        {/* Top Navbar */}
        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

// ✅ Billing Page
const Billing = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Analytics
          </h1>
          <p className="text-muted-foreground mt-2">
            Deep insights and data visualization for your business metrics.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: BarChart3, title: "Page Views", value: "45.2K", change: "+12.5%" },
            { icon: Users, title: "Active Users", value: "3.8K", change: "+8.3%" },
            { icon: TrendingUp, title: "Conversion Rate", value: "12.4%", change: "+2.1%" },
            { icon: DollarSign, title: "Revenue", value: "$89.2K", change: "+15.7%" },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="glass-card stat-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-sm text-green-400">{stat.change}</p>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-primary to-accent rounded-xl">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Analytics Dashboard Card */}
        <Card className="glass-card">
          <CardHeader>
            <CardHeader title="Analytics Dashboard" />
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This is a placeholder for the Analytics page. You can customize this section to include:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
              <li>Advanced data visualization charts</li>
              <li>User behavior analytics</li>
              <li>Performance metrics and KPIs</li>
              <li>Custom reporting tools</li>
              <li>Real-time data monitoring</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Billing;
