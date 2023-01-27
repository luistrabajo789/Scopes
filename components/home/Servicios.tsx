import Image from "next/image";
import React from "react";
import undelete from "../../public/icons/undelete.png";
import capacitacion from "../../public/icons/capacitacion.png";
import pcrepair from "../../public/icons/pcrepair.png";
import shop from "../../public/icons/shop.png";
import tech from "../../public/icons/tech.png";
import web from "../../public/icons/web.png";

const services = [
  {
    icon: web,
    title: "Creación de sitios web profesionales",
    description:
      "Ofrecemos servicios de diseño y desarrollo de sitios web personalizados para adaptarse a las necesidades específicas de su negocio. Nuestros sitios web son atractivos, fáciles de usar y están optimizados para el SEO..",
  },
  {
    icon: pcrepair,
    title: "Mantenimiento, Reparación y optimización de equipos de computo:",
    description:
      "Ofrecemos servicios de reparación y optimización de equipos de computo para resolver problemas comunes y mejorar el rendimiento de su equipo.",
  },
  {
    icon: tech,
    title: "Consultoría tecnológica",
    description:
      "Ofrecemos asesoría, capcitacion o consultoría tecnológica para ayudarle a entender las tendencias y las mejores prácticas en tecnología y a tomar decisiones informadas sobre sus inversiones en tecnología.",
  },
  {
    icon: capacitacion,
    title: "Capacitación tecnológica",
    description:
      "frecemos asesoría y capacitación para mejorar el conocimiento y habilidades en tecnología de nuestros clientes. Diseñamos capacitaciones personalizadas para adaptarse a las necesidades específicas de cada negocio y aseguramos el correcto funcionamiento de su equipo y su negocio.",
  },
  {
    icon: shop,
    title: "Compras tecnológicas",
    description:
      "Ofrecemos servicios completos de adquisición, instalación y actualización de equipos tecnológicos para mejorar el rendimiento de su negocio, así como una amplia variedad de componentes y accesorios de alta calidad para mejorar o reemplazar partes dañadas. Nuestros servicios aseguran el correcto funcionamiento de su equipo y su negocio.",
  },

  {
    icon: undelete,
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
        <div className="grid grid-cols-12 gap-2 ">
          {services.map((service, index) => (
            <div key={index} className="col-span-4">
              <div className=" bg-black/50 h-80 flex flex-col justify-center text-center px-5 shadow-md ">
               <div className="grid place-content-center"> <Image className="object-cover"  src={service.icon} alt={service.title} /></div>
                <h2 className="text-lg    font-bold title-font my-5">
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
