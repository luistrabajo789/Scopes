import Layout from "components/Layout/Layout";
import Link from "next/link";
import React from "react";

export default function login() {
  return (
    <Layout>
      <section className="text-gray-600 body-font relative">
        <div className="container  py-28 w-1/3 m-auto ">
        <div className="bg-white rounded-md shadow-2xl p-7 sm:px-8 sm:py-12 text-gray-600">
      <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
        Iniciar Sesion
      </h3>
      <form>
 
        <div className="mb-1 sm:mb-2">
          <label htmlFor="lastName" className="inline-block mb-1 font-medium">
            Email
          </label>
          <input
            autoComplete="off"
            required
            type="email"
            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-secondary-100 focus:outline-none focus:shadow-outline"
            id="lastName"
            name="lastName"
          />
        </div>
        <div className="mb-1 sm:mb-2">
          <label htmlFor="email" className="inline-block mb-1 font-medium">
            Password
          </label>
          <input
            required
            type="password"
            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-secondary-100 focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
          />
        </div>
        <div className="mt-7">
          <button type="submit" className="btn-primary">
            Registrarse
          </button>
        </div>
      </form>
    </div>
        </div>
      </section>
    </Layout>
  );
}
