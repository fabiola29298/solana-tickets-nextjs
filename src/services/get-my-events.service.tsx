import { EventManager } from "@/utils/idl/idl-event-manager";
import { Program } from "@coral-xyz/anchor";
import { Connection, PublicKey } from "@solana/web3.js";
import { EventAccount, getEvents } from "./get-events.service";
import { gainVaultPda, treasuryVaultPda } from "@/utils/find-pdas";
import { Account, getAccount } from "@solana/spl-token";

export interface MyEventInfo {
  event: EventAccount;
  treasuryVault: Account | undefined;
  gainVault: Account | undefined;
}

export async function getMyEvents(connection: Connection, program: Program<EventManager>,  publicKey: PublicKey){
    
    try {
      const events = await getEvents(program);
      console.log("Eventos sin filtrar ", events);
      const myEvents = events.filter((event) => event.account.authority.toString() == publicKey.toString());
      let result: MyEventInfo[] = []
      for (let event of myEvents) {
       
        const treasuryPda = treasuryVaultPda({
          eventPublicKey: event.publicKey,
          programId: program.programId
         });

         const gainPda = gainVaultPda({
          eventPublicKey: event.publicKey,
          programId: program.programId
         });

         const treasury = await getAccount(connection, treasuryPda);
         console.log("treasury", treasury);
         const gain = await getAccount(connection, gainPda);
         console.log("gain", gain);

        result.push({
          event: event,
          treasuryVault: treasury,
          gainVault: gain
        })
      }
      console.log("EVENTS: ", events);

      return result
    } catch (e) {
      console.log("EL ERROR: ", e);
    }
    return []
};
