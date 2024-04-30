import React from "react";

function Feature() {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 pb-20 border-b-[2px] border-zinc-600">
        <h1 className="text-8xl tracking-tight">Features</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="cardcontainer w-1/2 h-[80vh] bg-red-500 rounded-xl relative">
            <h1 className="text-8xl absolute leading-none tracking-tighter text-orange-400 left-full -translate-x-1/2 top-1/2 -translate-y-1/2">
              {"FYDE".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>
            <div className="w-full h-full bg-green-600 rounded-xl overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
                className="w-full h-full bg-cover bg"
              />
            </div>
          </div>
          <div className="cardcontainer w-1/2 h-[80vh] bg-red-500 rounded-xl relative">
            <h1 className="text-8xl absolute leading-none tracking-tighter text-green-400 right-full translate-x-1/2 top-1/2 -translate-y-1/2">
              {"VISE".split("").map((item, index) => (
                <span>{item}</span>
              ))}
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
