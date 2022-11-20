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
        onClick={openNav}
        id="mySidebar"
        className="sidebar h-screen w-10  pt-16 shadow-xl"
      >
        <ul id="ulSidenav" className="flex flex-col justify-around  px-7 py-20 h-full">
          <li className="hidden">
            <Link href='/dashboard/agendar'>Agendar cita</Link>
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

      <div id="main" className="h-screen w-full pt-24  lg:px-10 bg-gray-200 overflow-y-auto">
      <div className="w-full bg-slate-600 flex justify-center p-2 sm:p-10">
        {children}
        </div>
      </div>
    </aside>
  );
}

