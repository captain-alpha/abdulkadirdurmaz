import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Ana Sayfa", id: "home" },
    { name: "Hakkımda", id: "about" },
    { name: "Özgeçmiş", id: "resume" },
    { name: "Projeler", id: "projects" },
    { name: "Referanslar", id: "references" },
    { name: "Bana Ulaşın", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-darkBlue/60 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div
          className="text-2xl font-bold text-white"
          style={{ fontFamily: "'Almondita', cursive" }}
        >
          Abdulkadir D.
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="hover:text-gray-300 transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-black/90 text-white px-6 py-4 space-y-4">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="block hover:text-gray-300 transition"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;