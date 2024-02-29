import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'

const DashboardHeader = () => {
  const [userName, setUserName] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null);

  useEffect(() => {
    // Obtener el nombre de usuario desde localStorage
    const name = localStorage.getItem('userName')
    setUserName(name)

    // Agregar event listener para cerrar el menú cuando se hace clic fuera de él
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
    // Verificar si el clic se produjo dentro del menú o en el nombre de usuario
    if (menuRef.current && !menuRef.current.contains(event.target) && event.target.textContent !== `Bienvenido, ${userName}`) {
        // Cerrar el menú si el clic se produce fuera de él o en el nombre de usuario
        setMenuOpen(false);
    }
};

  return (
    <header className="flex justify-between items-center bg-gray-50 shadow-md p-4">
      <div className="flex justify-between items-center w-full" ref={menuRef}>
        <div className="text-xl font-bold mr-10">
          <Link href="/dashboard">
            <FiArrowLeft />
          </Link>
        </div>
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
            {/* Agrega aquí la opción de "Favoritos" con su correspondiente función de manejo de clic */}
          </div>
        )}
      </div>
    </header>
  )
}

export default DashboardHeader
