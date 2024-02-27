import Link from "next/link";
import React from "react";
import { FiArrowLeft } from 'react-icons/fi';

const DashboardHeader = () => {
  return (
    <header className="flex justify-between items-center bg-gray-50 shadow-md p-4">
      <div className="flex justify-between items-center w-full">
      <div className="text-xl font-bold mr-10">
        <Link href="/dashboard">
            <FiArrowLeft />
        </Link>
      </div>
        {/* <div className="mr-4 relative">
          <input
            type="text"
            placeholder="Buscar..."
            className="pl-8 pr-4 py-2 rounded-lg border border-gray-600 bg-gray-200 text-white focus:outline-none focus:border-blue-500"
          />
          <svg
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20 20l-4.573-4.573M8 15a7 7 0 100-14 7 7 0 000 14z"
            ></path>
          </svg>
        </div> */}
        <p>Bienvenido, Pedro</p>
      </div>
    </header>
  );
};

export default DashboardHeader;


