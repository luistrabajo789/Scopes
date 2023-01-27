import NavBar from "components/Layout/NavBar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import gifAnyDesk from '../public/anydesk.gif'

export default function instrucciones() {
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-12 bg-black/50 h-screen py-32 text-white px-10">
        <h1 className="col-span-12 text-center text-2xl font-semibold mb-5">
          Instrucciones
        </h1>

        <div className="col-span-6 p-5">
          <h3 className="my-5 text-lg font-semibold">
          Para solucionar problemas de software en equipos de computo, deberá:
          </h3>
          <ul className="flex flex-col gap-7 ">
            <li>
              <strong>1.</strong> Descargar e instalar un programa de asistencia remota de preferencia, como  <Link className="text-red-500" href='https://anydesk.com/es'>AnyDesk</Link> o <Link className="text-blue-500" href='https://www.teamviewer.com/es/'>TeamViewer</Link>.
            </li>
            <li>
              <strong>2.</strong> Una vez instalado, al abrir el programa se podrá ver el número de identificación del puesto de trabajo, el cual deberá ser proporcionado al técnico encargado, ya sea a través de un mensaje escrito o una foto, al número de teléfono 
              <strong> 305 273 8798.</strong>
            </li>
            <li>
              <strong>3.</strong> Cuando el técnico intente conectarse a su computadora, aparecerá una ventana solicitando permiso. Se debe dar permiso para que el técnico pueda manipular el equipo y ayudar a solucionar el problema.
   
            </li>
          </ul>
        </div>
        <div className="col-span-6  p-5">
            <Image src={gifAnyDesk} alt='anydesk gif'/>
        </div>
      </div>
    </>
  );
}
