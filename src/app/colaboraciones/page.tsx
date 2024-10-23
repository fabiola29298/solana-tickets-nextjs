'use client'
import Link from "next/link";

export default function Collaborations() {
  return (
    <div>
      <div className="my-16 flex flex-col items-center">
      <h1 className="text-4xl text-center font-bold">Parece que aún no has colaborado con ningún evento</h1>
      <h3 className="text-2xl text-center mt-5 mb font-bold">¡Explora los últimos eventos en Solana y participa como colaborador!</h3>
      <Link href="/" className="bg-indigo-300 w-50 text-black mt-5 font-semibold px-4 py-1 rounded hover:text-white hover:bg-indigo-400">
            Explorar eventos
        </Link>
    </div>
    </div>
  );
}