import Image from "next/image";
import { EventAccount } from "@/services/get-events.service";

export default function EventCard(event: EventAccount) {
  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl hover:border hover:border-indigo-100">
      <h3 className="font-bold mb-4 text-xl text-center">{event.account.name}</h3>

      <div className="flex gap-6 justify-center">
        <button className="bg-indigo-300 text-black font-semibold px-4 py-2 rounded basis-[50%] hover:text-white hover:bg-indigo-400"
                onClick={() => alert("Próximamente")}>
          Comprar Entrada 
          <div className="flex flex-row items-center justify-center">
            <Image 
              src="/usdc-logo.png"
              alt="Logo"
              width="15"
              height="15">
              </Image>
            <p className="px-1">{event.account.ticketPrice.toNumber().toFixed(2)}</p>
          </div>
        </button>
        <button className="bg-indigo-300 text-black font-semibold px-4 py-2 rounded basis-[50%] hover:text-white hover:bg-indigo-400"
                onClick={() => alert("Próximamente")}>
          Colaborar 
          <div className="flex flex-row items-center justify-center">
            <Image 
              src="/usdc-logo.png"
              alt="Logo"
              width="15"
              height="15">
              </Image>
            <p className="px-1">{1}</p>
          </div>
        </button>
      </div>
    </div>
  );
}