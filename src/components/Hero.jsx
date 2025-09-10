// src/components/Hero.jsx
import "../styles/hero.css";

const Hero = () => {
  return (
    <>
    <section className="hero">
      {/* Imagen del equipo */}
      <div className="hero-img">
        <img src="/images/hero/Limpieza.png" alt="Equipo Nova Clean" />
      </div>

      {/* Texto principal (encima de burbujas) */}
      <div className="hero-content">
        <h1>BIENVENIDO A <br/> NOVA CLEAN</h1>
        <p className="sub">
          Somos especialistas en limpieza profesional de casas, oficinas y
          comercios.
          <br/>
          Nuestro compromiso es entregar resultados impecables, seguros y
          agradables en cada espacio.
        </p>
        <button className="shadow__btn">Contáctanos</button>
      </div>
    </section>

    <main className="hero-main">
       {/* Numero de contacto */}
      <div className="hero-contact-info">
        <h2>Llamar +3417549554</h2>
      </div>
    </main>
    </>
  );
};

export default Hero;
