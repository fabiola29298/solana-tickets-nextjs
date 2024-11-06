import { BN } from "bn.js";
import { acceptedMintATA, allPdas, eventMintATA, eventMintPda, treasuryVaultPda } from "@/utils/find-pdas";
import { PublicKey } from "@solana/web3.js";
import { DECIMALS_PER_USDC } from "@/utils/solana";

interface sponsorEventInterface {
  amount: number,
  publicKey: PublicKey | null,
  program: any,
  eventPublicKey: PublicKey,
}

export async function sponsorEvent({ amount, publicKey, program, eventPublicKey}: sponsorEventInterface) {
  if (!publicKey) return;
  console.log(eventPublicKey.toString())

  try {
    // find PDAS
    const eventMintPublicKey = eventMintPda({eventPublicKey: eventPublicKey, programId:program.programId});
    const treasuryVaultPublicKey = treasuryVaultPda({eventPublicKey: eventPublicKey, programId:program.programId});
    const eventMintAta = eventMintATA(publicKey,eventMintPublicKey);
    const acceptedMintAta = acceptedMintATA(publicKey);

    const tx = await program.methods
        .sponsorEvent(new BN(amount*DECIMALS_PER_USDC))
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

