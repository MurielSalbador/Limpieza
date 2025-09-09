import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/services.css";

const services = [
  {
    titulo: "Limpieza de casas y departamentos",
    img: "/images/services/casas.jpg",
  },
  {
    titulo: "Limpieza de oficinas y comercios",
    img: "/images/services/oficinas.jpg",
  },
  {
    titulo: "Limpieza profunda y desinfección",
    img: "/images/services/profunda.jpg",
  },
  {
    titulo: "Limpieza de vidrios y ventanas",
    img: "/images/services/vidrios.jpg",
  },
  {
    titulo: "Limpieza de tapizados y alfombras",
    img: "/images/services/tapizados.jpg",
  },
  { titulo: "Limpieza final de obra", img: "/images/services/obra.jpg" },
  {
    titulo: "Aromatización y sanitización de ambientes",
    img: "/images/services/aromatizacion.jpg",
  },
];

export default function Services() {
  const [selected, setSelected] = useState(0);
  const [active, setActive] = useState(false);

  const prevService = () => {
    setSelected((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const nextService = () => {
    setSelected((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="services-container" data-aos="fade-up">
      {/* Flechas */}
      <button
        className="arrow left"
        onClick={prevService}
        data-aos="fade-right"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        className="arrow right"
        onClick={nextService}
        data-aos="fade-left"
      >
        <ChevronRight size={28} />
      </button>

      {/* Cards */}
      <div className="cards" data-aos="fade-up">
        {services.map((service, index) => (
          <div key={index} className="card-wrapper">
            <div
              className={`card 
          ${selected === index ? "active" : ""} 
          ${
            index === (selected - 1 + services.length) % services.length
              ? "left"
              : ""
          } 
          ${index === (selected + 1) % services.length ? "right" : ""}`}
              onClick={() => setSelected(index)}
            >
              <img src={service.img} alt={service.titulo} />
              <div className="card-title" style={{ textAlign: "center" }}>
                {service.titulo}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        data-aos="fade-up"
        style={{
          fontFamily: "'Lato', sans-serif",
          textAlign: "center",
        }}
      >
        {/* Botón único, centrado debajo */}
        {selected !== null && (
            <button 
      className={`service-btn ${active ? "active" : ""}`} 
      onClick={() => setActive(true)}
    >
      Ver servicio
    </button>
        )}
      </div>

      {/* Dots */}
      <div className="indicators" data-aos="fade-up">
        {services.map((_, index) => (
          <span
            key={index}
            className={`dot ${selected === index ? "active" : ""}`}
            onClick={() => setSelected(index)}
          />
        ))}
      </div>
    </div>
  );
}
