'use client'

import Header from '@/components/Header'
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import Image from 'next/image'

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Obtener los valores del formulario
    const email = e.target.elements.email.value
    const password = e.target.elements.password.value

    // Construir el objeto de datos a enviar al backend
    const userData = {
      email,
      password,
    }

    try {
      // Enviar los datos al backend para la verificación
      const response = await fetch(
        'https://c16-02-m-node-reactv2.onrender.com/user/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        }
      )

      if (response.ok) {
        // Si la respuesta es exitosa, obtener el nombre de usuario desde la respuest
        const data = await response.json()
        const { nombre, favoritos, id } = data.user
        // console.log({nombre});
        // Almacenar el nombre de usuario en localStorage
        localStorage.setItem('userId', id)
        // console.log(id);
        localStorage.setItem('userName', nombre)
        localStorage.setItem('favorites', JSON.stringify(favoritos))
        // Si la respuesta es exitosa, redirigir al usuario a la página de dashboard
        window.location.href = '/dashboard'
      } else {
        // Si la respuesta es un error, mostrar un mensaje de error al usuario
        console.error('Error al iniciar sesión')
      }
    } catch (error) {
      console.error('Error al enviar los datos al backend', error)
    }
  }

  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="text-6xl inter-regular mb-4">Club Festival</h1>
          <Image
            src="logo.svg"
            alt="Logo"
            className="mx-auto mb-4"
            width={250}
            height={250}
          />
          <form className="w-full max-w-sm mx-auto" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 mb-2 inter-semibold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-400 px-4 py-2 rounded-md inter-regular"
              />
            </div>
            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block text-gray-700 mb-2 inter-semibold"
              >
                Contraseña
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="w-full border border-gray-400 px-4 py-2 rounded-md pr-10 inter-regular"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-1/2 right-2 transform translate-y-1/2 text-gray-500 focus:outline-none"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <button
              type="submit"
              className="bg-pink-300 bg-opacity-80 text-gray-800 py-2 px-4 rounded-lg mr-4 inter-semibold"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginPage
