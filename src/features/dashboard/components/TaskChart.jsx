import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const TaskChart = ({ completed, pending }) => {
  const data = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        data: [completed, pending],
        backgroundColor: ["#22c55e", "#f59e0b"], // green, amber
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 12,
        },
      },
    },
    cutout: "70%", // donut style
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-sm font-medium text-gray-600">
        Task Status Overview
      </h3>

      <Doughnut data={data} options={options} />
    </div>
  );
};

export default TaskChart;
