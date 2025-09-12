// Header.jsx
import React, { useState, useEffect } from "react";
import "../styles/header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // cierra menú móvil
    }
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <span className="nova">Nova</span>
        <span className="clean">Clean</span>
      </div>

      {/* Links Desktop */}
      <nav className="nav-links">
        <button onClick={() => scrollToSection("services")}>Servicios</button>
        <button onClick={() => scrollToSection("contact")}>Contactos</button>
        <button onClick={() => scrollToSection("aboutUs")}>Sobre mí</button>
      </nav>

      {/* Hamburguesa Mobile */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menú Mobile */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <button onClick={() => scrollToSection("services")}>Servicios</button>
        <button onClick={() => scrollToSection("contact")}>Contactos</button>
        <button onClick={() => scrollToSection("aboutUs")}>Sobre mí</button>
      </div>
    </header>
  );
};

export default Header;
