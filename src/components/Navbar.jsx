import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-lg font-bold">Dashboard</div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border border-gray-300 rounded"
        />
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/40"
            alt="User Avatar"
            className="rounded-full w-10 h-10"
          />
          <span className="font-semibold">Admin</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
