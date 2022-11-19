import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import menu from "public/Menu.png";
import logo from "public/Logo.png";
import { useRouter } from "next/router";

export default function NavBar() {

  const router = useRouter()
  
  const [isActive, setIsActive] = useState(false);


  const openMenu = () => {
    setIsActive(!isActive);
  };


  return (
    <nav className=" z-50 fixed w-full top-0 flex  justify-between bg-white shadow-md md:text-md">
      <div className="grid place-content-center ml-6 text-lg">
        <Link href="/">
          <Image className="w-32" src={logo} alt="FixPc Soporte remoto" />
        </Link>
      </div>
      <div className="hidden md:block">
        <ul className="inline-flex items-center  gap-5 p-5 text-gray-500">
        <li className="">
            <Link href="/descargas">Descargas</Link>
          </li>
          <li className="">
            <Link href="/productos">Productos</Link>
          </li>
          <li>
            <Link href='/servicios'>Servicios</Link>
          </li>
          <li>
            <Link href="/empresa">Empresa</Link>
          </li>

          <li>
            <Link href="/contacto">Contacto</Link>
          </li>
          <li>
            <Link className=" text-primary-100" href="/login">
              Iniciar sesion
            </Link>
          </li>
        </ul>
      </div>
      <div className="block w-16 md:hidden p-3">
        <Link href="#!">
          <Image onClick={openMenu} src={menu} alt="menu" />
        </Link>
      </div>
      {isActive === true && (
        <ul className="fixed bg-white z-10 flex flex-col top-16 rounded-md md:hidden shadow-lg w-60  text-center gap-3 py-4">
          <li >
            <Link href="#header1">Headers</Link>
          </li>
          <li>
            <Link href="#section2">Section 2</Link>
          </li>
          <li>
            <Link href="#section3">Section 3</Link>
          </li>
          <li>
            <Link href="#section4">Section 4</Link>
          </li>
          <li>
            <Link href="#section5">Section 4</Link>
          </li>
          <li>
            <Link href="#section6">Section 4</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
