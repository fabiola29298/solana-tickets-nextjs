import Image from "next/image";
import { EventData as EventCardProp } from "@/app/utils/event-data";

export default function EventCard(event: EventCardProp) {
  return (
    <div className="relative bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5rounded-lg shadow-md hover:shadow-xl hover:border hover:border-indigo-100">
      <h3 className="font-bold mb-4 text-xl text-center">{event.title}</h3>

      <div className="flex gap-6 justify-center">
         
                <button className="bg-gradient-to-r from-slate-400 to-stone-300 text-black font-semibold px-4 py-2 rounded basis-[50%] hover:text-white hover:bg-indigo-400"
                onClick={() => alert("Próximamente")}>
          Comprar Entrada 
          <div className="flex flex-row items-center justify-center">
            <Image 
              src="/solanaLogoMark.png"
              alt="Logo"
              width="15"
              height="15">
              </Image>
            <p className="px-1">{event.ticket_price}</p>
          </div>
        </button>
        <button className="bg-gradient-to-r from-slate-400  to-stone-300  text-black font-semibold px-4 py-2 rounded basis-[50%] hover:text-white hover:bg-indigo-400"
                onClick={() => alert("Próximamente")}>
          Colaborar 
          <div className="flex flex-row items-center justify-center">
            <Image 
              src="/solanaLogoMark.png"
              alt="Logo"
              width="15"
              height="15">
              </Image>
            <p className="px-1">{event.token_price}</p>
          </div>
        </button>
      </div>
    </div>
  );
}