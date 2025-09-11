import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const prevService = () => {
    setSelected((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const nextService = () => {
    setSelected((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const handleViewService = () => {
    navigate("/services", { state: { service: services[selected] } });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const cardWidth = el.firstChild.offsetWidth; // ancho de cada tarjeta
      const index = Math.round(el.scrollLeft / cardWidth);
      setSelected(index);
    };

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

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
      <div className="cards" ref={scrollRef} data-aos="fade-up">
  {services.map((service, index) => (
    <div key={index} className="card-wrapper">
      <div
        className={`card ${selected === index ? "active" : ""}`}
        onClick={() => setSelected(index)}
      >
        <img src={service.img} alt={service.titulo} />
        <div className="card-title">{service.titulo}</div>
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
