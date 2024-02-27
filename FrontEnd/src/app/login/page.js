'use client'

import Header from '@/components/Header';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';


const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div>
    <Header/>
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Club Festival</h1>
        <Image src="logo.svg" alt="Logo" className="mx-auto mb-4" width={250} height={250}/>
        <form className="w-full max-w-sm mx-auto">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" className="w-full border border-gray-400 px-4 py-2 rounded-md" />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Contraseña</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="w-full border border-gray-400 px-4 py-2 rounded-md pr-10"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-1/2 right-2 transform translate-y-1/2 text-gray-500 focus:outline-none"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <Link href="/dashboard">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Iniciar Sesión
          </button>
            </Link>

        </form>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
