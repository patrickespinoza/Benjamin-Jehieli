import React, { useRef, useState } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

export default function Portada() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false); 

  const handlePlayMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error al intentar reproducir el audio:", error);
      });
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted; 
      setIsMuted(!isMuted); 
    }
  };

  return (
    <div>
      <audio ref={audioRef} loop>
        <source src="/TylerShaw.mp3" type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio para reproducir.
      </audio>
      <section className="relative w-full h-[calc(110vh-160px)] md:h-screen flex flex-col items-center justify-center text-white">
  
  <img
    src="/portada.jpeg"
    alt="Fondo"
    className="absolute w-full h-full object-cover object-[center_40%]"
  />

  {/* OVERLAY OSCURO */}
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative z-10 w-full h-full justify-end pb-16 items-center flex flex-col p-4 gap-4">
    
    <h1 className="roboto-black p-12 text-4xl sm:text-4xl md:text-6xl lg:text-8xl font-cursiveDancing">
      Bejamín & Jehieli
    </h1>

    <p className="font-serif text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
      NOS CASAMOS
    </p>

  </div>

</section>
    </div>
    
  );
}


