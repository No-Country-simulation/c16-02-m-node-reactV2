'use client'

import DashboardHeader from '@/components/HeaderDashboard'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

function page() {
  const [activeTab, setActiveTab] = useState('marzo')

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  // Datos de prueba para los eventos de marzo y abril
  const eventosMarzo = [
    {
      imagen: '/la-beriso.png',
      titulo: 'Título del evento 1',
      descripcion: 'Descripción corta del evento 1',
      fecha: 'Fecha del evento 1',
    },
    {
      imagen: '/la-beriso.png',
      titulo: 'Título del evento 2',
      descripcion: 'Descripción corta del evento 2',
      fecha: 'Fecha del evento 2',
    },
    {
      imagen: '/la-beriso.png',
      titulo: 'Título del evento 3',
      descripcion: 'Descripción corta del evento 3',
      fecha: 'Fecha del evento 3',
    },
    {
      imagen: '/la-beriso.png',
      titulo: 'Título del evento 4',
      descripcion: 'Descripción corta del evento 4',
      fecha: 'Fecha del evento 4',
    },
  ]

  const eventosAbril = [
    {
      imagen: '/la-vela-puerca.png',
      titulo: 'Título del evento 10',
      descripcion: 'Descripción corta del evento 10',
      fecha: 'Fecha del evento 10',
    },
    {
      imagen: '/la-vela-puerca.png',
      titulo: 'Título del evento 20',
      descripcion: 'Descripción corta del evento 20',
      fecha: 'Fecha del evento 20',
    },
    {
      imagen: '/la-vela-puerca.png',
      titulo: 'Título del evento 30',
      descripcion: 'Descripción corta del evento 30',
      fecha: 'Fecha del evento 30',
    },
    {
      imagen: '/la-vela-puerca.png',
      titulo: 'Título del evento 40',
      descripcion: 'Descripción corta del evento 40',
      fecha: 'Fecha del evento 40',
    },
  ]

  const [favoritos, setFavoritos] = useState(true)

  const handleFav = () => {
    setFavoritos(!favoritos)
  }

  return (
    <div>
      <DashboardHeader />
      <div className="flex flex-col items-start p-8">
        <h1 className="text-3xl font-bold mb-8">Próximos festivales</h1>

        <div className="w-full bg-gray-200 rounded-lg flex justify-center items-center">
          <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
            <ul className="flex flex-wrap -mb-px">
              <li className="me-2 cursor-pointer">
                <a
                  className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-red-400 hover:border-red-300 ${
                    activeTab === 'marzo'
                      ? 'border-red-600 text-red-600'
                      : 'text-gray-500'
                  }`}
                  onClick={() => handleTabChange('marzo')}
                >
                  Marzo
                </a>
              </li>
              <li className="me-2 cursor-pointer">
                <a
                  className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-red-400 hover:border-red-300 ${
                    activeTab === 'abril'
                      ? 'border-red-600 text-red-600'
                      : 'text-gray-500'
                  }`}
                  onClick={() => handleTabChange('abril')}
                >
                  Abril
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 w-full bg-red-200 h-96 rounded-lg flex justify-center items-center">
          {activeTab === 'marzo' ? (
            <div href={'/festival'} className="flex space-x-4">
              {eventosMarzo.map((evento, index) => (
                <div
                  key={index}
                  className="bg-white w-1/4 p-4 rounded-lg shadow-md"
                >
                  <Link href={'/festival'}>
                    <Image
                      src={evento.imagen}
                      alt={`Image ${index}`}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                      width={200}
                      height={200}
                    />
                  </Link>
                  <div className="flex justify-between items-baseline">
                    <Link href={'/festival'}>
                      <h2 className="text-lg font-bold mb-2">
                        {evento.titulo}
                      </h2>
                    </Link>
                    <button
                      className="mt-2 flex items-center text-gray-500"
                      onClick={handleFav}
                    >
                      {favoritos ? (
                        <FaHeart className="w-4 h-4 text-red-500" />
                      ) : (
                        <FaRegHeart className="w-4 h-4 text-red-500" />
                      )}
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">{evento.descripcion}</p>
                  <p className="text-sm font-medium text-gray-500">
                    {evento.fecha}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div href={'/festival'} className="flex space-x-4">
              {eventosAbril.map((evento, index) => (
                <div
                  key={index}
                  className="bg-white w-1/4 p-4 rounded-lg shadow-md"
                >
                  <Link href={'/festival'}>
                  <img
                    src={evento.imagen}
                    alt={`Image ${index}`}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  </Link>
                  <div className="flex justify-between items-baseline">
                    <Link href={'/festival'}>
                  <h2 className="text-lg font-bold mb-2">{evento.titulo}</h2>
                    </Link>
                    <button
                      className="mt-2 flex items-center text-gray-500"
                      onClick={handleFav}
                    >
                      {favoritos ? (
                        <FaHeart className="w-4 h-4 text-red-500" />
                      ) : (
                        <FaRegHeart className="w-4 h-4 text-red-500" />
                      )}
                    </button>
                  </div>
                  <p className="text-sm text-gray-600">{evento.descripcion}</p>
                  <p className="text-sm font-medium text-gray-500">
                    {evento.fecha}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default page
