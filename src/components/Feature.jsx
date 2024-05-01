import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";

function Feature() {
  const [ishovering, setishovering] = useState(false);
  const [ishovering2, setishovering2] = useState(false);

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 pb-20 border-b-[2px] border-zinc-600">
        <h1 className="text-8xl tracking-tight">Features</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div
            onMouseEnter={() => setishovering(true)}
            onMouseLeave={() => setishovering(false)}
            className="cardcontainer w-1/2 h-[80vh] bg-red-500 rounded-xl relative"
          >
            <h1 className="text-8xl absolute leading-none tracking-tighter  text-green-600 left-full translate-x-1/2 top-1/2 -translate-y-1/2">
              <h1 className="absolute flex overflow-y-hidden left-full -translate-x-[200%] -translate-y-[100%] z-50 font-semibold">
                {"FYDE".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={ishovering ? { y: "0" } : { y: "100%" }}
                    transition={{
                      ease: [0.65, 0, 0.35, 1],
                      delay: index * 0.06,
                    }}
                    className="inline-block -translate-y-full"
                  >
                    {item}
                  </motion.span>
                  // since its span Element, made it inline block
                ))}
              </h1>
            </h1>
            <div className="w-full h-full bg-green-600 rounded-xl overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
                className="w-full h-full bg-cover bg"
              />
            </div>
          </div>
          <div
            onMouseEnter={() => setishovering2(true)}
            onMouseLeave={() => setishovering2(false)}
            className="cardcontainer w-1/2 h-[80vh] bg-red-500 rounded-xl relative"
          >
            <h1 className="text-8xl absolute leading-none tracking-tighter text-green-600 right-full translate-x-1/2 top-1/2 -translate-y-1/2">
              <h1 className="absolute flex overflow-hidden right-full translate-x-[200%] -translate-y-[100%] font-semibold">
                {"VYSE".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={ishovering2 ? { y: "0" } : { y: "100%" }}
                    transition={{
                      ease: [0.65, 0, 0.35, 1],
                      delay: index * 0.06,
                    }}
                    className="inline-block -translate-y-full"
                  >
                    {item}
                  </motion.span>
                  // since its span Element, made it inline block
                ))}
              </h1>
            </h1>
            <div className="w-full h-full bg-green-600 rounded-xl overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
                className="w-full h-full bg-cover bg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
