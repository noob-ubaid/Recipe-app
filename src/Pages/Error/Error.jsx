import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center text-center px-4">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png" // Food-themed image (burger)
        alt="Burger Not Found"
        className="w-48 mb-6"
      />
      <h1 className="text-5xl font-extrabold text-[#AD49E1] mb-2">404</h1>
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        No Page Found 🍞
      </h2>
    
      <Link
        to="/"
        className="cursor-pointer bg-[#AD49E1] text-white px-6 py-3 rounded-full transition duration-200"
      >
        🍕 Back to Home
      </Link>
    </div>
  );
};

export default Error;
