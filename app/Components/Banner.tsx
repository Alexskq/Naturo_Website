"use client";

import { motion } from "framer-motion";

export const Banner = () => {
  return (
    <div className="h-[100vh] w-full relative">
      <motion.div
        className=" top-0 bottom-0 w-screen h-screen  bg-gray-200 opacity-70"
        initial={{ y: "80%", height: "100%" }}
        animate={{ y: "0%", height: "100%" }}
        exit={{ y: ["0%", "50%"], height: ["0%", "50%"] }}
        transition={{ delay: 0.2, duration: 1.3, ease: "easeInOut" }}
      >
        <div className="flex flex-col justify-center items-center h-full bg-[url('/banner.png')] bg-no-repeat bg-cover bg-center">
          <img src="/Logo.png" className="w-32 h-32 p-4" />
          <div className="h-0  border-amber-800 border-[1px] w-16 bg-transparent"></div>
          <span className="text-4xl font-bold text-white">
            Anaïs Carlier - Naturopathe
          </span>
          <p className="text-3xl font-medium">Phrase d&:aposaccroche</p>
        </div>
      </motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen  bg-gray-200 opacity-50"
        initial={{ x: "100%", width: "80%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ delay: 0.2, duration: 1.2, ease: "easeInOut" }}
      />

      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen  bg-gray-800 opacity-50"
        initial={{ x: "100%", width: "80%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 1.4, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen  bg-gray-200 opacity-50"
        initial={{ x: "100%", width: "80%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.6, duration: 1.4, ease: "easeInOut" }}
      />
    </div>
  );
};
