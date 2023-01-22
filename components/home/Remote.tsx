import React from "react";

import Image from "next/image";
import Link from "next/link";
import bg2 from "public/bg2.jpg";

export default function Remote() {
  return (
    <section className="text-gray-600 body-font text-sm">
      <h1 className="sm:text-3xl text-2xl font-medium title-font  text-gray-900 text-center">
        ¿Cómo funciona?
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
                <h2 className="font-medium title-font  text-gray-900 mb-1 tracking-wider">
                  PASO 1: REGISTRO
                </h2>
                <p className="leading-relaxed">
                  Con el registro, mejoramos la eficiencia en la gestión de
                  problemas en su negocio. Podrá agendar servicios, llevar un
                  historial de consultas y realizar adquisiciones de manera más
                  fácil y rápida. Además, tendrá acceso a herramientas y
                  recursos exclusivos para mejorar la eficiencia y el
                  rendimiento de su negocio.{" "}
                  <Link className="text-primary-100" href="#header">
                    {" "}
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
                <h2 className="font-medium title-font  text-gray-900 mb-1 uppercase tracking-wider">
                  PASO 2: Identificación de Problemas y Solicitudes
                </h2>
                <p className="leading-relaxed">
                  Una vez registrado, se te llevará a un formulario donde se
                  presentan los problemas y solicitudes más comunes,
                  con la opción de seleccionar aquel que sea relevante y pueda
                  solucionar tu problema, duda o pregunta.
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
                <h2 className="font-medium title-font   text-gray-900  tracking-wider mb-2">
                  PASO 3: AGENDAMIENTO
                </h2>
                <p className="leading-relaxed mb-2">
                  <strong>Para soporte remoto: </strong> Podrás seleccionar el
                  método de agendamiento, pero recuerda que la opción de
                  atención inmediata o emergencia tiene un costo adicional. Una
                  vez finalizado este paso, deberás cancelar el valor total del
                  servicio para que se valide la solicitud.
                </p>
                <p>
                  <strong>Para empresas:</strong> Una vez enviada la solicitud,
                  uno de nuestros asesores se comunicará contigo para entender
                  tus necesidades y desarrollar una propuesta o cotización
                  personalizada.
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
                <h2 className="font-medium title-font   text-gray-900 mb-1 tracking-wider">
                  PASO 4: CONTACTO
                </h2>
                <p className="leading-relaxed">
                  Una vez validada su solicitud, uno de nuestros técnicos o
                  asesores se pondrá en contacto con usted para confirmar la
                  fecha y hora de la cita. Se procederá a indentificar el
                  problema para brindarle la mejor solucion, y se dará por
                  finalizado el proceso.
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
                <h2 className="font-medium title-font   text-gray-900 mb-1 tracking-wider">
                  PASO 5: SEGUIMIENTO Y REGISTRO
                </h2>
                <p className="leading-relaxed">
                Llevaremos un registro detallado de la resolución del problema y seguiremos trabajando contigo para asegurarnos de que tu negocio está funcionando al máximo rendimiento y cumpliendo tus necesidades y requerimientos. Esta bitácora de seguimiento estará disponible en tu cuenta para que puedas acceder a ella en cualquier momento.
                </p>
                <Link className="btn-primary my-4" href="#header">
                  Registrarse ahora
                </Link>
              </div>
            </div>
          </div>
          <Image
            className="lg:w-3/5 md:w-1/2 object-cover   md:mt-0 mt-12"
            src={bg2}
            alt="step"
          />
        </div>
      </div>
    </section>
  );
}
