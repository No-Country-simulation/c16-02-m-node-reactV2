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


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Obtener los valores del formulario
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    // Construir el objeto de datos a enviar al backend
    const userData = {
      email,
      password,
    };

    try {
      // Enviar los datos al backend para la verificación
      const response = await fetch('http://localhost:3001/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // Si la respuesta es exitosa, redirigir al usuario a la página de dashboard
        window.location.href = '/dashboard';
      } else {
        // Si la respuesta es un error, mostrar un mensaje de error al usuario
        console.error('Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error al enviar los datos al backend', error);
    }
  };

  return (
    <div>
    <Header/>
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Club Festival</h1>
        <Image src="logo.svg" alt="Logo" className="mx-auto mb-4" width={250} height={250}/>
        <form className="w-full max-w-sm mx-auto" onSubmit={handleSubmit}>
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
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
