'use client'

import { useEffect, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import DashboardHeader from '@/components/HeaderDashboard'
import Footer from '@/components/Footer'
import Link from 'next/link'

function FavoritosPage() {
  const [favoritos, setFavoritos] = useState([])
  const [eventos, setEventos] = useState([])
  const [userId, setUserId] = useState(null)
  const [noFavoritos, setNoFavoritos] = useState(false)

  useEffect(() => {
    // Obtener el ID de usuario y nombre del localStorage
    const storedUserId = localStorage.getItem('userId')
    setUserId(storedUserId)

    // Obtener la lista de IDs de eventos favoritos del usuario desde el localStorage
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || []
    setFavoritos(storedFavorites)

    // Realizar una solicitud al backend para obtener la información de los eventos favoritos
    fetch('http://localhost:3001/event')
      .then((response) => response.json())
      .then((data) => {
        // Filtrar los eventos que coinciden con los IDs de favoritos del usuario
        const eventosFavoritos = data.filter((evento) =>
          storedFavorites.includes(evento.id)
        )
        setEventos(eventosFavoritos)

        // Verificar si no hay eventos favoritos y mostrar un mensaje
        if (eventosFavoritos.length === 0) {
          setNoFavoritos(true)
        }
      })
      .catch((error) => console.error('Error al obtener los eventos:', error))
  }, [])

  const handleToggleFavorite = async (id) => {
    try {
      // console.log('Evento ID enviado al backend:', id)
      // Verificar si el evento está en la lista de favoritos del usuario
      const isFavorite = favoritos.includes(id)

      // Enviar la solicitud al servidor para actualizar los favoritos del usuario
      let response
      if (isFavorite) {
        // Si el evento ya está en favoritos, eliminarlo
        response = await fetch(
          `http://localhost:3001/user/${userId}/favorites-delete`,
          {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ eventId: id }),
          }
        )
      } else {
        // Si el evento no está en favoritos, agregarlo
        response = await fetch(
          `http://localhost:3001/user/${userId}/favorites`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ eventId: id }),
          }
        )
      }

      // Verificar si la solicitud fue exitosa
      if (!response.ok) {
        throw new Error('Error al enviar la solicitud al servidor')
      }

      // Actualizar la lista de favoritos del usuario localmente
      const updatedFavorites = isFavorite
        ? favoritos.filter((fav) => fav !== id)
        : [...favoritos, id]
      setFavoritos(updatedFavorites)

      // Actualizar la lista de favoritos en localStorage
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites))

      // Actualizar la lista de eventos mostrados
      const updatedEventos = eventos.filter((evento) =>
        updatedFavorites.includes(evento.id)
      )
      setEventos(updatedEventos)

      // Verificar si no hay eventos favoritos y mostrar un mensaje
      if (updatedEventos.length === 0) {
        setNoFavoritos(true)
      }
    } catch (error) {
      console.error('Error al actualizar los favoritos:', error)
    }
  }

  return (
    <div>
      <DashboardHeader />
      <h1 className="text-3xl font-bold mb-8 mt-8">Favoritos</h1>
      {noFavoritos ? (
        <p className="text-xl text-gray-500">
          Todavía no tienes eventos favoritos.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventos.map((evento) => (
            <div key={evento.id} className="bg-white p-6 rounded-lg shadow-md">
              <Link   href={{
                      pathname: `/${evento.id}`,
                      query: { event: JSON.stringify(evento) },
                    }}>
              <img
                src="/la-beriso.png"
                alt={evento.nombre}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              </Link>
              <div className="flex justify-between items-baseline">
                <Link    href={{
                      pathname: `/${evento.id}`,
                      query: { event: JSON.stringify(evento) },
                    }}>
                <h2 className="text-lg font-bold mb-2">{evento.nombre}</h2>
                </Link>
                <button
                  className="mt-2 text-gray-500"
                  onClick={() => handleToggleFavorite(evento.id)}
                >
                  {favoritos.includes(evento.id) ? (
                    <FaHeart className="w-6 h-6 text-red-500" />
                  ) : (
                    <FaRegHeart className="w-6 h-6 text-red-500" />
                  )}
                </button>
              </div>
              <p className="text-sm text-gray-600">{evento.descripcion}</p>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </div>
  )
}

export default FavoritosPage
