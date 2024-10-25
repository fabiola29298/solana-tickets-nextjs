"use client";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";
 
export default function WalletInfo() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [balance, setBalance] = useState<number>(0);
 
  const getAirdropOnClick = async () => {
    try {
      if (!publicKey) {
        throw new Error("Wallet is not Connected");
      }
      const [latestBlockhash, signature] = await Promise.all([
        connection.getLatestBlockhash(),
        connection.requestAirdrop(publicKey, 1 * LAMPORTS_PER_SOL),
      ]);
      const sigResult = await connection.confirmTransaction(
        { signature, ...latestBlockhash },
        "confirmed",
      );
      if (sigResult) {
        alert("Airdrop was confirmed!");
      }
    } catch {
      alert("You are Rate limited for Airdrop");
    }
  };
 
  useEffect(() => {
    if (publicKey) {
      (async function getBalanceEvery10Seconds() {
        const newBalance = await connection.getBalance(publicKey);
        setBalance(newBalance / LAMPORTS_PER_SOL);
        setTimeout(getBalanceEvery10Seconds, 10000);
      })();
    }
  }, [publicKey, connection, balance]);


  return (
    <main className="flex flex-col items-center p-8 bg-green-100 rounded-lg shadow-md">
      {publicKey ? (
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-black font-semibold text-2xl">Tu Wallet:</h1>
          <h2 className="text-black font-semibold">{publicKey?.toString()}</h2>
          <h2 className="text-black font-semibold">{balance} SOL</h2>
          <div className="flexjustify-center" >
            <button
              onClick={getAirdropOnClick}
              type="button"
              className="bg-indigo-300 text-black font-semibold px-4 py-2 rounded basis-[50%] hover:text-white hover:bg-indigo-400"
            >
              Get Airdrop
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl text-center mt-5 mb-4 font-bold">Connect your wallet</h1>
            <WalletMultiButton style={{}} />
        </div>
      )}
    </main>
  );
}