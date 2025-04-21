import { Link } from "react-router-dom";
import "../scss/layout/ProjectList.scss";
import Hero2 from "./Hero2";
import Card from "./Card";

// const fakeProjects = [{
//   name: "Poyectos Molones",
//   slogan: "Confía en el proceso",
//   repo: "https://www.google.es",
//   demo: "https://www.google.es",
//   technologies: "HTML, CSS, JS y React",
//   desc: "Es un proyecto sobre bases de datos",
//   autor: "Laura",
//   job: "FullStack",
//   image: "https://es.unesco.org/youth/toptips/user/pages/images/home-feature-two_mobile.png",
//   photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXSTblEVkkdJh15jlAbC3FpvuzCKb1o-pQQA&s",
// }
// ,
// {
//   name: "Proyectos más molones",
//   slogan: "Hoy me siento un poco column-reverse",
//   repo: "https://www.google.es",
//   demo: "https://www.google.es",
//   technologies: "HTML, CSS, JS y React",
//   desc: "Es un proyecto sobre las dificultades de programar",
//   autor: "Judit",
//   job: "FullStack",
//   image: "https://assets.asana.biz/m/2729b34d99aa7f91/webimage-article-project-planning-project-design-2x.jpg",
//   photo: "https://cdn.pixabay.com/photo/2014/04/02/17/07/user-307993_1280.png",

// }];

function ProjectList({ cardData }) {
    return (
        <>
            <Hero2 />
            <div className="container">
                <section className="cardList">
                    {cardData.map((dataProject, index) => {
                        return <Card cardData={dataProject} key={index} />;
                    })}
                </section>
            </div>
        </>
    );
}

export default ProjectList;
