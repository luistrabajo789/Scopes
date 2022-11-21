/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Perfil() {
  return (
    <form
      action=""
      className="container flex flex-col mx-auto space-y-12 ng-untouched shadow-md ng-pristine ng-valid"
    >
      <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
        <div className="space-y-2 col-span-full lg:col-span-1">
          <p className="font-medium">Informacion Basica</p>
          <p className="text-xs">
            Por favor complete los siguientes datos para continuar
          </p>
        </div>
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="firstname" className="text-sm">
              Nombres
            </label>
            <input
              id="name"
              name="name"
              type="text"
     
              className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 text-gray-900"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="lastname" className="text-sm">
              Telefono
            </label>
            <input
            name="phone"
              id="phone"
              type="text"
              placeholder="3121231234"
              className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 text-gray-900"
            />
          </div>
          <div className="col-span-full sm:col-span-3">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
            name="email"
              id="email"
              type="email"
              placeholder="Email"
              className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 text-gray-900"
            />
          </div>
          <div className="col-span-full">
            <label htmlFor="address" className="text-sm">
              Direccion
            </label>
            <input
            name="address"
              id="address"
              type="text"
              placeholder=""
              className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 text-gray-900"
            />
          </div>
          <div className="col-span-full sm:col-span-2">
            <label htmlFor="city" className="text-sm">
              Ciudad
            </label>
            <input
              id="city"
              type="text"
              placeholder=""
              className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 text-gray-900"
            />
          </div>
          <div className="col-span-full sm:col-span-2">
            <label htmlFor="state" className="text-sm">
              Departamento
            </label>
            <input
              id="state"
              type="text"
              placeholder=""
              className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 text-gray-900"
            />
          </div>
 
        </div>
      </div>

    </form>
  );
}
