'use client'

import DashboardHeader from '@/components/HeaderDashboard'
import { fetchEventos } from '@/redux/features/eventSlice'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'

function page() {
  const [activeTab, setActiveTab] = useState('marzo')

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

    const dispatch = useDispatch()

    // Obtener la lista de eventos del estado de Redux
   const events = useSelector((state) => state.event.eventos);

   useEffect(() => {
    dispatch(fetchEventos());
   }, [dispatch])


  const [favoritos, setFavoritos] = useState(true)

  const handleFav = () => {
    setFavoritos(!favoritos)
  }

// Filtrar eventos según el mes seleccionado
const eventosFiltrados = events.filter((evento) => {
  const fecha = evento.fecha.substring(0, 7); // Obtiene el año y el mes (formato: "año-mes")
  const mesSeleccionado = activeTab === 'marzo' ? '2024-03' : '2024-04'; // Cambia 'marzo' por 'abril' si es necesario
  return fecha === mesSeleccionado;
});

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
              {eventosFiltrados.map((evento) => (
                <div
                  key={evento.id}
                  className="bg-white w-1/4 p-4 rounded-lg shadow-md"
                >
                {/* <Link href={`/${evento.id}`}>
                    <Image
                      src={evento.imagen}
                      alt={`${evento.nombre}`}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                      width={200}
                      height={200}
                    />
                  </Link> */}
                  <div className="flex justify-between items-baseline">
                    <Link href={{
                      pathname: `/${evento.id}`,
                      query: { event: JSON.stringify(evento)}
                    }}>
                      <h2 className="text-lg font-bold mb-2">
                        {evento.nombre}
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
              {eventosFiltrados.map((evento) => (
                <div
                  key={evento.id}
                  className="bg-white w-1/4 p-4 rounded-lg shadow-md"
                  onClick={() => handleCardClick(evento)}
                >
                  {/* <Link href={`/${evento.id}`}>
                  <img
                    src={evento.imagen}
                    alt={`Image ${index}`}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  </Link> */}
                  <div className="flex justify-between items-baseline">
                    <Link href={`/${evento.id}`}>
                  <h2 className="text-lg font-bold mb-2">{evento.nombre}</h2>
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
