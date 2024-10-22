import React from "react";

const MainContent = () => {
  return (
    <div className="p-6 h-full overflow-y-auto">
      <h1 className="text-2xl font-bold mb-4">Dashboard Content</h1>

      {/* Table wrapper with horizontal scrolling */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-md">
          <thead>
            <tr>
              <th className="p-4 border">#</th>
              <th className="p-4 border">Name</th>
              <th className="p-4 border">Email</th>
              <th className="p-4 border">Role</th>
              <th className="p-4 border">Status</th>
              {/* Add more columns if necessary */}
            </tr>
          </thead>
          <tbody>
            {/* Example data */}
            {[...Array(50).keys()].map((row, index) => (
              <tr key={index} className="even:bg-gray-100">
                <td className="p-4 border">{index + 1}</td>
                <td className="p-4 border">John Doe</td>
                <td className="p-4 border">john.doe@example.com</td>
                <td className="p-4 border">Admin</td>
                <td className="p-4 border">Active</td>
                {/* Add more columns if necessary */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainContent;
