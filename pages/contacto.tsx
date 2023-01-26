import Layout from "components/Layout/Layout";
import Link from "next/link";
import React from "react";
import { toastError, toastOK } from "utils/toast";

export default function Contacto() {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const values = Object.fromEntries(new FormData(e.target));

    try {
      const res = await fetch("https://formspree.io/f/moqbebvn", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const { ok } = await res.json();

      toastOK();
    } catch (error) {

      toastError();
    }
  };

  return (
    <Layout>
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-32 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.9113768201938!2d-76.52845289385394!3d3.451316198837085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x25e806522fdb14e0!2sCentro%20de%20Cali!5e0!3m2!1ses-419!2sco!4v1668890076463!5m2!1ses-419!2sco"
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  Direccion
                </h2>
                <p className="mt-1">
                  calle 15 con, Cra. 7, Cali, Valle del Cauca
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  Email
                </h2>
                <Link href="#" className="text-green-500 leading-relaxed">
                  soporte.fixpc.latam@gmail.com
                </Link>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  Telefono
                </h2>
                <p className="leading-relaxed">305 273 8798</p>
              </div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="lg:w-1/3 md:w-1/2 p-5 rounded-md bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
          >
            <h2 className="text-gray-900 text-lg text-center mb-1 font-medium title-font">
              ¿Tienes alguna pregunta?
            </h2>
            <p className="text-sm text-center mb-5 text-gray-700">
              Escribenos y te responderemos dentro de las 24 horas habiles
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-700"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="btn-primary">Enviar</button>
            <p className="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </form>
        </div>
      </section>
    </Layout>
  );
}
