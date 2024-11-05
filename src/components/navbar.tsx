'use client'

import Image from "next/image";
import Link from "next/link";
 
export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-indigo-500 w-full flex items-center justify-between px-32 py-8 font-medium z-10 dark:text-light lg:px-16 relative z-1 md:px-12 sm:px-8 ">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="Logo"
          className="h-7 w-9 mr-2"
          width="500"
          height="300"
        />
        <h1 className="text-lg font-bold hidden md:block">Administrador de Eventos</h1>
      </Link>

      <div className="flex items-center gap-4">
        <nav>
          <Link href="/mis-eventos" className="mx-2 px-1 font-semibold hover:text-white">
            Mis Eventos
          </Link>

          <Link href="/colaboraciones" className="mx-2 px-1 font-semibold hover:text-white">
            Colaboraciones
          </Link>
        </nav>
        <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold px-4 py-1 rounded hover:text-black hover:bg-purple-500" 
                onClick={ () => alert("Proxima Clase")}>
          Daya45...xDrv9
        </button>
      </div>
    </header>
  );
}
