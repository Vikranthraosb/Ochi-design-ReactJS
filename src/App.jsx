import React from "react";
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landingpage";
import Marque from "./components/Marque";
import About from "./components/About";
import Eyes from "./components/Eyes";

function App() {
  return (
    <div className="bg-zinc-800 min-h-screen w-full text-white">
      <Navbar />
      <Landingpage />
      <Marque />
      <About />
      <Eyes />
    </div>
  );
}

export default App;
