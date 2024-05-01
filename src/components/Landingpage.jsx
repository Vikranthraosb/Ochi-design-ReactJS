import { motion } from "framer-motion";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

function Landingpage() {
  return (
    <div
      data-scroll
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-800 pt-10"
    >
      {/* made this page scroll slow using locomotive js */}
      <div className="textstructure mt-[8vw] px-20">
        <div className="masker">
          <h1 className="uppercase text-[6.5vw] leading-[6vw] tracking-tighter font-semibold">
            We create
          </h1>
        </div>
        <div className="masker flex items-end gap-5">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "9vw" }}
            transition={{ ease: [0.65, 0, 0.35, 1], duration: 1 }}
            className="bg-red-500 px-5 py-4 w-[9vw] rounded-xl h-[4vw]"
          ></motion.div>
          <h1 className="uppercase text-[6.5vw] leading-[6vw] tracking-tighter">
            Eye Opening
          </h1>
        </div>
        <div className="masker">
          <h1 className="uppercase text-[6.5vw] leading-[6vw] tracking-tighter">
            presentation
          </h1>
        </div>
      </div>
      <div className="border-t-2 border-zinc-700 mt-[7vw] flex items-center justify-between pt-8 px-20">
        {["For public and private companies", "From pitch to IPO"].map(
          (item, index) => (
            <p
              key={index}
              className="text-md font-light tracking-tight leading-none"
            >
              {item}
            </p>
          )
        )}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 rounded-full border-2 border-zinc-400 text-sm capitalize">
            Start Project
          </div>
          <div className="px-3 py-3 rounded-full border-2 border-zinc-400 text-sm capitalize">
            <MdOutlineArrowOutward />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
