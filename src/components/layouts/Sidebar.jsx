import React, { useState } from "react";
import {
  FiGrid,
  FiCheckSquare,
  FiUsers,
  FiImage,
  FiSettings,
  FiMenu,
  FiX
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const dashboardItems = [
    { name: "Dashboard", path: "/", icon: <FiGrid /> },
    { name: "Tasks", path: "/tasks", icon: <FiCheckSquare /> },
    { name: "Users", path: "/users", icon: <FiUsers /> },
    { name: "Team", path: "/teams", icon: <FiUsers /> },
    { name: "Gallery", path: "/gallery", icon: <FiImage /> },
    { name: "Settings", path: "/settings", icon: <FiSettings /> },
  ];

  return (
    <>
      {/* 🔹 Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-700 text-white p-2 rounded"
        onClick={() => setOpen(true)}
      >
        <FiMenu size={22} />
      </button>

      {/* 🔹 Overlay (Mobile) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* 🔹 Sidebar */}
      <aside
        className={`
          fixed md:static top-0 left-0 z-50
          h-screen w-[250px] bg-gray-700 text-white
          transform transition-transform duration-300 pt-[25px]
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Header */}
        <div className="flex justify-between items-center gap-4 pb-4 px-3 border-b border-gray-500">
          <div className="flex gap-3 items-center">
            <div className="w-[30px] h-[30px] bg-amber-100 rounded-full" />
            <div>Name</div>
          </div>

          {/* Close button (Mobile) */}
          <button
            className="md:hidden"
            onClick={() => setOpen(false)}
          >
            <FiX size={22} />
          </button>
        </div>

        {/* Menu */}
        <ul className="mt-4">
          {dashboardItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                onClick={() => setOpen(false)}
                className="py-2 px-3 flex gap-3 items-center hover:bg-amber-600 transition"
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
