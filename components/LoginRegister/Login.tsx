import Link from 'next/link'
import React from 'react'

export default function Login() {
  return (
    <div className="bg-white rounded-md shadow-2xl p-7 sm:px-8 sm:py-12 text-gray-600">
    <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
      Iniciar Sesion
    </h3>
    <form>
      <div className="mb-1 sm:mb-2 ">
        <label
          htmlFor="firstName"
          className="inline-block mb-1 font-medium"
        >
          Nombres
        </label>
        <input
          placeholder="Ana"
          required
          type="text"
          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          id="name"
          name="firstName"
        />
      </div>
      <div className="mb-1 sm:mb-2">
        <label
          htmlFor="lastName"
          className="inline-block mb-1 font-medium"
        >
          Telefono
        </label>
        <input
          placeholder="Segura"
          required
          type="number"
          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          id="telefono"
          name="telefono"
        />
      </div>
      <div className="mb-1 sm:mb-2">
        <label
          htmlFor="email"
          className="inline-block mb-1 font-medium"
        >
          E-mail
        </label>
        <input
          placeholder="anasegura@gmail.com"
          required
          type="email"
          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          id="email"
          name="email"
        />
      </div>
      <div className="mt-7">
        <button type="submit" className="btn-primary">
          Registrarse
        </button>
      </div>
      <p className="text-xs text-gray-500 mt-3">
        Ya tienes un cuenta?{" "}
        <Link
          className="text-secondary-100 hover:text-primary-100"
          href="/login"
        >
          Inicia Sesion
        </Link>
      </p>
    </form>
  </div>
  )
}
