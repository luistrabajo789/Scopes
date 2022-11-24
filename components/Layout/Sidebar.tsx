import Link from "next/link";

import React from "react";


import { LayoutProps } from "./Layout";

export default function Sidebar({ children }: LayoutProps) {
  function openNav() {
    const mySidebar = document.getElementById("mySidebar");

    mySidebar?.classList.toggle("openNav");

  }

  return (
    <aside className="flex">
      <div
 
        id="mySidebar"
        className="sidebar h-screen w-0 pt-16 shadow-xl flex bg-white"
      >
        <ul id="ulSidenav" className="flex flex-col justify-around  px-7 py-20 h-full">
          <li className="hidden">
            <Link href='/dashboard/agendar/datos'>Agendar cita</Link>
          </li>
          <li className="hidden">
            <Link href='/dashboard/historial'>Historial de consultas</Link>
          </li>
          <li className="hidden">
            <Link href='/dashboard/compras'>Historial compras</Link>
          </li>
          <li className="hidden">
            <Link href='/dashboard/perfil'>Perfil</Link>
          </li>
          <li className="hidden text-red-500">
            <Link href='/api/auth/signout'>Cerrar Sesion</Link>
          </li>
        </ul>
      </div>

      <div id="btnSideBar" onClick={openNav} className="w-7 bg-slate-500 right-0 h-screen grid place-content-center text-white">||</div>

      <div id="main" className="h-screen w-full pt-24  lg:px-7 bg-gray-200 overflow-y-auto">
      <div className="w-full   flex justify-center p-2 sm:p-5 md:px-7">
        {children}
        </div>
      </div>
    </aside>
  );
}

