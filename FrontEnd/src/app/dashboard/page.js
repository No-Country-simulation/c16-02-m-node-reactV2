'use client'

import Footer from '@/components/Footer'
import { fetchEventos } from '@/redux/features/eventSlice'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'

function page() {
  const [activeTab, setActiveTab] = useState('marzo')

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  const dispatch = useDispatch()

  // Obtener la lista de eventos del estado de Redux
  const events = useSelector((state) => state.event.eventos)

  useEffect(() => {
    dispatch(fetchEventos())
  }, [dispatch])

  const [favoritos, setFavoritos] = useState(true)

  const handleFav = () => {
    setFavoritos(!favoritos)
  }

  // Filtrar eventos según el mes seleccionado
  const eventosFiltrados = events.filter((evento) => {
    const fecha = evento.fecha.substring(0, 7) // Obtiene el año y el mes (formato: "año-mes")
    const mesSeleccionado = activeTab === 'marzo' ? '2024-03' : '2024-04' // Cambia 'marzo' por 'abril' si es necesario
    return fecha === mesSeleccionado
  })

  const [userName, setUserName] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null);

  useEffect(() => {
    // Obtener el nombre de usuario desde localStorage
    const name = localStorage.getItem('userName')
    setUserName(name)

     // Agregar event listener para cerrar el menú cuando se hace click fuera de él
     document.addEventListener('click', handleDocumentClick);

     return () => {
         // Eliminar event listener cuando el componente se desmonta
         document.removeEventListener('click', handleDocumentClick);
     };
  }, [])

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }

  const handleLogout = () => {
    // Eliminar el nombre de usuario de localStorage
    localStorage.removeItem('userName')
    // Redirigir al usuario al inicio de sesión
    window.location.href = '/login'
  }

  const handleFavorites = () => {
    // Redirigir al usuario al inicio de sesión
    window.location.href = '/favorites'
  }

  const handleDocumentClick = (event) => {
    // Verificar si el click se produjo dentro del menú o en el nombre de usuario
    if (menuRef.current && !menuRef.current.contains(event.target) && event.target.textContent !== `Bienvenido, ${userName}`) {
        // Cerrar el menú si el clic se produce fuera de él o en el nombre de usuario
        setMenuOpen(false);
    }
};

  return (
    <div>
      <header className="flex justify-between items-center bg-gray-50 shadow-md p-4">
        <div className="flex justify-end items-center w-full" ref={menuRef}>
          <p>
            Bienvenido, <span onClick={handleMenuToggle} className="cursor-pointer text-red-500 font-bold">{userName}</span>
          </p>
          {menuOpen && (
            <div className="absolute right-0 top-10 mt-2 w-48 bg-white border rounded-md shadow-lg">
              <button
                onClick={handleFavorites}
                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                Favoritos
              </button>
              <button
                onClick={handleLogout}
                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                Cerrar Sesión
              </button>
            </div>
          )}
        </div>
      </header>
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
            <div href={'/festival'} className="flex justify-center space-x-4">
              {eventosFiltrados.map((evento) => (
                <div
                  key={evento.id}
                  className="bg-white w-1/4 p-4 rounded-lg shadow-md"
                >
                  <Link
                    href={{
                      pathname: `/${evento.id}`,
                      query: { event: JSON.stringify(evento) },
                    }}
                  >
                    <Image
                      src={'/la-beriso.png'}
                      alt={`${evento.nombre}`}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                      width={200}
                      height={200}
                    />
                  </Link>
                  <div className="flex justify-between items-baseline">
                    <Link
                      href={{
                        pathname: `/${evento.id}`,
                        query: { event: JSON.stringify(evento) },
                      }}
                    >
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
                    Fecha: {new Date(evento.fecha).toISOString().split('T')[0]}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div href={'/festival'} className="flex justify-center space-x-4">
              {eventosFiltrados.map((evento) => (
                <div
                  key={evento.id}
                  className="bg-white w-1/4 p-4 rounded-lg shadow-md"
                >
                  <Link
                    href={{
                      pathname: `/${evento.id}`,
                      query: { event: JSON.stringify(evento) },
                    }}
                  >
                    <img
                      src={'/la-beriso.png'}
                      alt={`Image ${evento.id}`}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                  </Link>
                  <div className="flex justify-between items-baseline">
                    <Link
                      href={{
                        pathname: `/${evento.id}`,
                        query: { event: JSON.stringify(evento) },
                      }}
                    >
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
                    Fecha: {new Date(evento.fecha).toISOString().split('T')[0]}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default page
