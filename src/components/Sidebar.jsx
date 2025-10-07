import React from 'react'
import {
  FiGrid,
  FiCheckSquare,
  FiUsers,
  FiImage,
  FiSettings
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const dashboardItems = [
    { name: "Dashboard", path:"/", icon: <FiGrid /> },
    { name: "Tasks", path:"/tasks", icon: <FiCheckSquare /> },
    { name: "Team", path:"/teams", icon: <FiUsers /> },
    { name: "Gallery", path:"/gallery", icon: <FiImage /> },
    { name: "Settings", path:"/settings", icon: <FiSettings /> },
  ];

  return (
    <div className="text-white bg-gray-700 max-w-[250px] w-full h-[80vh] py-6">
      <div className="flex gap-4 items-center pb-4 px-3 border-b-1 border-b-teal-100">
        <div className="w-[30px] h-[30px] bg-amber-100 rounded-full"></div>
        <div>Name</div>
      </div>
      <ul>
        {dashboardItems.map((item, index) => (
          <li key={index}>
            <Link to={item.path} className="py-2 px-3 flex gap-3 items-center hover:bg-amber-600 transition">
              <span>{item.icon}</span>
              <div>{item.name}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar
