import Layout from "components/Layout/Layout";
import React from "react";
import Link from "next/link";

export default function empresa() {
  return (
    <Layout>
      <section className="text-primary h-screen grid place-content-center text-center lg:px-72">
        <div className="bg-white/90 shadow-lg shadow-stone-600 p-10 rounded-md">
          <Link href="/">
            <h1 className=" uppercase font-bold text-4xl mb-10">Scopes</h1>
          </Link>
          <p className="leading-relaxed text-lg">
            Somos una empresa de servicio técnico que con nuestros más de 13
            años solucionando problemas de computadores, nos hemos convertido en
            expertos de mantenimiento, limpieza, arreglo de computadores y
            reparación de ordenadores de escritorio y portátiles de todas las
            marcas. Contamos con un equipo de técnicos de computadoras a
            domicilio y remoto que más allá de reparar tu computador, te enseña
            a sacarle el máximo rendimiento a la máquina.
          </p>
          <span className="inline-block h-1 w-10 rounded bg-gray-500 mt-8 mb-6"></span>
        </div>
      </section>
    </Layout>
  );
}
