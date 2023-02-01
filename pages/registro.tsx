import React from "react";

import Link from "next/link";
import Layout from "components/Layout/Layout";
import Register from "components/LoginRegister/Register";
import { GetServerSideProps } from "next";
import { authOptions } from "./api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth";

export default function registro() {
  return (
    <Layout>
      <section id="registro" className="px-7 sm:px-14 md:px-20 py-28 text-white  ">
        <div className="grid grid-cols-12 shadow-lg shadow-stone-600 bg-gray-700/75">
          {/* Titles */}
          <div className="grid place-content-center p-7 lg:px-10 col-span-12  lg:col-span-7">
            <h1 className="text-center  font-medium text-2xl mb-4 lg:mb-10">
              ¿Que beneficios tiene el registro?
            </h1>
            <li className="leading-relaxed mb-4 ">
              Toma de datos de entrada una unica vez, El proceso sera mas rapido
              y eficiente.
            </li>
            <li className="leading-relaxed mb-4  ">
              Se genera un bitacora de tu equipo en el cual podra ver el
              historial de consultas solicitudes hechas y los detalles.
            </li>
            <li className="leading-relaxed mb-4  ">
              Seguimiento personalizado y programacion de mantenimiento.
            </li>

          </div>

          {/* Form */}
          <div className="col-span-12 lg:col-span-5">
            <Register />
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
    return {
      redirect: {
        destination: "/dashboard/agendar/datos",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};
