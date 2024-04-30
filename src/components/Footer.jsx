import React from "react";

function Footer() {
  return (
    <div className="w-full h-screen p-10 bg-zinc-800 flex gap-5">
      <div className="w-1/2 h-full flex flex-col justify-between">
        <div className="">
          <h1 className="text-8xl uppercase leading-none mb-10 tracking-tighter">
            EYE
          </h1>
          <h1 className="text-7xl uppercase leading-none mb-10 tracking-tighter">
            OPENer
          </h1>
        </div>

        <h1 className="text-2xl uppercase">design..</h1>
      </div>
      <div className="w-1/2 h-full flex flex-col justify-between">
        <div className="">
          <h1 className="text-7xl uppercase leading-none mb-10 tracking-tighter">
            Presentations
          </h1>
          <h1 className="text-2xl uppercase leading-none mb-10 tracking-tighter">
            we design..
          </h1>
          <h1 className="text-2xl uppercase leading-none mb-10 tracking-tighter">
            we develope..
          </h1>
          <h1 className="text-2xl uppercase leading-none mb-10 tracking-tighter">
            we create..
          </h1>
        </div>

        <div className="links">
          <a href="#" className="block text-md font-light capitalize">
            instagram
          </a>
          <a href="#" className="block text-md font-light capitalize">
            Twitter
          </a>
          <a href="#" className="block text-md font-light capitalize">
            linkdin
          </a>
          <a href="#" className="block text-md font-light capitalize">
            github
          </a>
          <a href="#" className="block text-md font-light capitalize">
            telegram
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
