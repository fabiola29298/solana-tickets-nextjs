import { EventAccount } from "@/services/get-events.service";
import { SponsorEventFeature } from "./sponsor-event/sponsor-event.feature";
import { BuyTicketsFeature } from "./buy-tickets/buy-tickets.feature";

export default function EventCard(event: EventAccount) {
  return (
    <div className="relative bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5rounded-lg shadow-md hover:shadow-xl hover:border hover:border-indigo-100">
       <h3 className="font-bold mb-4 text-xl text-center">{event.account.name}</h3>

      <div className="flex gap-6 justify-center">
<<<<<<< HEAD
        <BuyTicketsFeature
          publicKey={event.publicKey}
          account={event.account} ></BuyTicketsFeature>
        <SponsorEventFeature 
          publicKey={event.publicKey}
          account={event.account} ></SponsorEventFeature>
=======
         
      <button className="bg-gradient-to-r from-slate-400 to-stone-300 text-black font-semibold px-4 py-2 rounded basis-[50%] hover:text-white hover:bg-indigo-400"
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
        <button className="bg-gradient-to-r from-slate-400  to-stone-300  text-black font-semibold px-4 py-2 rounded basis-[50%] hover:text-white hover:bg-indigo-400"
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
>>>>>>> desafio6
      </div>
    </div>
  );
}