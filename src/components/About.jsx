import React from "react";

function About() {
  return (
    <div className="w-full py-20 bg-[#CDEA68] rounded-3xl text-black p-10 leading-3">
      <h1 className="font-['gilroy'] text-6xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo harum,
        nostrum facilis esse reiciendis dicta. Velit exercitationem voluptate,
      </h1>
      <div className="w-full border-t-[1px] border-zinc-600 mt-10 pt-10 flex">
        <div className="w-1/2 ">
          <h1 className="text-3xl"> Our Approach :</h1>
          <button className="px-8 py-5 bg-zinc-800 rounded-full text-white mt-10 flex gap-5 items-center">
            Read More
            <div className="w-2 h-2 rounded-full bg-zinc-200"></div>
          </button>
        </div>
        <div className="w-1/2 bg-[#69be62] rounded-xl h-[60vh]"></div>
      </div>
    </div>
  );
}

export default About;
