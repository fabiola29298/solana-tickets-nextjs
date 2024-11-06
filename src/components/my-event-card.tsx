import { MyEventInfo } from "@/services/get-my-events.service";
import { CloseEventFeature } from "./close-event/close-event.feature";
import { DECIMALS_PER_USDC } from "@/utils/solana";

export default function MyEventCard(myEvent: MyEventInfo) {
  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl hover:border hover:border-indigo-100">
      <h3 className="font-bold mb-4 text-xl text-center">{myEvent.event.account.name}</h3>
      <div className="flex gap-6 justify-center">
            <div className="px-4 py-2 rounded basis-[50%] bg-white mb-4">
                <h6 className="font-semibold text-center mb-2"> Bóveda del Evento</h6>
                <div>
                    <p>Precio token: {1}</p>
                    <p>Colaboradores: {(myEvent.event.account.sponsors.toNumber()/DECIMALS_PER_USDC).toFixed(0)}</p>
                    <p>Total: {(Number(myEvent.treasuryVault!.amount)/DECIMALS_PER_USDC).toFixed(0)}</p>
                </div>
            </div>
            <div className="px-4 py-2 rounded basis-[50%] bg-white mb-4">
                <h6 className="font-semibold text-center mb-2"> Bóveda de Ganancias</h6>
                <div>
                    <p>Precio ticket: {myEvent.event.account.ticketPrice.toNumber().toFixed(0)}</p>
                    <p>Tickets vendidos:{(Number(myEvent.gainVault!.amount)/DECIMALS_PER_USDC)/myEvent.event.account.ticketPrice.toNumber()}</p>
                    <p>Total: {(Number(myEvent.gainVault!.amount)/DECIMALS_PER_USDC).toFixed(0)}</p>
                </div>
            </div>
        </div>
      <div className="flex gap-6 justify-end">
        
        <button className="bg-indigo-300 text-black font-semibold px-4 py-2 rounded basis-[50%] hover:text-white hover:bg-indigo-400"
                onClick={() => alert("Próximamente")}>
          Retirar Fondos 
        </button>
        {
            myEvent.event.account.active && (
              <CloseEventFeature 
              publicKey={myEvent.event.publicKey}
              account={myEvent.event.account} ></CloseEventFeature>
            )
        }
      </div>
    </div>
  );
}