// src/components/Hero.jsx
import "../styles/hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        {/* Imagen del equipo */}
        <div className="hero-img" data-aos-delay="150">
          <img src="/images/hero/HeroIMG.jpg" alt="Equipo Nova Clean" />
        </div>

        {/* Texto principal debajo */}
        <div className="hero-content">
          <h1>BIENVENIDO A NOVA CLEAN</h1>
          <p className="sub" data-aos="zoom-in" data-aos-delay="300">
            Somos especialistas en limpieza profesional de casas, oficinas y
            comercios.
            <br />
            Nuestro compromiso es entregar resultados impecables, seguros y
            agradables en cada espacio.
          </p>
          <button
            className="shadow__btn"
            data-aos="zoom-in"
            data-aos-delay="600"
            onClick={() => {
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contáctanos
          </button>
        </div>

        <div className="hero-img-logo">
          <img src="/images/hero/BurbujasLogo.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default Hero;
