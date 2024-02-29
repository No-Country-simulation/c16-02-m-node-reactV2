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
        <p>Bienvenido, Pedro</p>
      </div>
    </header>
  );
};

export default DashboardHeader;


