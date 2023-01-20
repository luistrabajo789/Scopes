import CheckStep from "components/dashboard/steps/CheckStep";
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
        className="sidebar  h-screen text-gray-700 w-0 pt-14 flex"
      >
        <ul
          id="ulSidenav"
          className="flex flex-col gap-10 w-full px-7 py-20 h-full"
        >
          <li className="hidden border-b-2 border-transparent hover:border-primary-100 w-full">
            <Link href="/dashboard/agendar/datos">Agendar cita</Link>
          </li>
          <li className="hidden border-b-2 border-transparent hover:border-primary-100">
            <Link href="/dashboard/historial/consultas">
              Historial de consultas
            </Link>
          </li>
          <li className="hidden border-b-2 border-transparent hover:border-primary-100">
            <Link href="/dashboard/compras">Historial compras</Link>
          </li>
          <li className="hidden border-b-2 border-transparent hover:border-primary-100">
            <Link href="/dashboard/perfil">Perfil</Link>
          </li>
          <li className="hidden text-red-500  border-b-2 border-transparent hover:border-red-500">
            <Link href="/api/auth/signout">Cerrar Sesion</Link>
          </li>
        </ul>
      </div>

      <div
        id="btnSideBar"
        onClick={openNav}
        className="w-7 border-r-2 text-gray-600 right-0 h-screen grid place-content-center"
      >
        ||
      </div>

      <div
        id="main"
        className="h-screen w-full pt-20  lg:px-7 bg-gray-100 overflow-y-auto"
      >
        <div className="w-full  flex justify-center p-2 sm:p-5 md:px-7">

          {children}
        </div>
      </div>
    </aside>
  );
}
