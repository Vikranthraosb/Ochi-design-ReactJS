import React from "react";
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landingpage";
import Marque from "./components/Marque";

function App() {
  return (
    <div className="bg-zinc-800 min-h-screen w-full text-white">
      <Navbar />
      <Landingpage />
      <Marque />
    </div>
  );
}

export default App;
