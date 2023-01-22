import Link from "next/link";
import React from "react";

export default function Servicios() {
  return (
    <section id="servicios" className="text-gray-600 body-font text-sm">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Nuestros Servicios
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Conoce las características y el estado de tu equipo.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="text-md text-gray-900 font-medium title-font mb-2">
              Creación de sitios web profesionales:
              </h2>
              <p className="leading-relaxed ">
              Ofrecemos servicios de diseño y desarrollo de sitios web personalizados para adaptarse a las necesidades específicas de su negocio. Nuestros sitios web son atractivos, fáciles de usar y están optimizados para el SEO.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <h2 className="text-md text-gray-900 font-medium title-font mb-2">
              Reparación y optimización de equipos de computo:
              </h2>
              <p className="leading-relaxed ">
              Ofrecemos servicios de reparación y optimización de equipos de computo para resolver problemas comunes y mejorar el rendimiento de su equipo.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h2 className="text-md text-gray-900 font-medium title-font mb-2">
              Consultoría tecnológica:
              </h2>
              <p className="leading-relaxed ">
              Ofrecemos asesoría, capcitacion o consultoría tecnológica para ayudarle a entender las tendencias y las mejores prácticas en tecnología y a tomar decisiones informadas sobre sus inversiones en tecnología.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                </svg>
              </div>
              <h2 className="text-md text-gray-900 font-medium title-font mb-2">
              Capacitación tecnológica
              </h2>
              <p className="leading-relaxed ">
              Ofrecemos asesoría y capacitación para mejorar el conocimiento y habilidades en tecnología de nuestros clientes. Diseñamos capacitaciones personalizadas para adaptarse a las necesidades específicas de cada negocio y aseguramos el correcto funcionamiento de su equipo y su negocio.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                </svg>
              </div>
              <h2 className="text-md text-gray-900 font-medium title-font mb-2">
              Adquisicion, instalacion y actualiacion de equipos tecnológicos:
              </h2>
              <p className="leading-relaxed ">
              Ofrecemos servicios completos de adquisición, instalación y actualización de equipos tecnológicos para mejorar el rendimiento de su negocio, así como una amplia variedad de componentes y accesorios de alta calidad para mejorar o reemplazar partes dañadas. Nuestros servicios aseguran el correcto funcionamiento de su equipo y su negocio.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h2 className="text-md text-gray-900 font-medium title-font mb-2">
              Soporte técnico remoto:
              </h2>
              <p className="leading-relaxed ">
              Ofrecemos soporte técnico remoto para ayudarle a resolver problemas con su equipo a través de una conexión en línea. Con nuestro soporte técnico remoto, uno de nuestros expertos en tecnología podrá conectarse a su equipo a través de internet y ayudarlo a resolver cualquier problema que pueda tener, sin la necesidad de que un técnico vaya a su ubicación física.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto grid place-content-center">
        <Link  href='/registro' className="flex mx-auto mt-16 text-white max-w-xs text-center bg-primary-100 border-0 py-2 px-8 focus:outline-none hover:bg-secondary-100  rounded-md text-md">
    Quiero registrarme
        </Link>
        </div>
      </div>
      
    </section>
  );
}
