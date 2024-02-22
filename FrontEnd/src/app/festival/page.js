'use client'

import DashboardHeader from '@/components/HeaderDashboard'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

function page() {
  const [activeTab, setActiveTab] = useState("integrantes");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleCardClick = (cardInfo) => {
    setSelectedCardInfo(cardInfo);
  };

  // Objeto de datos de prueba para cada card
  const cardsData = {
    integrantes: [
      { id: 1, name:'Integrante 1'},
      { id: 2, name:'Integrante 2'},
      { id: 3, name:'Integrante 3'},
      { id: 4, name:'Integrante 4'}
    ],
    historia: [
      { id: 1, description: 'Descripción de la historia 1' },
      { id: 2, description: 'Descripción de la historia 2' },
      { id: 3, description: 'Descripción de la historia 3' },
      { id: 4, description: 'Descripción de la historia 4' }
    ],
    imagenes: [
      { id: 1, image: '/la-beriso.png'},
      { id: 2, image: '/la-beriso.png'},
      { id: 3, image: '/la-beriso.png'},
      { id: 4, image: '/la-beriso.png'}
    ],
    redes: [
      { id: 1, red: 'instagram' },
      { id: 2, red: 'facebook' },
      { id: 3, red: 'twitter' },
      { id: 4, red: 'tiktok' }
    ],
  };


  return (
    <div>
        <DashboardHeader/>
        <div className="flex flex-col items-start">
            <h1 className="text-3xl font-bold mb-4">Título del Evento</h1>
            <div className="flex items-center justify-center w-full h-full">
                {/* Imagen grande */}
                <Image
                    src="/la-beriso.png"
                    alt="Imagen del evento"
                    className="w-full max-w-xl h-auto rounded-lg shadow-md"
                    width={700}
                    height={700}
                />
            </div>
            <div className="mt-8 text-lg text-gray-700">
                {/* Descripción del evento */}
                <p>
                    Descripción del evento...
                </p>
            </div>
            <div className="mt-8">
                {/* Reproductor de audio */}
                <audio controls className="w-full max-w-4xl">
                <source src="/audio-del-evento.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
{/* NUEVO TAB */}
<div className="w-full bg-gray-200 rounded-lg flex justify-center items-center mt-10">
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
          <ul className="flex flex-wrap -mb-px">
            <li className="me-2 cursor-pointer">
              <a
                className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-red-400 hover:border-red-300 ${
                  activeTab === "integrantes"
                    ? "border-red-600 text-red-600"
                    : "text-gray-500"
                }`}
                onClick={() => handleTabChange("integrantes")}
              >
                Integrantes
              </a>
            </li>
            <li className="me-2 cursor-pointer">
              <a
                className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-red-400 hover:border-red-300 ${
                  activeTab === "historia"
                    ? "border-red-600 text-red-600"
                    : "text-gray-500"
                }`}
                onClick={() => handleTabChange("historia")}
              >
                Historia
              </a>
            </li>
            <li className="me-2 cursor-pointer">
              <a
                className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-red-400 hover:border-red-300 ${
                  activeTab === "imagenes"
                    ? "border-red-600 text-red-600"
                    : "text-gray-500"
                }`}
                onClick={() => handleTabChange("imagenes")}
              >
                Imágenes
              </a>
            </li>
            <li className="me-2 cursor-pointer">
              <a
                className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-red-400 hover:border-red-300 ${
                  activeTab === "redes"
                    ? "border-red-600 text-red-600"
                    : "text-gray-500"
                }`}
                onClick={() => handleTabChange("redes")}
              >
                Redes
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* COMPONETE NUEVO */}
      <div className="mt-8 w-full bg-red-200 h-96 rounded-lg flex justify-center items-center">
  {activeTab && (
    <Link href={'/festival'} className="flex space-x-4">
      {activeTab === "integrantes" && (
        [1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className="bg-white w-1/4 p-4 rounded-lg shadow-md"
          >
            <Image
              src={`/la-beriso.png`}
              alt={`Image ${index}`}
              className="w-full h-32 object-cover rounded-lg mb-4"
              width={200}
              height={200}
            />
            <h2 className="text-lg font-bold mb-2">Título del evento</h2>
            <p className="text-sm text-gray-600">
              Descripción corta del evento
            </p>
          </div>
        ))
      )}
      {activeTab === "historia" && (
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <p className="text-sm text-gray-600 text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, minus libero sunt natus omnis excepturi ipsam blanditiis repellendus, dignissimos ipsa non cupiditate. Ratione, obcaecati tempora! Provident accusamus minus error quae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, veritatis? Dolorum consequatur iusto obcaecati aspernatur quam iure sunt nemo praesentium cumque dicta! Alias animi repudiandae dolorum optio quidem culpa repellendus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, minus libero sunt natus omnis excepturi ipsam blanditiis repellendus, dignissimos ipsa non cupiditate. Ratione, obcaecati tempora! Provident accusamus minus error quae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, veritatis? Dolorum consequatur iusto obcaecati aspernatur quam iure sunt nemo praesentium cumque dicta! Alias animi repudiandae dolorum optio quidem culpa repellendus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, minus libero sunt natus omnis excepturi ipsam blanditiis repellendus, dignissimos ipsa non cupiditate. Ratione, obcaecati tempora! Provident accusamus minus error quae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, veritatis? Dolorum consequatur iusto obcaecati aspernatur quam iure sunt nemo praesentium cumque dicta! Alias animi repudiandae dolorum optio quidem culpa repellendus.
          </p>
        </div>
      )}
    {activeTab === "imagenes" && (
        [10, 20, 30, 40,].map((index) => (
          <div
            key={index}
            className="bg-white w-1/4 p-4 rounded-lg shadow-md"
          >
            <img
              src={`/los-pericos.png`}
              alt={`Image ${index}`}
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-bold mb-2">Título del evento</h2>
            <p className="text-sm text-gray-600">
              Descripción corta del evento
            </p>
            <p className="text-sm font-medium text-gray-500">
              Fecha del evento
            </p>
          </div>
        ))
    )}
        {activeTab === "redes" && (
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <h3>Titulo</h3>
                <p className="text-sm text-gray-600 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, minus libero sunt natus omnis excepturi ipsam blanditiis repellendus, dignissimos ipsa non cupiditate. Ratione, obcaecati tempora! Provident accusamus minus error quae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, veritatis? Dolorum consequatur iusto obcaecati aspernatur quam iure sunt nemo praesentium cumque dicta! Alias animi repudiandae dolorum optio quidem culpa repellendus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, minus libero sunt natus omnis excepturi ipsam blanditiis repellendus, dignissimos ipsa non cupiditate. Ratione, obcaecati tempora! Provident accusamus minus error quae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, veritatis? Dolorum consequatur iusto obcaecati aspernatur quam iure sunt nemo praesentium cumque dicta! Alias animi repudiandae dolorum optio quidem culpa repellendus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, minus libero sunt natus omnis excepturi ipsam blanditiis repellendus, dignissimos ipsa non cupiditate. Ratione, obcaecati tempora! Provident accusamus minus error quae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, veritatis? Dolorum consequatur iusto obcaecati aspernatur quam iure sunt nemo praesentium cumque dicta! Alias animi repudiandae dolorum optio quidem culpa repellendus.
        </p>
            </div>
    )}
    </Link>
  )}
</div>
    </div>
  )
}

export default page