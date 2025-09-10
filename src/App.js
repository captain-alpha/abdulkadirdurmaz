import "./App.css";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import References from "./components/References";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import GalaxyScene from "./components/GalaxyScene";

function App() {
  const [lang, setLang] = useState("tr"); // dil state’i burada tutuluyor

  return (
    <div className="bg-darkBlue relative w-full min-h-screen text-white">
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />

      {/* diğer section'lar... */}
      {/* Hero sonrası tüm içerik yıldızlı arka planda */}
      <div className="relative z-10">
        <GalaxyScene />
        <About lang={lang} />
        <Experiences lang={lang} />
        <Skills lang={lang} />
        <Projects lang={lang} />
        <References lang={lang} />
        <Footer lang={lang} />
        <ScrollToTop/>
      </div>

    </div>
  );
}

export default App;