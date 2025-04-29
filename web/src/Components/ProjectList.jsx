

import { Link } from "react-router-dom";
import "../scss/layout/ProjectList.scss";
import Hero2 from "./Hero2";
import Card from "./Card";

const URL_PRODUCTION = "https://proyectosmolones-f9hk.onrender.com";
const URL_LOCAL = "http://localhost:5001";
const URL = import.meta.env.MODE === "development" ? URL_LOCAL : URL_PRODUCTION;

function ProjectList({ cardData }) {
    console.log('cardData:', cardData);
    return (
        <>
            <Hero2 />
        <div className="container">
            <section className="cardList">
          {cardData.map((dataProject) => (
            <div key={dataProject.id}>
              <Link to={`https://proyectosmolones-f9hk.onrender.com/detail/${dataProject.id}`}>
                <Card cardData={dataProject} />
              </Link>
            </div>
          ))}
          </section>
        </div>
        </>
      );
}

export default ProjectList; 