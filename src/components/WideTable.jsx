import React from "react";

const WideTable = () => {
  // Sample data with a lot of columns
  const data = [
    {
      id: 1,
      name: "John Doe",
      age: 28,
      email: "john@example.com",
      phone: "123-456-7890",
      city: "New York",
      country: "USA",
      occupation: "Engineer",
      company: "TechCorp",
      department: "R&D",
      salary: "$100k",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 34,
      email: "jane@example.com",
      phone: "987-654-3210",
      city: "Los Angeles",
      country: "USA",
      occupation: "Manager",
      company: "BusinessCorp",
      department: "Sales",
      salary: "$120k",
    },
    // Add more data as needed...
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Age</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Phone</th>
            <th className="py-2 px-4 border">City</th>
            <th className="py-2 px-4 border">Country</th>
            <th className="py-2 px-4 border">Occupation</th>
            <th className="py-2 px-4 border">Company</th>
            <th className="py-2 px-4 border">Department</th>
            <th className="py-2 px-4 border">Salary</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="text-center">
              <td className="py-2 px-4 border">{item.id}</td>
              <td className="py-2 px-4 border">{item.name}</td>
              <td className="py-2 px-4 border">{item.age}</td>
              <td className="py-2 px-4 border">{item.email}</td>
              <td className="py-2 px-4 border">{item.phone}</td>
              <td className="py-2 px-4 border">{item.city}</td>
              <td className="py-2 px-4 border">{item.country}</td>
              <td className="py-2 px-4 border">{item.occupation}</td>
              <td className="py-2 px-4 border">{item.company}</td>
              <td className="py-2 px-4 border">{item.department}</td>
              <td className="py-2 px-4 border">{item.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WideTable;
