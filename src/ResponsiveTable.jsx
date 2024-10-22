import React from 'react';

function ResponsiveTable() {
  const tableData = [
    {
      name: 'John Doe',
      age: 29,
      occupation: 'Software Engineer',
      location: 'New York',
      email: 'john@example.com',
      phone: '123-456-7890',
      company: 'TechCorp',
      department: 'Development',
      startDate: '2019-04-10',
      salary: '$120,000',
    },
    {
      name: 'Jane Smith',
      age: 34,
      occupation: 'Product Manager',
      location: 'San Francisco',
      email: 'jane@example.com',
      phone: '987-654-3210',
      company: 'InnovateX',
      department: 'Product',
      startDate: '2017-07-22',
      salary: '$135,000',
    },
    // Add more data here if needed
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Responsive Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Age
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Occupation
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Company
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Department
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Start Date
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Salary
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tableData.map((row, index) => (
              <tr key={index}>
                <td className="px-4 py-2 whitespace-nowrap">{row.name}</td>
                <td className="px-4 py-2 whitespace-nowrap">{row.age}</td>
                <td className="px-4 py-2 whitespace-nowrap">{row.occupation}</td>
                <td className="px-4 py-2 whitespace-nowrap">{row.location}</td>
                <td className="px-4 py-2 whitespace-nowrap">{row.email}</td>
                <td className="px-4 py-2 whitespace-nowrap">{row.phone}</td>
                <td className="px-4 py-2 whitespace-nowrap">{row.company}</td>
                <td className="px-4 py-2 whitespace-nowrap">{row.department}</td>
                <td className="px-4 py-2 whitespace-nowrap">{row.startDate}</td>
                <td className="px-4 py-2 whitespace-nowrap">{row.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ResponsiveTable;
