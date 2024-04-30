import React from "react";
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landingpage";

function App() {
  return (
    <div className="bg-zinc-800 h-screen w-full text-white">
      <Navbar />
      <Landingpage />
    </div>
  );
}

export default App;
