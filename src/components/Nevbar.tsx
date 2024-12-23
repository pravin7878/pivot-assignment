"use client";

const Nevbar = () => {
  return (
    <div className="flex flex-col items-center py-10 px-6 border-2 border-red-500 bg-gradient-to-r from-red-100 via-white to-red-100 shadow-lg rounded-lg gap-6">
      {/* Title */}
      <h1 className="text-red-600 text-4xl font-extrabold uppercase tracking-wide drop-shadow-md">
        Pokemon Web Application
      </h1>
      
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        className="w-full max-w-md px-4 py-2 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
      />
      
      {/* Navigation Buttons */}
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 hover:shadow-lg transition-all">
          Home
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-300 hover:text-gray-900 hover:shadow-lg transition-all">
          About
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-300 hover:text-gray-900 hover:shadow-lg transition-all">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Nevbar;
