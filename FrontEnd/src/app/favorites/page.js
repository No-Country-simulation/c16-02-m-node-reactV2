'use client'

import Footer from '@/components/Footer';
import DashboardHeader from '@/components/HeaderDashboard';
import Link from 'next/link';
import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
function FavoritosPage() {
  const [favoritos, setFavoritos] = useState([
    {
      id: 1,
      titulo: 'Card 1',
      descripcion: 'Descripción de la card 1',
      imagen: '/la-beriso.png',
      favorito: true,
    },
    {
      id: 2,
      titulo: 'Card 2',
      descripcion: 'Descripción de la card 2',
      imagen: '/los-pericos.png',
      favorito: true,
    },
  ]);

  const toggleFavorito = (id) => {
    setFavoritos(
      favoritos.map((card) =>
        card.id === id ? { ...card, favorito: !card.favorito } : card
      )
    );
  };

  return (
    <div>
        <DashboardHeader/>
      <h1 className="text-3xl font-bold mb-8 mt-8">Página de Favoritos</h1>
      <Link href={'/festival'}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favoritos.map((card) => (
          <div key={card.id} className="bg-white p-6 rounded-lg shadow-md">
             <img
              src={card.imagen}
              alt={card.titulo}
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <div className='flex justify-between items-baseline'>
            <h2 className="text-lg font-bold mb-2">{card.titulo}</h2>
             <button
              className="mt-2 text-gray-500"
              onClick={() => toggleFavorito(card.id)}
            >
              {card.favorito ? (
                <FaHeart className="w-6 h-6 text-red-500" />
              ) : (
                <FaRegHeart className="w-6 h-6 text-red-500" />
              )}
            </button>
            </div>
            <p className="text-sm text-gray-600">{card.descripcion}</p>
          </div>
        ))}
      </div>
      </Link>
      <Footer/>
    </div>
  );
}

export default FavoritosPage;
