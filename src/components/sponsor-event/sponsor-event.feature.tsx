import { useState } from 'react';
import CreateEventModal, { SponsorFormInputs } from './sponsor-event.ui';
import { useWallet } from '@solana/wallet-adapter-react';
import { useEventManagerProgram } from "@/utils/solana";
import { sponsorEvent } from '@/services/sponsor-event.service';
import SponsorEventModal from './sponsor-event.ui';
import Image from "next/image";
import { EventAccount } from '@/services/get-events.service';

export function SponsorEventFeature(event: EventAccount) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const {publicKey} = useWallet()
  const program = useEventManagerProgram();
  const eventId = event.account.id;

  const onSubmit = async ({ amount }: SponsorFormInputs) => {
    setisLoading(!isLoading);
    try {
        console.log(event)
      await sponsorEvent({ amount, program, publicKey, eventId })
    } catch (e) {
      console.error(e)
    } finally {
      setisLoading(!isLoading);
      setIsModalOpen(!isModalOpen);
    }
  }

  return (
    <>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="bg-indigo-300 text-black font-semibold px-4 py-2 rounded basis-[50%] hover:text-white hover:bg-indigo-400"
      >
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

      <SponsorEventModal
        isOpen={isModalOpen}
        loading={isLoading}
        onClose={() => setIsModalOpen(false)}
        onSubmit={onSubmit}
      />
    </>
  );
};