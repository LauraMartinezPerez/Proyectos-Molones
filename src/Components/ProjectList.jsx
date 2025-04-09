import { Link } from "react-router-dom";
import "../scss/layout/ProjectList.scss";
import Hero from "./Hero";
import Card from "./Card";



function ProjectList() {

  return (
    <>
        <Hero />
        <div className="container">
        <section className="cardList">
            <Card />
            <Card />
            <Card />
            <Card />
        </section>
        </div>
    </>
  )
}

export default ProjectList