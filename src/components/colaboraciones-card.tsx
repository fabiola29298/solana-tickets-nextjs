import { CollaborationData as CollaborationCardProp } from "@/app/utils/collaboration-data";
export default function CollaborationCard(collaboration: CollaborationCardProp) {
  return (
    <div className="relative bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5rounded-lg shadow-md  p-6 rounded-lg shadow-md hover:shadow-xl hover:border hover:border-indigo-100">
      <h3 className="font-bold mb-2 text-xl text-center">{collaboration.event_title}</h3>
      <p className="mb-5 text-lg text-center"> Colaboraste con: {collaboration.tokens_amount} tokens</p>
      <div className="flex gap-6 justify-end">
        {
            collaboration.event_closed && (
                <button className="bg-indigo-300 text-black font-semibold px-4 py-2 rounded basis-[50%] hover:text-white hover:bg-indigo-400"
                    onClick={() => alert("Próximamente")}>
                    Retirar Ganancias 
                </button>
            )
        }
        </div>
        <div className="flex gap-6 justify-center">
        {
            !collaboration.event_closed && (
                <p className="font-bold mb-4 text-lg text-center">*¡Este evento no ha finalizado!*</p>
            )
        }
      </div>
    </div>
  );
}