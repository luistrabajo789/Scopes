import Image from "next/image";
import Link from "next/link";
import React, { RefObject } from "react";
import bgHeader from "public/bgHeader.jpg";
import { useParallax } from "react-scroll-parallax";
import Register from "components/LoginRegister/Register";
import { useSession } from "next-auth/react";

export default function Header() {

  const { data: session, status } = useSession();

 /* A hook that allows to create a parallax effect. */
  const item1 = useParallax<HTMLDivElement>({
    speed: -5,
  });
  const item2 = useParallax<HTMLDivElement>({
    speed: -5,
  });

  return (
    <section id="header" className="">
      <Image
        src={bgHeader}
        className="absolute inset-0 z-1 object-cover w-full h-screen "
        alt=""
      />
      <div className="relative bg-black/20 h-screen ">
        
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 162"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        
        <div className="relative px-4 py-16 mx-auto overflow-hidden bg-black/15 sm:bg-transparent sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            {/* Titles */}
            <div
              ref={item1.ref}
              className="inLeft pt-24 w-full text-white  max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12"
            >
              <h2 className="max-w-lg mb-6 pt-16 font-sans text-4xl font-bold tracking-tight  marker: sm:text-5xl sm:leading-none">
                Soporte Tecnico Remoto
              </h2>
              <p className="max-w-xl mb-4 text-xl  md:text-xl">
                Servicio de reparacion de software en equipos de computo.
              </p>
              <Link
                href="/"
                aria-label=""
                className="inline-flex pb-10 sm:pb-5 items-center text-xl font-semibold tracking-wider transition-colors duration-200  hover:text-secondary-100"
              >
                Conocer mas
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
            <div
              ref={item2.ref}
              className="inRight w-full pt-10 max-w-xl xl:px-8 xl:w-5/12 {}"
            >
             {session?.user ? '': <Register /> }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
