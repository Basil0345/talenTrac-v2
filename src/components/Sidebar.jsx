import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <div className="p-4 text-xl font-bold">Admin Dashboard</div>
      <ul className="mt-6">
        <li className="p-4 hover:bg-gray-700">
          <a href="#">Dashboard</a>
        </li>
        <li className="p-4 hover:bg-gray-700">
          <a href="#">Users</a>
        </li>
        <li className="p-4 hover:bg-gray-700">
          <a href="#">Settings</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
