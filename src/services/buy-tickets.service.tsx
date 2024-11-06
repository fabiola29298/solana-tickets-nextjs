import { BN } from "bn.js";
import { acceptedMintATA, gainVaultPda } from "@/utils/find-pdas";
import { PublicKey } from "@solana/web3.js";
import { DECIMALS_PER_USDC } from "@/utils/solana";

interface buyTicketsInterface {
  amount: number,
  publicKey: PublicKey | null,
  program: any,
  eventPublicKey: PublicKey,
}

export async function buyTickets({ amount, publicKey, program, eventPublicKey}: buyTicketsInterface) {
  if (!publicKey) return;
  console.log(eventPublicKey.toString())

  try {
    const gainVaultPublicKey = gainVaultPda({eventPublicKey: eventPublicKey, programId:program.programId});
    const acceptedMintAta = acceptedMintATA(publicKey);

    const tx = await program.methods
        .buyTickets(new BN(amount*DECIMALS_PER_USDC))
        .accounts({
        payerAcceptedMintAta: acceptedMintAta,
        event: eventPublicKey,
        authority: publicKey,
        gainVault: gainVaultPublicKey
        })
        .rpc();

    console.log("TxID: ", tx);

  } catch (e) {
    console.log("EL ERROR: ", e);
  }
};

