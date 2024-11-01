import { BN } from "bn.js";
import { acceptedMintATA, allPdas, eventMintATA, eventMintPda } from "@/utils/find-pdas";
import { PublicKey } from "@solana/web3.js";
import { Wallet } from "@solana/wallet-adapter-react";

interface sponsorEventInterface {
  amount: number,
  publicKey: PublicKey | null,
  program: any,
  eventId: string,
}

export async function sponsorEvent({ amount, publicKey, program, eventId}: sponsorEventInterface) {
  if (!publicKey) return;
  console.log(eventId)

  try {
    const {
      eventMintPublicKey,
      eventPublicKey,
      gainVaultPdaPublicKey,
      treasuryVaultPublicKey,
    } = allPdas({ eventId , programId: program.programId, publicKey: publicKey });

    const eventMintAta = eventMintATA(publicKey,eventMintPublicKey);
    const acceptedMintAta = acceptedMintATA(publicKey);

    console.log(eventMintAta);
    console.log(acceptedMintAta);

    const tx = await program.methods
        .sponsorEvent(new BN(amount))
        .accounts({
        eventMint: eventMintPublicKey,
        payerAcceptedMintAta: acceptedMintAta,
        event: eventPublicKey,
        authority: publicKey,
        payerEventMintAta:eventMintAta,
        treasuryVault: treasuryVaultPublicKey
        })
        .rpc();

    console.log("TxID: ", tx);

  } catch (e) {
    console.log("EL ERROR: ", e);
  }
};
