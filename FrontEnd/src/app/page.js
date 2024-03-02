'use client'

import { useState, useEffect, useRef } from "react";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from 'next/link'
import './globals.css'

export default function Home() {
  const carouselImages = [
    '/la-beriso.png',
    '/la-vela-puerca.png',
    '/los-pericos.png',
    '/la-beriso.png',
    '/la-vela-puerca.png',
    '/los-pericos.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % carouselImages.length;
      setCurrentIndex(nextIndex);
      carouselRef.current.style.transform = `translateX(-${nextIndex * 200}px)`;
    }, 1000);
    return () => clearInterval(interval);
  }, [currentIndex, carouselImages.length]);

  return (
    <>
      <header className="bg-gray-50 shadow-md p-4">
        <nav className="flex justify-end">
          <Link href="/login" className="bg-pink-300 bg-opacity-80 text-gray-800 py-2 px-4 rounded-lg mr-4 inter-regular">
            Iniciar Sesión
          </Link>
          <Link href="/register" className="border-gray-600 text-gray-800  border-solid border py-2 px-4 rounded-lg inter-regular">
            Registrarse
          </Link>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col items-center">
          <h1 className="text-6xl inter-regular mb-4">Club Festival</h1>
          <Image src="/logo.svg" alt="Imagen principal" width={250} height={250}/>
        </div>
        <h2 className="text-center mb-8 inter-medium text-xl">¡Bienvenidos a nuestro sitio web en donde encontrarás todos tus festivales favoritos!</h2>
        <div className="w-full overflow-hidden relative">
          <div className="w-1/4 h-full absolute z-50 left-0" style={{ background: 'linear-gradient(to right, #edf2f7 0%, rgba(255, 255, 255, 0) 100%)'}}></div>
          <div className="w-1/4 h-full absolute z-50 right-0" style={{ background: 'linear-gradient(to left, #edf2f7 0%, rgba(255, 255, 255, 0) 100%)'}}></div>
          <div ref={carouselRef} className="flex transition-transform duration-500">
            {carouselImages.map((imageUrl, index) => (
              <div key={index}  className="w-80vw md:w-1/3 px-2">
                <div  className="carousel-focus flex items-center flex-col relative bg-white mx-5 my-10 px-4 py-3 rounded-lg shadow-lg " style={{ width: '300px'}}> 
                  <Image src={imageUrl} alt={`Imagen ${index + 1}`} width={600} height={600} className="w-full shadow-2xl"/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

