
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
  const [activeIndex, setActiveIndex] = useState(null);

useEffect(() => {
  const checkMobile = () => setIsMobile(window.innerWidth <= 768);
  checkMobile();
  window.addEventListener("resize", checkMobile);

  AOS.init({ duration: 800, once: true }); 

  return () => window.removeEventListener("resize", checkMobile);
}, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

 return (
  <div className={`carousel-container ${isMobile ? "mobile" : ""}`}>
    {isMobile ? (
      <>
        {/* Texto introductorio */}
        <p className="about-text" data-aos="fade-up">
          En <span className="highlight">NOVA</span>{" "}
          <span className="highlight2">CLEAN</span>, trabajamos cada día...
        </p>

        {/* Caja naranja con acordeón */}
        <div className="about-box" data-aos="zoom-in">
          <h3 className="about-title" data-aos="fade-down">
            Elegirnos significa contar
          </h3>
          <ul className="accordion">
            {items.map((item, index) => (
              <li key={item.key} className="accordion-item" data-aos="fade-up" data-aos-delay={index * 100}>
                <button
                  className={`accordion-title ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <span
                    className="picto small"
                    style={{ backgroundImage: `url(${item.icon})` }}
                  />
                  {item.title}
                </button>
                <div
                  className={`accordion-content ${
                    activeIndex === index ? "show" : ""
                  }`}
                >
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* burbujas decorativas */}
          <span className="circle circle-1"></span>
          <span className="circle circle-2"></span>
          <span className="circle circle-3"></span>
        </div>
      </>
    ) : (
      <div className="carousel-layout" data-aos="fade-left">
        <div className="carousel-left">
          <ul className="list">
            {items.map((item, i) => (
              <li
                key={item.key}
                className="item"
                data-aos="fade-right"
                data-aos-delay={i * 100}
              >
                <input
                  type="radio"
                  id={`radio_${item.key}`}
                  name="basic_carousel"
                  defaultChecked={i === 0}
                />
                <label
                  htmlFor={`radio_${item.key}`}
                  className={`label_${item.key}`}
                >
                  {item.title}
                </label>
                <div className={`content content_${item.key}`}>
                  <span
                    className="picto"
                    style={{ backgroundImage: `url(${item.icon})` }}
                  />
                  <h1>{item.title}</h1>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="carousel-border" />
        <div className="carousel-right" />
      </div>
    )}
  </div>
);
}