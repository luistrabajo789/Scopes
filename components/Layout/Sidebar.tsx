import Link from "next/link";

import React from "react";

import { LayoutProps } from "./Layout";

export default function Sidebar({ children }: LayoutProps) {
  function openNav() {
    const mySidebar = document.getElementById("mySidebar");
    mySidebar?.classList.toggle("hidden");
    mySidebar?.classList.toggle("block");
  }

  return (
    <aside className="flex ">
      <nav id="mySidebar" className="h-screen text-white w-72 pt-12 block">
        <ul
          id="ulSidenav"
          className="grid grid-cols-12 place-content-center py-20  text-center "
        >
          <Link className="col-span-12" href="/dashboard/agendar/datos">
            <li className=" hover:bg-stone-800 h-20 grid place-content-center">
              Agendar cita{" "}
            </li>
          </Link>

          <Link className="col-span-12" href="/dashboard/historial/consultas">
            <li className="   hover:bg-stone-800 h-20 grid place-content-center">
              Historial de consultas
            </li>
          </Link>

          <Link className="col-span-12" href="/dashboard/compras">
            <li className="  hover:bg-stone-800 h-20 grid place-content-center">
              Historial compras{" "}
            </li>
          </Link>

          <Link className="col-span-12" href="/dashboard/perfil">
            <li className="   hover:bg-stone-800 h-20 grid place-content-center">
              Perfil{" "}
            </li>
          </Link>

          <Link className="col-span-12" href="/api/auth/signout">
            <li className="   hover:bg-stone-800 h-20 grid place-content-center">
              Cerrar Sesion{" "}
            </li>
          </Link>
        </ul>
      </nav>

      <div
        id="btnSideBar"
        onClick={openNav}
        className="w-7 text-white right-0 h-screen grid place-content-center border-l border-stone-500"
      >
        ||
      </div>

      <div
        id="main"
        className="h-screen w-full pt-20  lg:px-7 bg-gray-200 overflow-y-auto"
      >
        <div className="w-full  flex justify-center p-2  sm:p-5 md:p-7">
          {children}
        </div>
      </div>
    </aside>
  );
}
