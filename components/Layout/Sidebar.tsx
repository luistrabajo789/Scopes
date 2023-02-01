import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { LayoutProps } from "./Layout";
import calendar from "../../public/icons/calendar.png";
import history from "../../public/icons/history.png";
import logout from "../../public/icons/logout.png";
import perfil from "../../public/icons/perfil.png";

export default function Sidebar({ children }: LayoutProps) {
  const router = useRouter();
  function openNav() {
    const mySidebar = document.getElementById("mySidebar");
    const btnSideBar = document.getElementById("btnSideBar");
    mySidebar?.classList.toggle("hidden");
    mySidebar?.classList.toggle("block");
    btnSideBar?.classList.toggle("hidden");
    btnSideBar?.classList.toggle("block");
  }

  return (
    <aside className="flex">
      <nav id="mySidebar" className="h-screen text-gray-700 bg-white w-72 pt-12 hidden">
        <ul
          id="ulSidenav"
          className="grid grid-cols-12 place-content-center py-20  text-center "
        >
          <Link
            className="col-span-12 h-20 grid grid-cols-12 px-5 place-content-center transition duration-700 hover:bg-gray-200"
            href="/dashboard/agendar/datos"
          >
            <Image className="col-span-2" src={calendar} alt="icon" />
            <li className="col-span-10">Agendar cita</li>
          </Link>

          <Link
            className="col-span-12 h-20 grid grid-cols-12 px-5 place-content-center transition duration-700 hover:bg-gray-200 "
            href="/dashboard/historial/consultas"
          >
            <Image className="col-span-2" src={history} alt="icon" />
            <li className="col-span-10">Historial consultas</li>
          </Link>

          <Link
            className="col-span-12 h-20 grid grid-cols-12 px-5 place-content-center transition duration-700 hover:bg-gray-200"
            href="/dashboard/compras"
          >
            <Image className="col-span-2" src={history} alt="icon" />
            <li className="col-span-10">Historial compras</li>
          </Link>

          <Link
            className="col-span-12 h-20 grid grid-cols-12 px-5 place-content-center transition duration-700 hover:bg-gray-200"
            href="/dashboard/perfil"
          >
            <Image className="col-span-2" src={perfil} alt="icon" />
            <li className="col-span-10">Perfil</li>
          </Link>

          <button
            className="col-span-12 h-20 grid grid-cols-12 px-5 place-content-center transition duration-700 hover:bg-gray-200"
            onClick={(e) => {
              signOut();
              router.push("/login");
            }}
          >
            <Image className="col-span-2" src={logout} alt="icon" />
            <li className="col-span-10 hover:text-red-500">Cerrar Sesion</li>
          </button>
        </ul>
      </nav>

      <div
        id="btnSideBar"
        onClick={openNav}
        className="w-7 text-gray-700 text-center bg-white transition duration-700 hover:bg-gray-200 right-0 h-screen  border-l border-gray-200 hidden lg:block"
      >
        <p className="" style={{ lineHeight: "calc(100vh - 0px)" }}>||</p>
      </div>

      <div
        id="main"
        className="h-screen w-full pt-24 lg:px-7 bg-white/10 overflow-y-auto"
      >
        <div className="w-full  flex justify-center p-2  sm:p-5 md:p-6">
          {children}
        </div>
      </div>
    </aside>
  );
}
