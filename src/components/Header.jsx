import React, { useState, useEffect } from "react";
import "../styles/header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <div className="logo">
        <span className="nova">Nova</span>
        <span className="clean">Clean</span>
      </div>

      {/* Links Desktop */}
      <nav className="nav-links">
        <a href="#servicios">Servicios</a>
        <a href="#contactos">Contactos</a>
        <a href="#sobremi">Sobre mí</a>
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
        <a href="#servicios" onClick={() => setMenuOpen(false)}>
          Servicios
        </a>
        <a href="#contactos" onClick={() => setMenuOpen(false)}>
          Contactos
        </a>
        <a href="#sobremi" onClick={() => setMenuOpen(false)}>
          Sobre mí
        </a>
      </div>
    </header>
  );
};

export default Header;
