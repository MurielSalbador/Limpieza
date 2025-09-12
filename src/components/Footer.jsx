import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo + Nombre */}
        <div className="footer-brand">
          <img src="/images/Logo.png" alt="Nova Clean" className="footer-logo" />
          <h2 className="footer-title">
            <span className="highlight3">NOVA</span><span className="highlight4">CLEAN</span> 
          </h2>
        </div>

        {/* Texto descriptivo */}
        <p className="footer-text">
          En <span className="highlight5">NOVA CLEAN</span> trabajamos día a día
          para brindarte un servicio de limpieza profesional, confiable y
          adaptado a tus necesidades. Nuestro equipo capacitado utiliza
          productos de alta calidad para garantizar espacios más sanos, frescos
          y agradables, porque tu bienestar y el de los tuyos es nuestra
          prioridad.
        </p>

        {/* Separador */}
        <div className="footer-separator"></div>

        {/* Copyright */}
        <p className="footer-copy">
          © {new Date().getFullYear()} Nova Clean. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
