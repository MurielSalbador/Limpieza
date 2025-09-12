import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../styles/serviceDetail.css";

export default function ServiceDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const service = location.state?.service;

  if (!service) {
    navigate("/");
    return null;
  }

  const whatsappNumber = "3417549554";
  const whatsappMessage = `Hola! Quiero contactar el servicio de ${service.titulo}`;

  // Textos de cada servicio
    const serviceDescriptions = {
    "Limpieza final de obra":
      "Nos ocupamos de la exigente tarea de dejar impecable cada espacio tras una construcción o reforma. Coordinamos cada detalle para eliminar polvo, restos de materiales y suciedad acumulada, entregando resultados limpios, seguros y listos para habitar.",
    "Limpieza de tapizados y alfombras":
      "Con personal capacitado y equipamiento específico, removemos la suciedad y manchas más profundas sin dañar telas ni superficies. Dejamos alfombras y tapizados frescos, higienizados y con una nueva vida útil.",
    "Limpieza de vidrios y ventanales":
      "Logramos cristales transparentes y brillantes, libres de manchas y polvo. Nuestro servicio cuida cada detalle para que la luz natural embellezca tus ambientes y tus ventanas se vean siempre impecables.",
    "Limpieza de casas y departamentos":
      "Nuestro equipo especializado transforma cada hogar en un espacio reluciente, seguro y acogedor. Nos ocupamos de cada detalle, desde los rincones más pequeños hasta las superficies de uso diario, para que disfrutes de tu casa limpia como nueva.",
    "Limpieza de oficinas y locales comerciales":
      "Un ambiente de trabajo limpio y ordenado aumenta la productividad y transmite confianza a tus clientes. Ofrecemos un servicio profesional y discreto que mantiene tu oficina o local impecable día tras día.",
    "Aromatización y sanitización de ambientes":
      "Creamos entornos frescos y agradables con técnicas de aromatización y desinfección que mejoran la calidad del aire. Nuestros productos eliminan bacterias y malos olores, dejando un ambiente saludable, limpio y renovado.",
    "Limpieza profunda y desinfección completa":
      "Eliminamos la suciedad más difícil y los agentes que afectan la higiene de los espacios. Utilizamos productos de calidad y técnicas modernas para garantizar ambientes saludables, seguros y completamente desinfectados.",
    "Limpieza de shoppings y grandes superficies":
      "Nos especializamos en mantener impecables espacios de gran concurrencia como shoppings, galerías y superficies comerciales. Contamos con equipos de trabajo adaptados a grandes áreas, garantizando limpieza constante, seguridad y una experiencia agradable para cada visitante.",
  };


  return (
    <>
      <Header />

      <div className="service-detail">
        {/* Hero con imagen */}
        <div
          className="service-hero"
          style={{ backgroundImage: `url(${service.img})` }}
        >
          <h1>{service.titulo}</h1>

          {/* Botón dentro del hero */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button-wrapper"
          >
            <button
              className="button hero-button"
              style={{ "--clr": "#25d366" }}
            >
              <span className="button-decor"></span>
              <div className="button-content">
                <div className="button__icon">
                  <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                  >
                    <path
                      d="M16 3C9.37 3 4 8.37 4 15c0 2.55.79 4.92 2.14 6.87L4 29l7.36-2.09A12 12 0 0016 27c6.63 0 12-5.37 12-12S22.63 3 16 3z"
                      fill="#fff"
                    />
                    <path
                      d="M21.29 19.43c-.33-.17-1.96-.97-2.26-1.08-.3-.12-.52-.17-.74.17-.22.34-.85 1.08-1.05 1.3-.19.22-.39.25-.72.08-.33-.17-1.39-.51-2.64-1.63-.97-.86-1.62-1.93-1.81-2.26-.19-.33-.02-.5.14-.67.14-.14.33-.36.5-.55.17-.19.22-.34.34-.56.11-.22.06-.41-.03-.58-.09-.17-.74-1.78-1.02-2.43-.27-.65-.54-.56-.74-.57-.19-.01-.41-.02-.63-.02-.22 0-.58.08-.89.41-.3.33-1.17 1.14-1.17 2.78 0 1.64 1.2 3.22 1.37 3.44.17.22 2.36 3.6 5.73 5.05 3.37 1.45 3.37.96 3.97.9.6-.05 1.96-.8 2.24-1.57.28-.77.28-1.43.2-1.57-.08-.14-.3-.22-.63-.39z"
                      fill="#25d366"
                    />
                  </svg>
                </div>
                <span className="button__text">Contactar por WhatsApp</span>
              </div>
            </button>
          </a>
        </div>

        {/* Botón de volver */}
        <div className="back-button-wrapper">
          <button className="bookmarkBtn" onClick={() => navigate(-1)}>
            <span className="IconContainer">
              <svg
                viewBox="0 0 24 24"
                height="1em"
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 19l-7-7 7-7"
                  stroke="#fff"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="text">Volver</p>
          </button>
        </div>

        {/* Texto descriptivo dinámico */}
        <div className="service-description">
          <p>{serviceDescriptions[service.titulo]}</p>
        </div>
      </div>
    </>
  );
}
