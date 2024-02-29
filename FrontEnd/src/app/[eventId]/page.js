'use client'

import Footer from '@/components/Footer'
import DashboardHeader from '@/components/HeaderDashboard'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

function page() {
  const [activeTab, setActiveTab] = useState('integrantes')
  const [favoritos, setFavoritos] = useState(true)

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  const handleFav = () => {
    setFavoritos(!favoritos)
  }

  const searchParams = useSearchParams();
  const event = searchParams.get('event')
  const results = JSON.parse(event)
  console.log(results);

  return (
    <div>
      <DashboardHeader />
      <div className="flex flex-col items-center mt-5">
        <div className="flex justify-between w-4/5 mb-5">
          <h1 className="text-3xl font-bold mb-4">{results.nombre}</h1>
          <button
            className="mt-2 flex items-center text-gray-500"
            onClick={handleFav}
          >
            {favoritos ? (
              <FaHeart className="w-8 h-8 text-red-500" />
            ) : (
              <FaRegHeart className="w-8 h-8 text-red-500" />
            )}
          </button>
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <Image
            src="/la-beriso.png"
            alt="Imagen del evento"
            className="w-full max-w-xl h-auto rounded-lg shadow-md"
            width={700}
            height={700}
          />
        </div>
        <div className="mt-8 text-lg text-gray-700">
          <p>{results.descripcion}</p>
        </div>
        <div className="mt-8">
          <audio controls className="w-full max-w-4xl">
            <source src="/audio-del-evento.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-lg flex justify-center items-center mt-10">
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
          <ul className="flex flex-wrap -mb-px">
            <li className="me-2 cursor-pointer">
              <a
                className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-red-400 hover:border-red-300 ${
                  activeTab === 'integrantes'
                    ? 'border-red-600 text-red-600'
                    : 'text-gray-500'
                }`}
                onClick={() => handleTabChange('integrantes')}
              >
                Integrantes
              </a>
            </li>
            <li className="me-2 cursor-pointer">
              <a
                className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-red-400 hover:border-red-300 ${
                  activeTab === 'historia'
                    ? 'border-red-600 text-red-600'
                    : 'text-gray-500'
                }`}
                onClick={() => handleTabChange('historia')}
              >
                Historia
              </a>
            </li>
            <li className="me-2 cursor-pointer">
              <a
                className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-red-400 hover:border-red-300 ${
                  activeTab === 'imagenes'
                    ? 'border-red-600 text-red-600'
                    : 'text-gray-500'
                }`}
                onClick={() => handleTabChange('imagenes')}
              >
                Imágenes
              </a>
            </li>
            <li className="me-2 cursor-pointer">
              <a
                className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-red-400 hover:border-red-300 ${
                  activeTab === 'redes'
                    ? 'border-red-600 text-red-600'
                    : 'text-gray-500'
                }`}
                onClick={() => handleTabChange('redes')}
              >
                Redes
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 w-full bg-red-200 h-96 rounded-lg flex justify-center items-center">
        {activeTab && (
          <div className="flex justify-center space-x-4">
            {activeTab === 'integrantes' &&
              results.integrantes.map((evento, index) => (
                <div
                  key={index}
                  className="bg-white w-1/4 p-4 rounded-lg shadow-md"
                >
                  <Image
                    src={`/la-beriso.png`}
                    alt={`Image ${evento}`}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                    width={200}
                    height={200}
                  />
                  <h2 className="text-lg font-bold mb-2">{evento}</h2>
                </div>
              ))}
            {activeTab === 'historia' && (
              <div className="flex flex-col justify-center items-center w-1/2 h-full">
                <p className="text-sm text-gray-600 text-center">
                {results.historia}
                </p>
              </div>
            )}
            {activeTab === 'imagenes' &&
              [10, 20, 30, 40].map((index) => (
                <div
                  key={index}
                  className="bg-white w-1/4 p-4 rounded-lg shadow-md"
                >
                  <img
                    src={`/los-pericos.png`}
                    alt={`Image ${index}`}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                </div>
              ))}
            {activeTab === 'redes' && (
              <div className="flex flex-col justify-center items-center w-full h-full">
                <p className="text-sm text-gray-600 text-center">
                {results.redes}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
      <Footer/>
    </div>
  )
}

export default page
