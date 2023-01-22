import Image from "next/image";
import React from "react";
import bg3 from "public/bg3.jpg";
import Link from "next/link";
import Layout from "components/Layout/Layout";
import Register from "components/LoginRegister/Register";
import { GetServerSideProps } from "next";
import { authOptions } from "./api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth";

export default function registro() {

  return (
    <Layout>
      <section id="registro" className="">
        <Image
          className="absolute inset-0  object-cover w-full h-screen"
          src={bg3}
          alt="background registro"
        />
        <div className="relative bg-opacity-75 bg-deep-purple-accent-700 bg-black/50 ">

          <div className="relative px-4 py-16 mx-auto overflow-hidden bg-black/15 sm:bg-transparent sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              {/* Titles */}
              <div className="inLeft w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h1 className="title-font   font-medium text-3xl text-secondary-100">
                  ¿Que beneficios tiene el registro?
                </h1>
                <li className="leading-relaxed mt-4 text-white text-lg">
                  Toma de datos de entrada una unica vez, El proceso sera mas
                  rapido y eficiente.
                </li>
                <li className="leading-relaxed mt-4 text-white text-lg">
                  Se genera un bitacora de tu equipo en el cual podra ver el
                  historial de consultas solicitudes hechas y los detalles.
                </li>
                <li className="leading-relaxed mt-4 text-white text-lg">
                  Seguimiento personalizado y programacion de mantenimiento.
                </li>
                <p className="text-white text-lg">
                  Ya tienes un cuenta?{" "}
                  <Link
                    href="#!"
                    aria-label=""
                    className="inline-flex py-10 sm:pb-5 items-center text-lg tracking-wider transition-colors duration-200 text-secondary-100 hover:text-primary-100"
                  >
                    Inicia sesion
                    <svg
                      className="inline-block w-3 ml-2"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                    >
                      <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg>
                  </Link>
                </p>
              </div>

              {/* Form */}
              <div className="inRight w-full pt-10 max-w-xl xl:px-8 xl:w-5/12">
              <Register/>
              </div>
            </div>
          </div>
        </div>
      </section>
 
    </Layout>
  );
}
 export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(
    context.req, 
    context.res,
    authOptions
  );
  if (session?.user) {
    return{
      redirect:{
        destination: "/dashboard/agendar/datos",
        permanent: false
      }
    }
  }
  return {
    props: {
      session,
    },
  };
 }