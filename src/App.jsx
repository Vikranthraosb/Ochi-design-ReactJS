import React from "react";
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landingpage";
import Marque from "./components/Marque";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Feature from "./components/Feature";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-zinc-800 min-h-screen w-full text-white">
      <Navbar />
      <Landingpage />
      <Marque />
      <About />
      <Eyes />
      <Feature />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
