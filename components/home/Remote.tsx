import React from "react";

import Image from "next/image";
import Link from "next/link";
import bg2 from "public/bg2.jpg";

export default function Remote() {
  return (
    <section className="text-gray-600 body-font">
      <h1 className="sm:text-3xl text-2xl font-medium title-font  text-gray-900 text-center">
        ¿Como funciona?
      </h1>

      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary-100 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="5" r="3"></circle>
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  PASO 1: REGISTRO
                </h2>
                <p className="leading-relaxed">
                  Con el registro solo te pediran los datos de entrada una sola
                  vez y se realizara un historial de fallos en tu
                  equipo. podras realizarlo mediante este enlace{" "}
                  <Link className="text-primary-100" href="#header">
                    Registro
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  PASO 2: DIAGNOSTICO INICIAL
                </h2>
                <p className="leading-relaxed">
                  Se te llevara a un formulario con los problemas mas
                  frecuentes, en el cual podras ver y seleccionar el que poodria
                  ser el tuyo.
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary-100 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  PASO 3: CONSULTA DE EMERGENCIA O AGENDAMIENTO
                </h2>
                <p className="leading-relaxed">
                  Podra seleccionar el metodo de agendamiento, pero recuerde que
                  la opcion de atencion inmediata o emergencia tiene un costo
                  adicional, una vez finalizado este paso debera cancelar el
                  valor del servicio
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  PASO 4: SOPORTE TECNICO
                </h2>
                <p className="leading-relaxed">
                  El dia de la cita, para llevar acabo el servicio debera
                  descargar e instalar el software, uno de nuestros tecninos le
                  guiara en el proceso.
                </p>
              </div>
            </div>
            <div className="flex relative">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary-100 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  FIN
                </h2>
                <p className="leading-relaxed">
                  Una vez solucionado y verficado el proceso, podra acceder a su
                  cuenta y vera los datos de su equipo asi como el historial de
                  consulta.
                </p>
              </div>
            </div>
          </div>
          <Image
            className="lg:w-3/5 md:w-1/2 object-cover rounded-lg md:mt-0 mt-12"
            src={bg2}
            alt="step"
          />
        </div>
      </div>
    </section>
  );
}
