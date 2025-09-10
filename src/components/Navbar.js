import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const menuItems = [
  { nameTR: "Ana Sayfa", nameEN: "Home", id: "hero" },
  { nameTR: "Hakkımda", nameEN: "About", id: "about" },
  { nameTR: "Deneyimlerim", nameEN: "Experiences", id: "experiences" },
  { nameTR: "Yeteneklerim", nameEN: "Skills", id: "skills" },
  { nameTR: "Projelerim", nameEN: "Projects", id: "projects" },
  { nameTR: "Referanslarım", nameEN: "References", id: "references" },
  { nameTR: "İletişim", nameEN: "Contact", id: "contact" },

];

const Navbar = ({ lang = "tr", setLang = () => { } }) => {
  const [isOpen, setIsOpen] = useState(false); // mobile drawer
  const [isLangOpen, setIsLangOpen] = useState(false); // lang dropdown (desktop)
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const langRef = useRef(null);

  // Close lang dropdown on outside click
  useEffect(() => {
    const onDocClick = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // Scroll listener -> scrolled background + active section detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = Array.from(document.querySelectorAll("section[id]"));
      const mid = window.innerHeight * 0.4; // kontrol noktası
      let current = "hero";
      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= mid && rect.bottom >= mid) {
          current = sec.id;
        }
      });
      setActiveSection(current);
    };

    // initial run
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleNavLinkClick = () => {
    // mobil drawer kapansın
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? "bg-darkBlue/60 backdrop-blur-md" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 h-16">
          {/* Logo (sol) */}
          <div className="flex-shrink-0">
            <a
              href="#hero"
              className="text-7xl font-bold text-white font-almondita"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              A. Durmaz
            </a>
          </div>

          {/* Centered menu (desktop) */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center gap-8 text-white">
              {menuItems.map((item) => {
                const label = lang === "tr" ? item.nameTR : item.nameEN;
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={handleNavLinkClick}
                      className={`transition px-2 py-1 ${isActive ? "text-blue-400" : "hover:text-blue-400"
                        }`}
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right actions: language selector (desktop + mobile) + mobile menu button */}
          <div className="ml-auto flex items-center gap-3">
            {/* Desktop language selector */}
            <div className="hidden lg:block relative" ref={langRef}>
              <button
                onClick={() => setIsLangOpen((s) => !s)}
                className="px-3 py-2 bg-gray-800 rounded-md text-white flex items-center gap-2"
                aria-haspopup="true"
                aria-expanded={isLangOpen}
              >
                {lang === "tr" ? "TR" : "EN"} <span className="text-sm">▼</span>
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-gray-900 rounded-md shadow-lg overflow-hidden">
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-800"
                    onClick={() => {
                      setLang("tr");
                      setIsLangOpen(false);
                    }}
                  >
                    🇹🇷 Türkçe
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-800"
                    onClick={() => {
                      setLang("en");
                      setIsLangOpen(false);
                    }}
                  >
                    🇬🇧 English
                  </button>
                </div>
              )}
            </div>

            {/* Mobile language toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setLang(lang === "tr" ? "en" : "tr")}
                className="px-3 py-2 bg-gray-800 rounded-md text-white"
              >
                {lang === "tr" ? "TR" : "EN"}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                aria-label={isOpen ? "Kapat" : "Menü"}
                onClick={() => setIsOpen((s) => !s)}
                className="p-2 rounded-md bg-gray-800 text-white"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden absolute left-0 right-0 top-full bg-darkBlue/95 border-t border-darkBlue/40 transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-6 py-4">
          <ul className="flex flex-col gap-3">
            {menuItems.map((item) => {
              const label = lang === "tr" ? item.nameTR : item.nameEN;
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={handleNavLinkClick}
                    className={`block px-3 py-2 rounded-md ${isActive ? "text-blue-400" : "hover:text-blue-400"
                      }`}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mt-4 border-t border-darkBlue/40 pt-3">
            <div className="text-sm text-gray-300 mb-2">Dil / Language</div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setLang("tr");
                  setIsOpen(false);
                }}
                className={`flex-1 px-3 py-2 rounded-md ${lang === "tr" ? "bg-purple-600" : "bg-gray-800"
                  }`}
              >
                🇹🇷 Türkçe
              </button>
              <button
                onClick={() => {
                  setLang("en");
                  setIsOpen(false);
                }}
                className={`flex-1 px-3 py-2 rounded-md ${lang === "en" ? "bg-purple-600" : "bg-gray-800"
                  }`}
              >
                🇬🇧 English
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
