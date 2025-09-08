import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GalaxyScene from "./components/GalaxyScene";
//import { useState, useEffect } from "react";

/*
import earthImage from "./images/earth.png";
import StarryBackground from "./components/StarryBackground";
import Earth from "./components/Earth";
import BlackHole from "./components/Blackhole";
*/

function App() {
  /*
  // delay background until hero video fade completes
  const [mountBackground, setMountBackground] = useState(false);

  useEffect(() => {
    // örnek: 5s video + 1s fade => 6000ms sonra background mount et
    const t = setTimeout(() => setMountBackground(true), 6000);
    return () => clearTimeout(t);
  }, []);
  */
  return (
    <div className="bg-darkBlue relative w-full min-h-screen text-white">
      <Navbar />
      <Hero />

      {/* diğer section'lar... */}
      {/* Hero sonrası tüm içerik yıldızlı arka planda */}
      <div className="relative z-10">
        <GalaxyScene />

        <section className="min-h-screen flex items-center justify-center">
          <h2 className="text-4xl">Hakkımda</h2>
        </section>
        <section className="min-h-screen flex items-center justify-center">
          <h2 className="text-4xl">Hakkımda</h2>
        </section>
        <section className="min-h-screen flex items-center justify-center">
          <h2 className="text-4xl">Hakkımda</h2>
        </section>
        <section className="min-h-screen flex items-center justify-center">
          <h2 className="text-4xl">Hakkımda</h2>
        </section>
        <section className="min-h-screen flex items-center justify-center">
          <h2 className="text-4xl">Hakkımda</h2>
        </section>
        <section className="min-h-screen flex items-center justify-center">
          <h2 className="text-4xl">Hakkımda</h2>
        </section>
        <section className="min-h-screen flex items-center justify-center">
          <h2 className="text-4xl">Hakkımda</h2>
        </section>
        <section className="min-h-screen flex items-center justify-center">
          <h2 className="text-4xl">Hakkımda</h2>
        </section>
        <section className="min-h-screen flex items-center justify-center">
          <h2 className="text-4xl">Hakkımda</h2>
        </section>
      </div>

      {/* Dünya animasyonu */}
      {/*<Earth />*/}
      {/*<BlackHole /> */}
    </div>
  );
}

export default App;