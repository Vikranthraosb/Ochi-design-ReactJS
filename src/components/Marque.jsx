import { motion } from "framer-motion";
import React from "react";

function Marque() {
  return (
    <div
      data-scroll
      data-scroll-speed="-.1"
      data-scroll-section
      className="w-full py-20 bg-[#104e46] rounded-3xl"
    >
      {/* made this page scroll slow using locomotive js */}

      <div className="text border-y-2 border-zinc-400 flex whitespace-nowrap items-center overflow-hidden py-1 capitalize pr-20">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
          className="text-[15vw] leading-none uppercase font-semibold -mt-7 pr-20"
        >
          We are OCHI.
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
          className="text-[15vw] leading-none uppercase font-semibold -mt-7 pr-20"
        >
          We are OCHI.
        </motion.h1>
      </div>
    </div>
  );
}

export default Marque;
