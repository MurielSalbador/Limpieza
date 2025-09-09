// src/components/Hero.jsx
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      {/* Imagen del equipo */}
      <div className="hero-img">
        <img src="/images/hero/Hero.png" alt="Equipo Nova Clean" />
      </div>

      {/* Imagen burbujas full width */}
      <div className="hero-img-bubbles">
        <img src="/images/hero/Burbujas.png" alt="Burbujas decorativas" />
      </div>

      {/* Texto principal (encima de burbujas) */}
      <div className="hero-content">
        <h1>
          Bienvenido a <span className="highlight">NOVA CLEAN</span>
        </h1>
        <p className="subtitle">“Limpio como nuevo”</p>
        <p className="sub">
          Somos especialistas en limpieza profesional de casas, oficinas y
          comercios.  
          Nuestro compromiso es entregar resultados impecables, seguros y
          agradables en cada espacio.
        </p>
      </div>

      {/* Forma ondulada + logo */}
      <div className="wave">
        <img
          src="/images/hero/BurbujasLogo.png"
          alt="Logo Nova Clean"
          className="hero-logo"
        />
      </div>
    </section>
  );
};

export default Hero;
