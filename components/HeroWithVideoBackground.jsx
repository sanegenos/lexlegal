import { useState } from 'react';

export default function HeroWithVideoBackground({ videoSrc, title, description }) {
  const [hover, setHover] = useState(false);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Видео фон */}
      <video
        className="absolute w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        loop
        muted
      />
      
      {/* Полупрозрачный чёрный фон */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Контент секции */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg mb-8">{description}</p>
        <button
          className={`bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transform transition-transform duration-300 ${
            hover ? 'scale-110' : ''
          }`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
