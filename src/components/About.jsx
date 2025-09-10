import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/about.css";

const items = [
  {
    key: "personal",
    title: "Personal altamente capacitado y de confianza",
    text: "Nuestro equipo está formado por profesionales con experiencia y dedicación.",
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    key: "productos",
    title: "Productos de máxima calidad",
    text: "Utilizamos insumos seguros, eficaces y respetuosos con el medio ambiente.",
    icon: "https://cdn-icons-png.flaticon.com/512/994/994928.png",
  },
  {
    key: "puntualidad",
    title: "Puntualidad y compromiso",
    text: "Nos ajustamos a tus tiempos y necesidades, garantizando un servicio eficiente.",
    icon: "https://cdn-icons-png.flaticon.com/512/1827/1827379.png",
  },
  {
    key: "flexibilidad",
    title: "Flexibilidad horaria",
    text: "Diseñamos un plan de limpieza adaptado a tu rutina.",
    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
  },
  {
    key: "atencion",
    title: "Atención personalizada",
    text: "Cada cliente es único, por eso ofrecemos soluciones a medida con precios competitivos.",
    icon: "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
  },
];

export default function Carousel() {
  const [isMobile, setIsMobile] = useState(false);
  const [active, setActive] = useState("personal");

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    AOS.init({ duration: 800, once: true });

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className={`carousel-container ${isMobile ? "mobile" : ""}`}>
      {isMobile ? (
        <>
          {/* Texto introductorio */}
          <p className="about-text" data-aos="fade-up">
            En <span className="highlight">NOVA</span>{" "}
            <span className="highlight2">CLEAN</span>, trabajamos cada día
            trabajamos cada día para mejorar la calidad de vida de nuestros
            clientes, ofreciendo servicios de limpieza que generan espacios
            seguros, saludables y confortables. Nuestro propósito es crear
            ambientes frescos, higiénicos y relucientes, para que disfrutes de
            un entorno más agradable, ya sea en tu hogar, oficina o comercio.
          </p>

          {/* Cards en mobile */}
          <div className="cards-about" data-aos="zoom-in">
            <div className="card-about red">
              <p className="tip">Personal capacitado</p>
              <p className="second-text">Equipo de confianza y experiencia</p>
            </div>
            <div className="card-about blue">
              <p className="tip">Productos de calidad</p>
              <p className="second-text">Eficaces y eco-amigables</p>
            </div>
            <div className="card-about green">
              <p className="tip">Compromiso</p>
              <p className="second-text">Puntualidad y flexibilidad</p>
            </div>
          </div>
        </>
      ) : (
        <div className="carousel-layout" data-aos="fade-left">
          {/* Lista izquierda */}
          <div className="carousel-left">
            <ul className="list">
              {items.map((item, i) => (
                <li
                  key={item.key}
                  className={`item ${active === item.key ? "active" : ""}`}
                >
                  <label onClick={() => setActive(item.key)}>
                    {item.title}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div className="carousel-border" />

          {/* Contenido derecho */}
          <div className="carousel-right">
            {items.map((item) => (
              <div
                key={item.key}
                className={`content ${active === item.key ? "show" : ""}`}
              >
                <span
                  className="picto"
                  style={{ backgroundImage: `url(${item.icon})` }}
                />
                <h1>{item.title}</h1>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
