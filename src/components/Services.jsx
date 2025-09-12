import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/services.css";

const services = [
  { titulo: "Limpieza de casas y departamentos", img: "/images/services/casas.jpg" },
  { titulo: "Limpieza de oficinas y locales comerciales", img: "/images/services/oficinas.jpg" },
  { titulo: "Limpieza profunda y desinfección completa", img: "/images/services/profunda.jpg" },
  { titulo: "Limpieza de vidrios y ventanales", img: "/images/services/vidrios.jpg" },
  { titulo: "Limpieza y cuidado de tapizados y alfombras", img: "/images/services/tapizados.jpg" },
  { titulo: "Limpieza final de obra", img: "/images/services/obra.jpg" },
  { titulo: "Aromatización y sanitización de ambientes", img: "/images/services/aromatizacion.jpg" },
  { titulo: "Limpieza de shoppings y grandes superficies", img: "/images/services/LimpiezaGrande.webp" },
];


export default function Services() {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();

  const touchStartX = useRef(null);

  const prevService = () => {
    setSelected((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const nextService = () => {
    setSelected((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const handleViewService = () => {
    navigate("/services", { state: { service: services[selected] } });
  };

  // 👉 lógica swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      // swipe izquierda → siguiente
      nextService();
    } else if (diff < -50) {
      // swipe derecha → anterior
      prevService();
    }

    touchStartX.current = null;
  };

  return (
    <div
      id="services"
      className="services-container"
      data-aos="fade-up"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Flechas */}
      <button className="arrow left" onClick={prevService} data-aos="fade-right">
        <ChevronLeft size={28} />
      </button>
      <button className="arrow right" onClick={nextService} data-aos="fade-left">
        <ChevronRight size={28} />
      </button>

      {/* Cards */}
      <div className="cards" data-aos="fade-up">
        {services.map((service, index) => (
          <div key={index} className="card-wrapper">
            <div
              className={`card 
                ${selected === index ? "active" : ""} 
                ${index === (selected - 1 + services.length) % services.length ? "left" : ""} 
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

      {/* Botón "Ver servicio" */}
      <div
        data-aos="fade-up"
        style={{
          fontFamily: "'Lato', sans-serif",
          textAlign: "center",
        }}
      >
        <button className="service-btn" onClick={handleViewService}>
          Ver servicio
        </button>
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
