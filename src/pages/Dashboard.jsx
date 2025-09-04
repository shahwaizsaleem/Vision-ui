import React from "react";
import Chart from "../components/Chart.jsx";
import Card from "../components/Card.jsx";
import Tablets from "../components/Tablets.jsx";
import Hero from "../components/Hero.jsx";

export default function Dashboard() {
  return (
    <div className="w-full mt-8 overflow-x-auto md:overflow-x-visible">
      <div className="flex flex-col gap-4 min-w-full md:min-w-0">
        <div className="w-full">
          <Card />
        </div>
        <div className="w-full">
          <Hero />
        </div>
        <div className="w-full">
          <Chart />
        </div>
        <div className="w-full">
          <Tablets />
        </div>
      </div>
    </div>
  );
}
