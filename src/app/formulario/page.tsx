'use client'
import { useState } from 'react';

export default function Formulario() {
    const [sent, setSent] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSent(true);
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
      <form className="bg-white px-8 py-8 pb-8 mb-4" onSubmit={handleSubmit}>
        
        <h1 className="text-2xl text-black font-bold mb-6">Formulario de Contacto</h1>
        <div className="mb-4">
          <label
            className="block text-black text-sm font-bold mb-2"
            htmlFor="name"
          >
            Nombre
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre"
            className="border rounded w-full py-2 px-3 text-black focus:outline-indigo-300"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-black text-sm font-bold mb-2"
            htmlFor="email"
          >
            Correo
          </label>
          <input
            id="email"
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ejemplo@email.com"
            className="border rounded w-full py-2 px-3 text-black mb-3 focus:outline-indigo-300"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-black text-sm font-bold mb-2"
            htmlFor="message"
          >
            Mensaje
          </label>
          <textarea
            id="mensaje"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escribe tu mensjae aqui ..."
            className="border rounded w-full py-2 px-3 text-black mb-3 focus:outline-indigo-300"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="rounded-md bg-indigo-300 px-3.5 py-2 text-sm font-semibold text-black shadow-sm hover:bg-indigo-400 hover:text-white"
          >
            Enviar
          </button>
        </div>
        {sent && <p className="mt-4 text-center text-green-500">¡Mensaje enviado!</p>}
      </form>
      
    );
  }
  