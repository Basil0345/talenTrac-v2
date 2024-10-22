import WideTable from "./components/WideTable";

export default function App() {
  return (
    <div className="h-screen flex flex-col">
      <div className="grid flex-1 sm:grid-cols-12">
        {/* Sidebar */}
        <div className="hidden lg:col-span-2 lg:block">
          <div className="bg-gray-800 text-white h-screen p-4">
            <h2 className="text-lg font-semibold mb-4">Sidebar</h2>
            <div className="h-[calc(100vh-80px)] overflow-y-auto">
              <ul>
                {Array.from({ length: 20 }, (_, index) => (
                  <li key={index} className="mb-2">
                    <a href="#" className="hover:text-gray-300">
                      Logout {index + 1}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Main container */}
        <div className="flex-1 sm:col-span-12 lg:col-span-10 flex flex-col overflow-hidden">
          <div className="fixed bg-blue-600 text-white p-4 shadow-md z-50 w-full">
            <div className="flex justify-between items-center">
              {/* Left section with inputs */}
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-2 py-1 rounded-md border focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Filter"
                  className="px-2 py-1 rounded-md border focus:outline-none"
                />
                <button className="bg-green-500 px-4 py-2 rounded-md text-white hover:bg-green-600">
                  Submit
                </button>
              </div>
              {/* Right section with user info */}
              <div className="flex items-center gap-2">
                <span className="font-semibold">John Doe</span>
                <img
                  src="https://via.placeholder.com/40"
                  alt="User"
                  className="rounded-full w-10 h-10"
                />
              </div>
            </div>
          </div>
          <div className="p-4 mt-20 h-[calc(100vh-80px)] overflow-y-auto">
            <h1 className="text-3xl font-bold">Main Content</h1>
            <div className="space-y-4">
              <WideTable />
              <WideTable />
              <WideTable />
              <WideTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
