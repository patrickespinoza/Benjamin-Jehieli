import React from "react";
import { motion } from "framer-motion";

const Novios = () => {
  return (
    <div
      className="w-full py-24 px-6 flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "#DDDBD7",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="max-w-5xl w-full rounded-3xl px-8 py-16 sm:px-16 text-center relative overflow-hidden border"
        style={{
          backgroundColor: "#DDDBD7",
          borderColor: "#AEA38E",
          boxShadow: "0 20px 60px rgba(89,59,31,0.10)",
        }}
      >
        {/* Decoración */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-20 top-[-250px] left-1/2 -translate-x-1/2"
          style={{
            backgroundColor: "#AEA38E",
          }}
        />

        {/* Ornamento */}
        <p
          className="text-4xl mb-6 relative z-10"
          style={{
            color: "#AEA38E",
            fontFamily: "Cormorant Garamond",
          }}
        >
          ❦
        </p>

        {/* Texto superior */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.4em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.25em] text-sm sm:text-base font-semibold relative z-10"
          style={{
            color: "#593B1F",
          }}
        >
          Con la bendición de Dios y nuestros padres
        </motion.p>

        {/* Línea decorativa */}
        <div
          className="w-16 h-[1px] mx-auto mt-4"
          style={{
            backgroundColor: "#AEA38E",
          }}
        />

        {/* Nombre novia */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 text-4xl sm:text-5xl md:text-6xl leading-tight relative z-10"
          style={{
            color: "#53583E",
            fontFamily: "Cormorant Garamond",
          }}
        >
          Jehieli López Gonzaga
        </motion.h1>

        {/* & */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="my-6 text-4xl sm:text-5xl relative z-10"
          style={{
            color: "#593B1F",
            fontFamily: "Cormorant Garamond",
          }}
        >
          &
        </motion.p>

        {/* Nombre novio */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl leading-tight relative z-10"
          style={{
            color: "#53583E",
            fontFamily: "Cormorant Garamond",
          }}
        >
          Benjamín José Flores Martínez
        </motion.h1>

        {/* Línea elegante */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "7rem" }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="h-[1px] mx-auto mt-10"
          style={{
            backgroundColor: "#AEA38E",
          }}
        />

        {/* Padres */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          
          {/* Padres del Novio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 border"
            style={{
              backgroundColor: "#F3F1EE",
              borderColor: "#AEA38E",
              boxShadow: "0 8px 30px rgba(89,59,31,0.08)",
            }}
          >
            <h2
              className="uppercase tracking-[0.25em] text-sm mb-4"
              style={{
                color: "#593B1F",
                fontWeight: "600",
              }}
            >
              Padres del Novio
            </h2>

            <div
              className="w-12 h-[1px] mx-auto mb-6"
              style={{
                backgroundColor: "#AEA38E",
              }}
            />

            <p
              className="text-2xl"
              style={{
                color: "#53583E",
                fontFamily: "Cormorant Garamond",
                fontWeight: "600",
              }}
            >
              Benjamín Antonio Flores Catañeda
            </p>

            <p
              className="mt-3 text-2xl"
              style={{
                color: "#53583E",
                fontFamily: "Cormorant Garamond",
                fontWeight: "600",
              }}
            >
              Doris Martínez Herrera
            </p>
          </motion.div>

          {/* Padres de la Novia */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 border"
            style={{
              backgroundColor: "#F3F1EE",
              borderColor: "#AEA38E",
              boxShadow: "0 8px 30px rgba(89,59,31,0.08)",
            }}
          >
            <h2
              className="uppercase tracking-[0.25em] text-sm mb-4"
              style={{
                color: "#593B1F",
                fontWeight: "600",
              }}
            >
              Padres de la Novia
            </h2>

            <div
              className="w-12 h-[1px] mx-auto mb-6"
              style={{
                backgroundColor: "#AEA38E",
              }}
            />

            <p
  className="text-2xl"
  style={{
    color: "#53583E",
    fontFamily: "Cormorant Garamond",
    fontWeight: "600",
  }}
>
  † Jesús Santiago López Cardoso
</p>

            <p
              className="mt-3 text-2xl"
              style={{
                color: "#53583E",
                fontFamily: "Cormorant Garamond",
                fontWeight: "600",
              }}
            >
              Adela Gonzaga Romero
            </p>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

export default Novios;