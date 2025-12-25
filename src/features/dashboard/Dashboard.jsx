import React from "react";
import CounterCard from "./components/CounterCard";
import TaskChart from "./components/TaskChart";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  const totalTasks = tasks.length;
  const tasksCompleted = tasks.filter((task) => task.isCompleted).length;
  const tasksPending = tasks.filter((task) => !task.isCompleted).length;
  const completionRate =
    totalTasks === 0
      ? 0
      : Math.floor((tasksCompleted / totalTasks) * 100);

  return (
    <div className="min-h-screen bg-gray-50 px-[40px] py-[40px]">

      {/* Page Title */}
      <h1 className="mb-8 text-3xl font-bold text-gray-800">
        Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Total Tasks" value={totalTasks} />
        <Stat label="Completed" value={tasksCompleted} color="text-green-600" />
        <Stat label="Pending" value={tasksPending} color="text-amber-600" />
        <Stat label="Completion Rate" value={`${completionRate}%`} color="text-blue-600" />
      </div>

      {/* Widgets */}
      <div className="grid gap-6 lg:grid-cols-3">
        <CounterCard />

        <div className="lg:col-span-2">
          <TaskChart
            completed={tasksCompleted}
            pending={tasksPending}
          />
        </div>
      </div>
    </div>
  );
};

const Stat = ({ label, value, color = "text-gray-800" }) => (
  <div className="rounded-2xl bg-white p-5 shadow-sm border border-gray-200">
    <p className="text-sm text-gray-500 mb-1">{label}hi</p>
    <p className={`text-3xl font-bold ${color}`}>{value}</p>
  </div>
);

export default Dashboard;
