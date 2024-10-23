'use client'
export default function MyEvents() {
  return (
    <div className="my-16 flex flex-col items-center">
      <h1 className="text-4xl text-center font-bold">Aún no tienes eventos en Solana</h1>
      <h3 className="text-2xl text-center mt-5 mb font-bold">¡Crea tu primer evento hoy mismo!</h3>
      <button className="bg-indigo-300 w-40 text-black mt-5 font-semibold px-4 py-1 rounded hover:text-white hover:bg-indigo-400" 
          onClick={ () => alert("Próximamente")}>
            Crear Evento
        </button>
    </div>
  );
}
