import Layout from "components/Layout/Layout";
import Image from "next/image";
import React from "react";
import logo from "public/Logo.png";
import Link from "next/link";

export default function empresa() {
  return (
    <Layout>
      <section className="text-white body-font">
        <div className="container px-5 py-36 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center ">
            <Link href="/">
              <h1 className=" uppercase font-bold text-4xl my-10">Scopes</h1>
            </Link>
            <p className="leading-relaxed text-lg">
              Somos una empresa de servicio técnico que con nuestros más de 13
              años solucionando problemas de computadores, nos hemos convertido
              en expertos de mantenimiento, limpieza, arreglo de computadores y
              reparación de ordenadores de escritorio y portátiles de todas las
              marcas. Contamos con un equipo de técnicos de computadoras a
              domicilio y remoto que más allá de reparar tu computador, te
              enseña a sacarle el máximo rendimiento a la máquina.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-white mt-8 mb-6"></span>
            <h2 className="font-medium title-font tracking-wider text-sm">
              LocalHost
            </h2>
            <p className="">Soluciones Informaticas</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
