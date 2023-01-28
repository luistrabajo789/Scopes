import Image from "next/image";
import Link from "next/link";
import React, { RefObject } from "react";

import Register from "components/LoginRegister/Register";
import { useSession } from "next-auth/react";

export default function Header() {
  const { data: session, status } = useSession();

  return (
    <section id="header" className="text-white bg-black/10">
      <div className="relative h-screen ">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 162"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>

        <div className="x-responsive relative grid grid-cols-12 m-auto pt-36 bg-black/15 sm:bg-transparent    ">
          {/* Titles */}
          <div className="lg:col-span-8 col-span-12 inLeft text-center lg:text-left  w-full lg:mt-14">
            <h1 className="text-white uppercase font-bold mb-4 text-xl">
              Scopes
            </h1>
            <h2 className="mb-6 font-sans text-white text-2xl md:text-4xl font-bold tracking-tight">
              Soluciones Tecnológicas
            </h2>
            <p className=" mb-4  md:text-xl lg:pr-20">
              Llevamos tu negocio al siguiente nivel con nuestras soluciones
              tecnológicas innovadoras. Desde la creación de sitios web hasta la
              reparación de equipos de computo, brindamos servicios
              personalizados para mejorar la eficiencia y el rendimiento de tu
              negocio.
            </p>
            <Link
              href="#servicios"
              aria-label=""
              className="inline-flex text-xl text-white py-5  items-center font-semibold tracking-wider transition-colors duration-200 "
            >
              Conocer más
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </Link>
          </div>

          {/* Form */}
          <div className="hidden lg:block md:col-span-4  col-span-12 inRight  relative">
            {session?.user ? "" : <Register />}
          </div>
        </div>
      </div>
    </section>
  );
}
