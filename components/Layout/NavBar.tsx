import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import menu from "public/Menu.png";
import logo from "public/Logo.png";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import profile from 'public/profile.jpg'


export default function NavBar() {
  const [isActive, setIsActive] = useState(false);
  const { data: session, status } = useSession();
  const [dropdown, setDropdown] = useState(false);
  const router = useRouter();

  const activeDropdown = () => {
    setDropdown(!dropdown);
  };
  const openMenu = () => {
    setIsActive(!isActive);
  };

  return (
    
    <nav className=" z-50 fixed w-full top-0 flex text-stone-800 bg-white justify-between bg-trnsparent shadow-sm md:text-md">
      <div className="grid place-content-center ml-6 text-lg">
        <Link href="/">
          <h1  className=" uppercase font-bold text-2xl">Scopes</h1>
     
        </Link>
      </div>
      <div className="hidden md:block">
        <ul className="inline-flex items-center  gap-5 p-4">
          <li className="">
            <Link href="/descargas">Descargas</Link>
          </li>
          <li className="">
            <Link href="/productos">Productos</Link>
          </li>
          <li>
            <Link href="/servicios">Servicios</Link>
          </li>
          <li>
            <Link href="/empresa">Empresa</Link>
          </li>

          <li>
            <Link href="/contacto">Contacto</Link>
          </li>
          <li>
            <Link
              onClick={activeDropdown}
              className=" text-slate-800"
              href={ session?.user ? "#!" : "/login"}
            >     
              {session?.user ? <Image className="rounded-full" src={ session?.user?.image! || profile } width={32} height={32} alt='foto'/> : "Iniciar Sesión"}
            </Link>
            {session?.user && dropdown===true && (
              <ul  className="fixed bg-white rounded-md p-5 mt- right-10 shadow-xl">
                <li className="py-2">
                  <Link href="/dashboard">Dashboard</Link>
                </li>
                <li className="text-red-500">
                  <Link href="/api/auth/signout">Cerrar Sesión</Link>
                </li>
                <li>
                  <Link href="/dashboard"></Link>
                </li>
              </ul>
            )}
          </li>
   
        </ul>
      </div>
      <div className="block w-14 md:hidden p-3">
        <Link href="#!">
          <Image onClick={openMenu} src={menu} alt="menu" />
        </Link>
      </div>
      {isActive === true && (
        <ul className="transition duration-700 fixed bg-white font-medium z-10 flex flex-col justify-between top-14 md:hidden shadow-lg w-full h-96  text-center gap-3 py-10">
          <li className="">
            <Link href="/descargas">Descargas</Link>
          </li>
          <li className="">
            <Link href="/productos">Productos</Link>
          </li>
          <li>
            <Link href="/servicios">Servicios</Link>
          </li>
          <li>
            <Link href="/empresa">Empresa</Link>
          </li>

          <li>
            <Link href="/contacto">Contacto</Link>
          </li>
          <li>
            <Link
              onClick={activeDropdown}
              className=" text-slate-800"
              href={session?.user ? "#!" : "/login"}
            >
              {session?.user ? <div className="flex justify-center"><Image className="rounded-full" src={session?.user?.image! || profile} width={32} height={32} alt='foto'/></div>: "Iniciar Sesión"}
            </Link>
            {session?.user && dropdown===true && (
              <ul className="fixed bg-white rounded-md p-5 shadow-xl  ">
                <li>
                  <Link href="/dashboard">Dashboard</Link>
                </li>
                <li className="text-red-500">
                  <Link href="/api/auth/signout">Cerrar Sesión</Link>
                </li>
                <li>
                  <Link href="/dashboard"></Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
}

