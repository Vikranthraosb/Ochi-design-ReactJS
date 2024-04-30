import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-800 flex gap-5 items-center px-32">
      <div className="cardcontainer w-1/2 h-[50vh] ">
        <div className="card w-full h-full bg-[#21514a] rounded-xl flex items-center justify-center relative">
          <h1 className="text-5xl text-center font-semibold capitalize italic">
            OCHI...
          </h1>
          <button className="px-6 py-2 border-[1px] border-zinc-400 rounded-full absolute bottom-3 left-4">
            &copy;2024
          </button>
        </div>
      </div>
      <div className="cardcontainer w-1/2 h-[50vh] flex gap-5 ">
        <div className="card w-1/2 h-full bg-[#19423d] rounded-xl flex items-center justify-center relative">
          <h1 className="text-5xl text-center font-semibold capitalize italic">
            OCHI...
          </h1>
          <button className="px-6 py-2 border-[1px] border-zinc-400 rounded-full absolute bottom-3 left-4">
            &copy;2024
          </button>
        </div>
        <div className="card w-1/2 h-full bg-[#143731] rounded-xl flex items-center justify-center relative">
          <h1 className="text-5xl text-center font-semibold capitalize italic">
            OCHI...
          </h1>
          <button className="px-6 py-2 border-[1px] border-zinc-400 rounded-full absolute bottom-3 left-4">
            &copy;2024
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
