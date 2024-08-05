"use client"
import { useState } from 'react';

export default function Hero() {
  const [hover, setHover] = useState(false);

  return (
    <section className="bg-gray-800 text-white h-screen flex flex-col justify-center items-center text-center">
      
      <h1 className="text-5xl font-bold mb-4 animate-pulse">Legal Excellence, Tailored for You</h1>
      <p className="text-lg mb-8">Providing expert legal advice for over 25 years.</p>
      <button
        className={`bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transform transition-transform duration-300 ${
          hover ? 'scale-110' : ''
        }`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        Get a Free Consultation
      </button>
    </section>
  );
}
