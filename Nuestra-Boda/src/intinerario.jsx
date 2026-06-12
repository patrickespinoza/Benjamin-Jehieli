import React, { useState, useRef } from "react";
import Carousel from "./carrusel";
import Countdown from "./componentes-encabezado/encabeza-cuenta";
import { motion, AnimatePresence } from "framer-motion";
import Novios from "./componentes-encabezado/novios-info";
import { Volume2, VolumeX } from "lucide-react";

export default function Intinerario() {
  const audioRef = useRef(null);

const [mostrarMusica, setMostrarMusica] = useState(true);
const [musicaActiva, setMusicaActiva] = useState(false);
  // Estados para manejar el formulario
  const [enviando, setEnviando] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [copiado, setCopiado] = useState(false);
  const copiarCuenta = () => {
  navigator.clipboard.writeText("1234 5678 9012 3456");
  setCopiado(true);

  setTimeout(() => {
    setCopiado(false);
  }, 2000);
};
  const [nombreInvitado, setNombreInvitado] = useState("");
  const [mensajeInvitado, setMensajeInvitado] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState("");
  const [error, setError] = useState("");
const enviarConfirmacion = async () => {
  if (enviando) return;

  if (!nombreInvitado || !asistencia) {
    setError("Completa tu nombre y confirma asistencia");
    return;
  }

  setEnviando(true);
  setError("");

  const data = {
    nombre: nombreInvitado,
    asistencia,
    invitados: invitados || 1,
    mensaje: mensajeInvitado,
  };

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbybAXwN1Vd27tQTf-UfjUQMBoPWFEaS_vuHnSsR2qR-Pc1tMBxH7TrC00LwGbwh4Mnnrw/exec",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );

    const numero = "522381507457";

    const mensaje = `✨ Confirmación de asistencia ✨

Nombre: ${nombreInvitado}
Asistencia: ${asistencia}
Invitados: ${invitados}

Mensaje:
${mensajeInvitado || "Sin mensaje"}

¡Nos vemos en la boda! 💍🎉`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(
      mensaje
    )}`;

    window.open(url, "_blank");

    setNombreInvitado("");
    setMensajeInvitado("");
    setAsistencia("");
    setInvitados("");

  } catch (error) {
    console.error("Error:", error);
    setError("Hubo un error al enviar");
  } finally {
    setEnviando(false);
  }
};
const activarMusica = () => {
  if (audioRef.current) {
    audioRef.current.volume = 0.4;

    audioRef.current.play().catch((err) => {
      console.log(err);
    });
  }

  setMusicaActiva(true);
  setMostrarMusica(false);
};

const silenciarMusica = () => {
  if (audioRef.current) {
    audioRef.current.pause();
  }

  setMusicaActiva(false);
  setMostrarMusica(false);
};

const toggleMusica = () => {
  if (!audioRef.current) return;

  if (musicaActiva) {
    audioRef.current.pause();
    setMusicaActiva(false);
  } else {
    audioRef.current.play();
    setMusicaActiva(true);
  }
};

return (
  <>
  <audio
    ref={audioRef}
    loop
  >
    <source src="/musica.mp3" type="audio/mpeg" />
  </audio>
  <AnimatePresence>
  {mostrarMusica && (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="max-w-md w-full rounded-3xl p-8 text-center"
        style={{
          backgroundColor: "#DDDBD7",
          border: "1px solid #AEA38E",
          boxShadow: "0 20px 60px rgba(89,59,31,0.20)",
        }}
      >
        <p
          className="text-4xl mb-4"
          style={{
            color: "#AEA38E",
            fontFamily: "Cormorant Garamond",
          }}
        >
          ❦
        </p>

        <h2
          className="text-3xl mb-4"
          style={{
            color: "#53583E",
            fontFamily: "Cormorant Garamond",
          }}
        >
          Bienvenidos
        </h2>

        <p
          className="leading-relaxed mb-8"
          style={{
            color: "#593B1F",
          }}
        >
          Esta invitación contiene música.
          <br />
          Te recomendamos activar el sonido para disfrutar una experiencia más especial.
        </p>

        <div className="flex flex-col gap-4">
          <button
            onClick={activarMusica}
            className="py-3 rounded-xl transition-all hover:scale-105"
            style={{
              backgroundColor: "#53583E",
              color: "#DDDBD7",
            }}
          >
            Activar Música
          </button>

          <button
            onClick={silenciarMusica}
            className="py-3 rounded-xl"
            style={{
              border: "1px solid #AEA38E",
              color: "#593B1F",
            }}
          >
            Continuar sin música
          </button>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
  
    <div >

<div className="relative flex flex-col items-center justify-center bg-[#DDDBD7] py-24 px-6 text-center overflow-hidden">

  {/* Mancha decorativa elegante */}
  <div className="absolute w-[600px] h-[600px] bg-[#AEA38E]/20 rounded-full blur-3xl top-[-200px]"></div>

  {/* Contenido */}
  <div className="relative z-10 max-w-3xl">
  <p
  className="text-3xl mb-4"
  style={{
    color: "#AEA38E",
    fontFamily: "Cormorant Garamond",
  }}
>
  ❦
</p>
    <p
      className="uppercase tracking-[6px] text-sm mb-6"
      style={{ color: "#AEA38E" }}
    >
      Nuestra Boda
    </p>

    <h1
      className="text-4xl sm:text-6xl md:text-7xl mb-8 leading-tight"
      style={{
        color: "#53583E",
        fontFamily: "Cormorant Garamond",
      }}
    >
      ¡Nos Casamos!
    </h1>

    <p
      className="text-lg sm:text-2xl md:text-3xl leading-relaxed"
      style={{
        color: "#593B1F",
      }}
    >
      Con inmensa alegría en nuestros corazones,
te invitamos a acompañarnos en la celebración
de nuestro matrimonio.
    </p>

    {/* Línea elegante */}
    <div
      className="w-24 h-[1px] mx-auto my-10"
      style={{
        backgroundColor: "#AEA38E",
      }}
    />

    <p
      className="text-xl sm:text-2xl italic"
      style={{
        color: "#53583E",
      }}
    >
      Falta muy poco para nuestro gran día
    </p>

  </div>
</div>

{/* COUNTDOWN */}
<div
  className="pb-24 flex justify-center px-6"
  style={{
    backgroundColor: "#DDDBD7",
  }}
>
  <div
    className="rounded-3xl px-10 py-8 shadow-lg"
    style={{
      backgroundColor: "#53583E",
      border: "1px solid #AEA38E",
    }}
  >
    <Countdown targetDate="2026-10-18T00:00:00" />
  </div>
</div>


{/* Ubicacion ceremonia */}
<div
  className="flex items-center justify-center px-6 py-16"
  style={{
    backgroundColor: "#DDDBD7",
  }}
>
  <div
    className="max-w-xl w-full text-center rounded-3xl p-10 md:p-14"
    style={{
      backgroundColor: "#DDDBD7",
      border: "1px solid #AEA38E",
      boxShadow: "0 20px 60px rgba(89,59,31,0.10)",
    }}
  >

    {/* Texto superior */}
    <p
      className="uppercase tracking-[5px] text-xs mb-4"
      style={{
        color: "#AEA38E",
      }}
    >
      Celebración
    </p>

    {/* Título */}
    <h2
      className="text-3xl md:text-5xl mb-8"
      style={{
        color: "#53583E",
        fontFamily: "Cormorant Garamond",
        fontWeight: "500",
      }}
    >
      Ceremonia de Acción de Gracias
    </h2>

    {/* Línea */}
    <div
      className="w-24 h-[1px] mx-auto mb-8"
      style={{
        backgroundColor: "#AEA38E",
      }}
    />

    {/* Fecha */}
    <p
      className="text-xl md:text-2xl mb-2"
      style={{
        color: "#593B1F",
        fontFamily: "Cormorant Garamond",
      }}
    >
      18 de Octubre de 2026
    </p>

    {/* Hora */}
    <p
      className="text-lg mb-10"
      style={{
        color: "#53583E",
      }}
    >
      1:00 PM
    </p>

    {/* Ubicación */}
    <p
      className="uppercase tracking-[4px] text-xs mb-4"
      style={{
        color: "#AEA38E",
      }}
    >
      Lugar
    </p>

    <h3
      className="text-2xl mb-4"
      style={{
        color: "#53583E",
        fontFamily: "Cormorant Garamond",
      }}
    >
      Salón Quinta Cangrejos
    </h3>

    <p
      className="leading-relaxed max-w-sm mx-auto"
      style={{
        color: "#593B1F",
      }}
    >
      C. Carril Libertad 81,
      San Vicente Ferrer,
      75718, Tehuacán, Puebla.
    </p>

    {/* Separador */}
    <div
      className="w-16 h-[1px] mx-auto my-10"
      style={{
        backgroundColor: "#AEA38E",
      }}
    />

    {/* Botón */}
    <a
      href="https://maps.app.goo.gl/Yi5XS1J5hugvNDMM9"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-8 py-3 transition-all duration-300"
      style={{
        backgroundColor: "#53583E",
        color: "#DDDBD7",
        border: "1px solid #AEA38E",
        letterSpacing: "2px",
        textTransform: "uppercase",
      }}
    >
      Ver Ubicación
    </a>
    </div>
  </div>

      {/* Frase de separacion */}
             <div
        className="relative w-full h-[450px] md:h-[550px] lg:h-[700px] overflow-hidden"
      >
        <img
          src="./image1.jpeg"
          alt="Novios"
          className="w-full h-full object-cover object-[center_35%]"
        />
      
        {/* Oscurecimiento elegante */}
        <div className="absolute inset-0 bg-black/10" />
      
        {/* Fade inferior */}
        <div
          className="absolute bottom-0 left-0 w-full h-40"
          style={{
            background:
              "linear-gradient(to top, #DDDBD7 0%, transparent 100%)",
          }}
        />
      </div>
      
      {/* FRASE BÍBLICA */}
      <div
        className="relative flex justify-center px-6"
        style={{
          backgroundColor: "#DDDBD7",
        }}
      >
        <div
          className="relative -mt-20 md:-mt-24 max-w-4xl w-full rounded-3xl px-8 py-12 text-center"
          style={{
            backgroundColor: "#DDDBD7",
            border: "1px solid #AEA38E",
            boxShadow: "0 20px 60px rgba(89,59,31,0.12)",
          }}
        >
          {/* Ornamento */}
          <p
            className="text-4xl mb-6"
            style={{
              color: "#AEA38E",
              fontFamily: "Cormorant Garamond",
            }}
          >
            ❦
          </p>
      
          {/* Frase */}
          <p
            className="text-2xl md:text-4xl leading-relaxed"
            style={{
              color: "#53583E",
              fontFamily: "Cormorant Garamond",
            }}
          >
            “Y sobre todas estas virtudes,
            vístanse de amor,
            que es el vínculo perfecto.”
          </p>
      
          {/* Separador */}
          <div
            className="w-24 h-[1px] mx-auto my-8"
            style={{
              backgroundColor: "#AEA38E",
            }}
          />
      
          {/* Referencia */}
          <p
            className="uppercase tracking-[4px] text-sm"
            style={{
              color: "#593B1F",
            }}
          >
            Colosenses 3:14
          </p>
        </div>
      </div>
{/* SECCIÓN VESTIMENTA */}
      <Novios />

{/* NUESTROS MOMENTOS */}
<div
  className="py-24 px-6"
  style={{
    backgroundColor: "#DDDBD7",
  }}
>
  <div className="max-w-5xl mx-auto text-center">

    {/* Texto superior */}
    <p
      className="uppercase tracking-[5px] text-xs mb-4"
      style={{
        color: "#593B1F",
      }}
    >
      Nuestra Historia
    </p>

    {/* Título */}
    <h2
      className="text-4xl md:text-6xl mb-8"
      style={{
        color: "#53583E",
        fontFamily: "Cormorant Garamond",
      }}
    >
      Nuestros Momentos
    </h2>

    {/* Línea */}
    <div
      className="w-24 h-[1px] mx-auto mb-8"
      style={{
        backgroundColor: "#AEA38E",
      }}
    />

    {/* Descripción */}
    <p
      className="max-w-2xl mx-auto text-lg leading-relaxed mb-12"
      style={{
        color: "#593B1F",
      }}
    >
      "así que no son ya más dos, sino una sola carne; por tanto, lo que Dios juntó, no lo separe el hombre."
    </p>
    <p
      className="max-w-2xl mx-auto text-lg leading-relaxed mb-12"
      style={{
        color: "#593B1F",
      }}
    >
      San Mateo 19:6
    </p>

    {/* Carrusel */}
    <div
      className="rounded-3xl p-4 md:p-8"
      style={{
        backgroundColor: "#F3F1EE",
        border: "1px solid #AEA38E",
        boxShadow: "0 20px 60px rgba(89,59,31,0.08)",
      }}
    >
      <div className="max-w-2xl mx-auto">
        <Carousel />
      </div>
    </div>

  </div>
</div>

{/* SECCIÓN MESA DE REGALOS */}
<div
  className="relative py-24 px-6 overflow-hidden"
  style={{
    backgroundColor: "#DDDBD7",
  }}
>
  {/* Mancha decorativa */}
  <div
    className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-20 top-0 left-1/2 -translate-x-1/2"
    style={{
      backgroundColor: "#AEA38E",
    }}
  />

  <div
    className="relative max-w-4xl mx-auto text-center rounded-3xl px-8 py-14"
    style={{
      backgroundColor: "#DDDBD7",
      border: "1px solid #AEA38E",
      boxShadow: "0 20px 60px rgba(89,59,31,0.12)",
    }}
  >
    {/* Texto superior */}
    <p
      className="uppercase tracking-[6px] text-xs mb-4"
      style={{
        color: "#AEA38E",
      }}
    >
      Detalles
    </p>

    {/* Título */}
    <h2
      className="text-4xl md:text-6xl mb-8"
      style={{
        color: "#53583E",
        fontFamily: "Cormorant Garamond",
      }}
    >
      Mesa de Regalos
    </h2>

    {/* Línea */}
    <div
      className="w-24 h-[1px] mx-auto mb-8"
      style={{
        backgroundColor: "#AEA38E",
      }}
    />

    {/* Texto */}
    <p
      className="max-w-2xl mx-auto text-lg leading-relaxed"
      style={{
        color: "#593B1F",
      }}
    >
      Su presencia será nuestro mejor regalo.
      <br />
      Si desean tener un detalle adicional para acompañarnos en esta
      nueva etapa, hemos preparado una mesa de regalos especialmente
      para ustedes.
    </p>

    {/* Botón */}
    <button
      onClick={() => setMostrarModal(true)}
      className="mt-10 px-10 py-4 transition-all duration-300 hover:scale-105"
      style={{
        backgroundColor: "#53583E",
        color: "#DDDBD7",
        border: "1px solid #AEA38E",
        letterSpacing: "2px",
        textTransform: "uppercase",
      }}
    >
      Ver Mesa de Regalos
    </button>
  </div>

  {/* MODAL */}
  <AnimatePresence>
    {mostrarModal && (
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 px-4"
        onClick={() => setMostrarModal(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative w-full max-w-[420px] rounded-3xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            backgroundColor: "#DDDBD7",
            border: "1px solid #AEA38E",
            boxShadow: "0 20px 60px rgba(89,59,31,0.20)",
          }}
        >
          <button
            className="absolute top-4 right-4 text-xl"
            style={{
              color: "#593B1F",
            }}
            onClick={() => setMostrarModal(false)}
          >
            ✕
          </button>

          <div className="p-10 text-center">

            <img
              src="/liverpool.svg"
              alt="Liverpool"
              className="h-10 mx-auto mb-6"
            />


            <div
              className="w-20 h-[1px] mx-auto my-6"
              style={{
                backgroundColor: "#AEA38E",
              }}
            />

            <p
              className="uppercase tracking-[4px] text-xs"
              style={{
                color: "#AEA38E",
              }}
            >
              Evento
            </p>

            <h3
              className="text-3xl mt-2"
              style={{
                color: "#593B1F",
                fontFamily: "Cormorant Garamond",
              }}
            >
              51983315
            </h3>

            <button
              onClick={() =>
                window.open(
                  "https://mesaderegalos.liverpool.com.mx/milistaderegalos/51983315",
                  "_blank"
                )
              }
              className="w-full mt-8 py-3"
              style={{
                backgroundColor: "#53583E",
                color: "#DDDBD7",
                border: "1px solid #AEA38E",
              }}
            >
              Abrir Mesa de Regalos
            </button>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
</div>
{/* Sección de Confirmación de Asistencia */}

<div className="relative w-full flex justify-center items-center py-16 bg-black overflow-hidden">

  {/* Fondo con blur */}
  <img
    src="/final.png"
    alt="Fondo boda"
    className="absolute w-full h-full object-cover opacity-30 blur-sm scale-110"
  />

  {/* Contenido principal */}
  <div className="relative flex flex-col items-center">

    <img
      src="/final.png"
      alt="Boda"
      className="w-72 sm:w-96 rounded-2xl shadow-2xl border border-white/20"
    />

    {/* Línea decorativa */}
    <div className="w-24 h-[2px] bg-[#9E8E7B] mt-6"></div>

    {/* Texto opcional elegante */}
    <p className="text-white mt-4 text-4xl font-cursiveDancing opacity-90">
      ¡Te esperamos!
    </p>

  </div>
</div>
<div
  className="py-24 px-6"
  style={{
    backgroundColor: "#DDDBD7",
  }}
>
  <div
    className="max-w-3xl mx-auto rounded-3xl px-8 py-14 text-center"
    style={{
      backgroundColor: "#DDDBD7",
      border: "1px solid #AEA38E",
      boxShadow: "0 20px 60px rgba(89,59,31,0.12)",
    }}
  >


    {/* Encabezado */}
    <p
      className="uppercase tracking-[6px] text-xs mb-4"
      style={{
        color: "#AEA38E",
      }}
    >
      RSVP
    </p>

    <h1
      className="text-4xl md:text-5xl mb-6"
      style={{
        color: "#53583E",
        fontFamily: "Cormorant Garamond",
      }}
    >
      Confirmar Asistencia
    </h1>

    <div
      className="w-24 h-[1px] mx-auto mb-8"
      style={{
        backgroundColor: "#AEA38E",
      }}
    />

    <p
      className="mb-10 text-lg"
      style={{
        color: "#593B1F",
      }}
    >
      Nos encantaría compartir este momento contigo.
    </p>

    {/* Nombre */}
    <input
      type="text"
      placeholder="Nombre y Apellido"
      value={nombreInvitado}
      onChange={(e) => setNombreInvitado(e.target.value)}
      className="w-full max-w-md p-4 rounded-xl mb-6 outline-none"
      style={{
        border: "1px solid #AEA38E",
        backgroundColor: "#F7F5F2",
        color: "#53583E",
      }}
    />

    {/* Asistencia */}
<div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
  <button
    onClick={() => setAsistencia("Sí asistiré")}
    className="px-8 py-3 rounded-xl transition-all duration-300"
    style={{
      backgroundColor:
        asistencia === "Sí asistiré"
          ? "#53583E"
          : "#F7F5F2",
      color:
        asistencia === "Sí asistiré"
          ? "#DDDBD7"
          : "#53583E",
      border: "1px solid #AEA38E",
    }}
  >
    ✓ Confirmo mi asistencia
  </button>

  <button
    onClick={() => setAsistencia("No podré asistir")}
    className="px-8 py-3 rounded-xl transition-all duration-300"
    style={{
      backgroundColor:
        asistencia === "No podré asistir"
          ? "#593B1F"
          : "#F7F5F2",
      color:
        asistencia === "No podré asistir"
          ? "#DDDBD7"
          : "#593B1F",
      border: "1px solid #AEA38E",
    }}
  >
    ✕ No podré asistir
  </button>
</div>

    {/* Invitados */}
    <input
  type="number"
  min="1"
  value={invitados}
  onChange={(e) => setInvitados(e.target.value)}
  className="w-full max-w-md p-4 rounded-xl mb-6 outline-none text-center"
  style={{
    border: "1px solid #AEA38E",
    backgroundColor: "#F7F5F2",
    color: "#53583E",
  }}
/>

    {/* Mensaje */}
    <textarea
      placeholder="Dedica unas palabras a los novios (opcional)"
      value={mensajeInvitado}
      onChange={(e) => setMensajeInvitado(e.target.value)}
      rows={4}
      className="w-full max-w-md p-4 rounded-xl mb-6 outline-none"
      style={{
        border: "1px solid #AEA38E",
        backgroundColor: "#F7F5F2",
        color: "#53583E",
      }}
    />

    {/* Error */}
    {error && (
      <p
        className="mb-6"
        style={{
          color: "#B04A4A",
        }}
      >
        {error}
      </p>
    )}

    {/* Botón */}
    <button
      onClick={enviarConfirmacion}
      className="px-10 py-4 transition-all duration-300 hover:scale-105 rounded-xl"
      style={{
        backgroundColor: "#53583E",
        color: "#DDDBD7",
        border: "1px solid #AEA38E",
        letterSpacing: "2px",
        textTransform: "uppercase",
      }}
    >
      Enviar Confirmación
    </button>
  </div>
</div>
    <button
  onClick={toggleMusica}
  className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
  style={{
    backgroundColor: "#53583E",
    color: "#DDDBD7",
    border: "1px solid #AEA38E",
  }}
>
  {musicaActiva ? (
    <Volume2 size={22} />
  ) : (
    <VolumeX size={22} />
  )}
</button>
</div>
</>
  );
}
