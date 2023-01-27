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
    mySidebar?.classList.toggle("hidden");
    mySidebar?.classList.toggle("block");
  }

  return (
    <aside className="flex ">
      <nav id="mySidebar" className="h-screen text-white w-72 pt-12  block">
        <ul
          id="ulSidenav"
          className="grid grid-cols-12 place-content-center py-20  text-center "
        >
          <Link className="col-span-12" href="/dashboard/agendar/datos">
            <li className=" hover:bg-stone-800 h-20 grid place-content-center">
              <div className="flex gap-2">
                <Image src={calendar} alt="icon" />
                Agendar cita
              </div>
            </li>
          </Link>

          <Link className="col-span-12" href="/dashboard/historial/consultas">
            <li className="   hover:bg-stone-800 h-20 grid place-content-center">
              <div className="flex gap-2">
                <Image src={history} alt="icon" />
                Historial de consultas
              </div>
            </li>
          </Link>

          <Link className="col-span-12" href="/dashboard/compras">
            <li className="  hover:bg-stone-800 h-20 grid place-content-center">
              <div className="flex gap-2">
                <Image src={history} alt="icon" />
                Historial compras
              </div>
            </li>
          </Link>

          <Link className="col-span-12" href="/dashboard/perfil">
            <li className="   hover:bg-stone-800 h-20 grid place-content-center">
              <div className="flex gap-2">
                <Image src={perfil} alt="icon" />
                Perfil
              </div>
            </li>
          </Link>

          <button
            className="col-span-12"
 
            onClick={(e) => {
              signOut();
              router.push("/login");
            }}
          >
            <li className="   hover:bg-stone-800 h-20 grid place-content-center">
              <div className="flex gap-2">
                <Image src={logout} alt="icon" />
                Cerrar Sesion
              </div>
            </li>
          </button>
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
        className="h-screen w-full pt-20  lg:px-7 bg-white/90 overflow-y-auto"
      >
        <div className="w-full  flex justify-center p-2  sm:p-5 md:p-6">
          {children}
        </div>
      </div>
    </aside>
  );
}
