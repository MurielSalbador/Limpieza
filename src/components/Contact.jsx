import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/contact.css";

export default function Contact() {
  const phone = "3417549554"; 
  const message = "¡Hola! Me gustaría recibir más información sobre sus servicios de limpieza."; 

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="contact" className="contact-section" data-aos="zoom-in">
      <h2 className="contact-title" data-aos="fade-down">¡Contáctanos!</h2>
      <p className="contact-subtitle" data-aos="fade-up">
        ¿Tienes dudas, quieres un presupuesto o agendar una limpieza?
      </p>

      <div className="contact-card" data-aos="flip-left">
        <p>
          Estamos listos para ayudarte. Conecta con nosotros y te responderemos de inmediato.
        </p>
      </div>

      <div className="contact-info">
        <h3 data-aos="fade-right">Email:</h3>
        <a 
          href="mailto:Novacleanservicioslimpieza@gmail.com" 
          data-aos="fade-left"
        >
          Novacleanservicioslimpieza@gmail.com
        </a>

        <h3 data-aos="fade-right">WhatsApp:</h3>
        <a
          className="whatsapp-btn"
          href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-up"
        >
          📲 Enviar mensaje por WhatsApp
        </a>
      </div>
    </section>
  );
}
