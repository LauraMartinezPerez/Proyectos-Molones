import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
    <h2 className="title">Proyectos molones</h2>
    <p className="hero__text">
        Escaparate en línea para recoger ideas a
        través de la tecnología
    </p>
    <Link to="/projectList" className="button--link">
    Ver Proyectos
    </Link> 
</section>
  )
}

export default Hero