import React from "react";

const services = [
  {
    icon: (
      <>
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </>
    ),
    title: "Creación de sitios web profesionales",
    description:
      "Ofrecemos servicios de diseño y desarrollo de sitios web personalizados para adaptarse a las necesidades específicas de su negocio. Nuestros sitios web son atractivos, fáciles de usar y están optimizados para el SEO..",
  },
  {
    icon: (
      <>
        <circle cx="6" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
      </>
    ),
    title: "Mantenimiento, Reparación y optimización de equipos de computo:",
    description:
      "Ofrecemos servicios de reparación y optimización de equipos de computo para resolver problemas comunes y mejorar el rendimiento de su equipo.",
  },
  {
    icon: (
      <>
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </>
    ),
    title: "Consultoría tecnológica:",
    description:
      "Ofrecemos asesoría, capcitacion o consultoría tecnológica para ayudarle a entender las tendencias y las mejores prácticas en tecnología y a tomar decisiones informadas sobre sus inversiones en tecnología.",
  },
  {
    icon: (
      <>
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </>
    ),
    title: "Capacitación tecnológica",
    description:
      "frecemos asesoría y capacitación para mejorar el conocimiento y habilidades en tecnología de nuestros clientes. Diseñamos capacitaciones personalizadas para adaptarse a las necesidades específicas de cada negocio y aseguramos el correcto funcionamiento de su equipo y su negocio.",
  },
  {
    icon: (
      <>
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </>
    ),
    title: "Adquisicion, instalacion y actualiacion de equipos tecnológicos:",
    description:
      "Ofrecemos servicios completos de adquisición, instalación y actualización de equipos tecnológicos para mejorar el rendimiento de su negocio, así como una amplia variedad de componentes y accesorios de alta calidad para mejorar o reemplazar partes dañadas. Nuestros servicios aseguran el correcto funcionamiento de su equipo y su negocio.",
  },

  {
    icon: (
      <>
        <path d="M9 21V9m3-5.5V6"></path>
      </>
    ),
    title: "Recuperación de datos",
    description:
      "Ofrecemos servicios de recuperación de datos para ayudarlo a recuperar información importante que ha sido perdida debido a fallos de hardware o software.",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 bg-black/10 text-white text-sm">
      <div className="container px-5 mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-medium title-font mb-2   ">
            Nuestros Servicios
          </h1>
          <p className="lg:w-1/2 mx-auto text-lg  mb-10  ">
            Conoce las características y el estado de tu equipo.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {services.map((service, index) => (
            <div key={index} className="xl:w-1/3 md:w-1/2 p-4">
              <div className="flex flex-col   justify-center bg-black/50 p-6 lg:h-80 shadow-md ">
                <h2 className="text-lg    font-bold title-font mb-5">
                  {service.title}
                </h2>
                <p className="leading-relaxed ">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
