import { Link } from "react-router-dom";
import "../scss/layout/Home.scss";
import React from "react";
import imageHero from "./../images/octavian-dan-b21Ty33CqVs-unsplash.jpg";

function Home() {
    return (
        <section className="home">
            <h1 className="home__title">Proyectos Molones</h1>
            <img
                className="home__hero"
                src={imageHero}
                alt="Imagen con palabra Projects"
            />
            <p className="home__text">
                ¡Disfruta de todas las ventajas de tener todos tus proyectos a
                un solo click!
            </p>
            <Link to="/project" className="home__btn">
                ¡Empieza ahora!
            </Link>
        </section>
    );
}

export default Home;
