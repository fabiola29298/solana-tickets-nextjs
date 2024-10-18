
import Image from 'next/image';

export default function Home() {
  return (
    <div className="text-center flex-r items-center justify-center">
      <h1 className="text-balance mt-16 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Mi primera dApp
      </h1>
      <div className='flex items-center justify-center mt-8'>
        <Image
          src="/solanaLogoMark.png"
          width={60}
          height={60}
          alt="Logo"
        ></Image>
        <h1 className="ml-2 text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Solana
        </h1>
      </div>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        Bienvenidos a la tercera edición del #HeavyDutyCamp
      </p>
    </div>
  );
}
