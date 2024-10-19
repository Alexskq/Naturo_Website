"use client";

import { motion } from "framer-motion";
import { CircleChevronDown } from "lucide-react";
import { Lato } from "next/font/google";
import { useEffect, useState } from "react";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
  variable: "--font-lato",
});

export const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    handleResize(); // Vérifiez la taille de l'écran au chargement
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="h-screen w-screen" id="home">
      <motion.div
        className="absolute top-0 bottom-0 w-screen h-screen  bg-gray-200 opacity-70 z-10"
        initial={{ y: "100%", height: "100%" }}
        animate={{ y: "0%", height: "100%" }}
        exit={{ y: ["0%", "50%"], height: ["0%", "50%"] }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
      >
        <div
          className="flex flex-col justify-center items-center h-full bg-[url('/banner.png')] bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/banner.png')",
          }}
        >
          <img src="/Logo.png" className="w-32 h-32 p-4" alt="Logo" />
          <div className="h-0  border-amber-800 border-[1.5px] w-28 bg-transparent my-3"></div>
          <div className={`${lato.variable} font-sans flex flex-col`}>
            <span className="text-4xl md:text-6xl font-bold text-white text-center tracking-widest mb-3">
              Anaïs Carlier
            </span>
            <span className="text-3xl md:text-4xl font-bold text-white text-center tracking-widest mb-3">
              Naturopathe
            </span>
          </div>
          <p className="text-3xl font-medium">Phrase d&apos;accroche</p>
        </div>
        <div className="absolute bottom-0 w-full flex justify-center items-center">
          {!isMobile && (
            <CircleChevronDown
              color="#979F77"
              strokeWidth={1}
              className="mb-4 font-weight-bold h-20 w-20 animate-bounce"
            />
          )}
        </div>
      </motion.div>
      <motion.div
        className=" top-0 bottom-0 right-full w-screen h-screen bg-gray-300
        opacity-50"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ delay: 0.2, duration: 1.2, ease: "easeInOut" }}
      >
        <motion.div
          className="top-0 bottom-0 right-full w-screen h-screen  bg-gray-800 opacity-50"
          initial={{ x: "100%", width: "100%" }}
          animate={{ x: "0%", width: "0%" }}
          transition={{ delay: 0.4, duration: 1.4, ease: "easeInOut" }}
        />

        <motion.div
          className="top-0 bottom-0 right-full w-screen h-screen  bg-gray-200 opacity-50"
          initial={{ x: "100%", width: "100%" }}
          animate={{ x: "0%", width: "0%" }}
          transition={{ delay: 0.6, duration: 1.4, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};
