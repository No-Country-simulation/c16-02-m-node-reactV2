'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Header from '@/components/Header';
import Image from 'next/image';
import TermsAndConditionsModal from "@/components/TermsAndConditionsModal";

const RegisterPage = () => {
  const carouselImages = [
    '/la-beriso.png',
    '/la-vela-puerca.png',
    '/los-pericos.png',
    '/la-beriso.png',
    '/la-vela-puerca.png',
    '/los-pericos.png'
  ];

  const [showTermsModal, setShowTermsModal] = useState(false);

  const handleTermsClick = (e) => {
    e.preventDefault();
    setShowTermsModal(true);
  };

  const handleCloseTermsModal = () => {
    setShowTermsModal(false);
  };


  const [currentImageIndex, setCurrentImageIndex] = useState(0);

 const [showPassword, setShowPassword] = useState(false);
 const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };


  return (
    <div>
      <Header/>
      <div className="flex justify-center items-center h-screen">
      <div className="w-1/2 p-4">
        <div className="relative">
          <button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full">
            &lt;
          </button>
          <button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full">
            &gt;
          </button>
          <Image src={carouselImages[currentImageIndex]} alt={`Imagen ${currentImageIndex + 1}`} className="w-full" width={300} height={300}/>
        </div>
      </div>

      <div className="w-1/2 p-4 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-4">Club Festival</h2>
        <Image src="/logo.svg" alt="Logo" className="mb-4" width={250} height={250}/>

        <form className="w-full max-w-sm flex flex-col items-center">
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-gray-700 font-bold mb-2">Nombre</label>
            <input type="text" id="nombre" className="w-full md:w-96 border border-gray-400 px-4 py-2 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="apellido" className="block text-gray-700 font-bold mb-2">Apellido</label>
            <input type="text" id="apellido" className="w-full md:w-96 border border-gray-400 px-4 py-2 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" className="w-full md:w-96 border border-gray-400 px-4 py-2 rounded-md" />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Contraseña</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="w-full md:w-96 border border-gray-400 px-4 py-2 rounded-md pr-10"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-1/2 right-2 transform translate-y-1/2 text-gray-500 focus:outline-none"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="mb-4 relative">
            <label htmlFor="confirm-password" className="block text-gray-700 font-bold mb-2">Confirmar Contraseña</label>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirm-password"
              className="w-full md:w-96 border border-gray-400 px-4 py-2 rounded-md pr-10"
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute top-1/2 right-2 transform translate-y-1/2 text-gray-500 focus:outline-none"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-gray-700">
              He leído y acepto los&nbsp;
               <Link href="#"  onClick={handleTermsClick} className="text-blue-500">
                 términos y condiciones
              </Link>.
              {showTermsModal && <TermsAndConditionsModal isOpen={true} onClose={handleCloseTermsModal} />}
            </label>
          </div>
          <Link href="/dashboard">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Registrarse
          </button>
          </Link>
        </form>
      </div>
    </div>
    </div>
  );
};

export default RegisterPage;
