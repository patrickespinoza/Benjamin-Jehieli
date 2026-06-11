import { useEffect, useState } from "react";

const Countdown = ({ targetDate }) => {
  const calculateTime = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        DÍAS: Math.floor(difference / (1000 * 60 * 60 * 24)),
        HORAS: Math.floor((difference / (1000 * 60 * 60)) % 24),
        MINUTOS: Math.floor((difference / 1000 / 60) % 60),
        SEGUNDOS: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTime());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <section>
      <div className="flex flex-col items-center">

        {/* Título */}
        <p
          className="uppercase tracking-[4px] text-xs sm:text-sm mb-4"
          style={{ color: "#AEA38E" }}
        >
          Cuenta Regresiva
        </p>

        {/* Línea decorativa */}
        <div
          className="w-20 h-[1px] mb-8"
          style={{
            backgroundColor: "#AEA38E",
          }}
        />

        {/* Contador */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

          {Object.keys(timeLeft).map((interval) => (
            <div
              key={interval}
              className="flex flex-col items-center justify-center
              rounded-2xl px-5 py-5 min-w-[90px] sm:min-w-[120px]"
              style={{
                backgroundColor: "#DDDBD7",
                border: "1px solid #AEA38E",
                boxShadow: "0 10px 30px rgba(89,59,31,0.10)",
              }}
            >
              {/* Número */}
              <span
                className="leading-none"
                style={{
                  color: "#53583E",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontFamily: "Cormorant Garamond",
                  fontWeight: "500",
                }}
              >
                {String(timeLeft[interval]).padStart(2, "0")}
              </span>

              {/* Separador */}
              <div
                className="w-10 h-[1px] my-3"
                style={{
                  backgroundColor: "#AEA38E",
                }}
              />

              {/* Texto */}
              <span
                className="text-[10px] sm:text-xs tracking-[2px]"
                style={{
                  color: "#593B1F",
                }}
              >
                {interval}
              </span>
            </div>
          ))}
        </div>

        {Object.keys(timeLeft).length === 0 && (
          <span
            className="text-xl mt-4"
            style={{
              color: "#53583E",
              fontFamily: "Cormorant Garamond",
            }}
          >
            ¡Ha llegado el gran día!
          </span>
        )}
      </div>
    </section>
  );
};

export default Countdown;