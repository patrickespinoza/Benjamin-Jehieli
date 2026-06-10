import React, { useState } from "react";
import Carousel from "./carrusel";
import Countdown from "./componentes-encabezado/encabeza-cuenta";
import { motion, AnimatePresence } from "framer-motion";
import Novios from "./componentes-encabezado/novios-info";


export default function Intinerario() {
  // Estados para manejar el formulario
  const[mostraModal, setMostrarModal] = useState(false)
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
  const [invitados, setInvitados] = useState(1);
  const [error, setError] = useState("");
  const enviarConfirmacion = async () => {
  if (!nombreInvitado || !asistencia) {
    setError("Completa tu nombre y confirma asistencia");
    return;
  }

  setError("");

  const data = {
    nombre: nombreInvitado,
    asistencia,
    invitados,
    mensaje: mensajeInvitado,
  };

  try {
    // 🔥 GUARDAR EN GOOGLE SHEETS
    await fetch("https://script.google.com/macros/s/AKfycbybAXwN1Vd27tQTf-UfjUQMBoPWFEaS_vuHnSsR2qR-Pc1tMBxH7TrC00LwGbwh4Mnnrw/exec", {
      method: "POST",
      body: JSON.stringify(data),
    });

    // 📱 WHATSAPP
    const numero = "522381507457";

    const mensaje = `✨ Confirmación de asistencia ✨

Nombre: ${nombreInvitado}
Asistencia: ${asistencia}
Invitados: ${invitados}

Mensaje:
${mensajeInvitado || "Sin mensaje"}

¡Nos vemos en la boda! 💍🎉`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");

    // 🧹 RESET
    setNombreInvitado("");
    setMensajeInvitado("");
    setAsistencia("");
    setInvitados(1);

  } catch (error) {
    console.error("Error:", error);
    setError("Hubo un error al enviar");
  }
};

  return (
    <div >

      <div className="relative flex flex-col items-center justify-center text-white bg-black py-20 px-6 text-center overflow-hidden">

  {/* Glow decorativo sutil */}
  <div className="absolute w-[500px] h-[500px] bg-[#9E8E7B]/20 rounded-full blur-3xl top-[-100px]"></div>

  {/* Contenido */}
  <div className="relative z-10 max-w-3xl">

    <h1 className="text-3xl sm:text-5xl md:text-6xl font-cursiveDancing mb-6 leading-tight">
      ¡Estás invitado!
    </h1>

    <p className="text-lg sm:text-2xl md:text-3xl opacity-90 mb-6">
      Nos encantaría que seas parte de este momento tan especial para nosotros
    </p>

    {/* Línea elegante */}
    <div className="w-20 h-[2px] bg-[#9E8E7B] mx-auto my-6"></div>

    <p className="text-xl sm:text-3xl italic opacity-80">
      ¡Falta poco!
    </p>

  </div>
</div>

{/* COUNTDOWN separado pero integrado */}
<div className="bg-black pb-20 flex justify-center">
  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-6 shadow-xl">
    <Countdown targetDate="2026-10-18T00:00:00" />
  </div>
</div>
        <div className="relative w-full h-[450px] md:h-[550px] lg:h-[700px] overflow-hidden">

  <img
    src="/Novios-02.jpeg"
    alt="Decoración"
    className="w-full h-full object-cover object-center"
  />

  {/* Fade blanco abajo */}
  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>

</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  ">
        <div className="flex items-center justify-center p-6">
  <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full text-center space-y-4 hover:scale-105 transition duration-300">
    
    <h1 className="text-2xl sm:text-3xl font-bold font-playfair tracking-wide">
      CEREMONI DE ACCION DE GRACIAS
    </h1>

    <div className="text-lg font-cursiveDancing space-y-1">
      <p>📅 18 Octubre 2026</p>
      <p>⏰ 1:00 PM</p>
    </div>

    <div className="border-t border-gray-200 pt-4 space-y-2">
      <p className="font-semibold text-lg">Ubicacion</p>
      <p className="font-semibold text-lg">📍 Salón Quinta Cangrejos</p>
      <p className="text-sm text-gray-600">
        C.carril libertad 81 San Vicente Ferrer, 75718, Tehuácan, Pue
      </p>
    </div>

    <a
      href="https://maps.app.goo.gl/Yi5XS1J5hugvNDMM9"
      target="_blank"
      className="inline-block mt-4 bg-[#9E8E7B] hover:bg-[#8a7a69] text-white px-6 py-3 rounded-full shadow-md transition duration-300"
    >
      Ver ubicación
    </a>
  </div>
</div>

{/* SECCIÓN VESTIMENTA */}
      <Novios />

        {/* Sección de Momentos */}
        <div className="flex items-center justify-center py-12 bg-gray-50">
  <div className="max-w-4xl w-full text-center space-y-6">

    {/* Título */}
    <h1 className="text-2xl sm:text-4xl font-bold font-playfair tracking-wide">
      Nuestros Momentos
    </h1>

    {/* Línea decorativa */}
    <div className="w-20 h-[2px] bg-[#9E8E7B] mx-auto"></div>

    {/* Subtexto */}
    <p className="text-gray-500 text-sm sm:text-base">
      Un vistazo a nuestra historia juntos 💛
    </p>

    {/* Carrusel dentro de card */}
    <div className="bg-white rounded-3xl shadow-xl p-4 sm:p-6 flex justify-center">
  <div className="w-full max-w-xl">
    <Carousel />
  </div>
</div>

  </div>
</div>

{/* Sección Mesa de Regalos */}
<div className="flex flex-col items-center justify-center gap-5 h-96 md:h-80 lg:h-[700px]">

  <img
    className="h-24 w-24 sm:h-28 sm:w-28 p-3 opacity-90"
    src="/regalo1.png"
    alt="Regalos"
  />

  <h1 className="text-xl sm:text-2xl font-bold font-playfair tracking-[0.25em] text-[#3f3a35]">
    MESA DE REGALOS
  </h1>

  <p className="text-center text-base sm:text-lg px-6 max-w-2xl leading-relaxed text-[#6b6258]">
    Su presencia es el mejor regalo para nosotros.  
    Si desean tener un detalle adicional, hemos creado una mesa de regalos en Liverpool para acompañarnos en esta nueva etapa.
  </p>

  <button
    className="bg-[#9E8E7B] hover:bg-[#8a7a6a] transition rounded-xl px-8 py-3 w-80 sm:w-96 text-white text-lg tracking-wider shadow-md"
    onClick={() => setMostrarModal(true)}
  >
    Ver Mesa de Regalos
  </button>

  {/* MODAL */}
  <AnimatePresence>
    {mostraModal && (
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 px-4"
        onClick={() => setMostrarModal(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative w-full max-w-[380px] rounded-[28px] overflow-hidden shadow-2xl border border-white/20"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.85, opacity: 0, y: 60 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.85, opacity: 0, y: 60 }}
          transition={{ duration: 0.4 }}
          style={{
            background:
              "linear-gradient(145deg, #fbf8f3 0%, #f1ece4 50%, #e4ddd2 100%)",
          }}
        >
          {/* brillo elegante */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-40 animate-[shine_5s_infinite]" />

          {/* barra dorada superior */}
          <div className="h-1 w-full bg-gradient-to-r from-[#C6A76A] via-[#E6C98A] to-[#C6A76A]" />

          {/* cerrar */}
          <button
            className="absolute top-3 right-4 text-[#6b6258] text-xl"
            onClick={() => setMostrarModal(false)}
          >
            ✕
          </button>

          <div className="p-7">

            {/* LOGO */}
            <div className="flex justify-center">
              <img
                src="/liverpool.svg"
                alt="Liverpool"
                className="h-10 object-contain opacity-90"
              />
            </div>

            {/* título */}
            <div className="text-center mt-5">
              <p className="text-[11px] tracking-[0.35em] text-[#8a7f72] uppercase">
                Mesa de Regalos
              </p>

              <h2 className="text-3xl mt-2 font-playfair text-[#4b4036]">
                Liverpool
              </h2>

              <div className="w-16 h-[1px] bg-[#C6A76A] mx-auto mt-3"></div>
            </div>

            {/* número */}
            <div className="mt-7 text-center">
              <p className="text-[11px] tracking-[0.3em] text-[#8a7f72] uppercase">
                Evento
              </p>

              <p className="text-3xl tracking-[0.2em] text-[#3f3a35] font-light mt-1">
                51983315
              </p>
            </div>

            {/* novios */}
            <p className="text-center text-xs tracking-[0.25em] text-[#7a6f63] mt-4">
              VALERIA & ALEJANDRO
            </p>

            {/* botón */}
            <button
              onClick={() =>
                window.open(
                  "https://mesaderegalos.liverpool.com.mx/milistaderegalos/51983315",
                  "_blank"
                )
              }
              className="w-full mt-6 bg-[#6b5b4d] hover:bg-[#5a4c42] transition text-white py-3 rounded-xl tracking-wider shadow-md"
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
      src="/finalboda.webp"
      alt="Boda"
      className="w-72 sm:w-96 rounded-2xl shadow-2xl border border-white/20"
    />

    {/* Línea decorativa */}
    <div className="w-24 h-[2px] bg-[#9E8E7B] mt-6"></div>

    {/* Texto opcional elegante */}
    <p className="text-white mt-4 text-lg font-cursiveDancing opacity-90">
      ¡Te esperamos!
    </p>

  </div>
</div>
<div className="flex flex-col items-center justify-center gap-4 h-auto py-10 bg-gray-50 rounded-2xl shadow-md">
  <h1 className="text-xl sm:text-2xl font-bold font-playfair">
    CONFIRMAR ASISTENCIA
  </h1>

  <p>Por favor, confirma tu asistencia</p>

  {/* Nombre */}
  <input
    type="text"
    placeholder="Nombre y apellido"
    value={nombreInvitado}
    onChange={(e) => setNombreInvitado(e.target.value)}
    className="w-80 p-3 border rounded-lg focus:ring-2 focus:ring-[#9E8E7B]"
  />

  {/* Asistencia */}
  <div className="flex gap-4">
    <button
      onClick={() => setAsistencia("Sí asistiré")}
      className={`px-4 py-2 rounded-lg border ${
        asistencia === "Sí asistiré"
          ? "bg-green-500 text-white"
          : "bg-white"
      }`}
    >
      ✅ Asistiré
    </button>

    <button
      onClick={() => setAsistencia("No podré asistir")}
      className={`px-4 py-2 rounded-lg border ${
        asistencia === "No podré asistir"
          ? "bg-red-500 text-white"
          : "bg-white"
      }`}
    >
      ❌ No asistiré
    </button>
  </div>

  {/* Número de invitados */}
  <input
    type="number"
    min="1"
    value={invitados}
    onChange={(e) => setInvitados(e.target.value)}
    className="w-80 p-3 border rounded-lg text-center"
  />

  {/* Mensaje */}
  <textarea
    placeholder="Mensaje para los novios (opcional)"
    value={mensajeInvitado}
    onChange={(e) => setMensajeInvitado(e.target.value)}
    className="w-80 p-3 border rounded-lg"
  />

  {/* Error */}
  {error && (
    <p className="text-red-500 text-sm">{error}</p>
  )}

  {/* Botón */}
  <button
  onClick={enviarConfirmacion}
  className="bg-[#9E8E7B] hover:bg-[#8a7a69] text-white px-6 py-3 rounded-full shadow-lg transition duration-300"
>
  Enviar Confirmación
</button>
</div>

      </div>      
    </div>
  );
}
