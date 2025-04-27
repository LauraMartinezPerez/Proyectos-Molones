import { Link } from "react-router-dom";
import "../scss/layout/ProjectList.scss";
import Hero2 from "./Hero2";
import Card from "./Card";


function ProjectList({ cardData }) {
    console.log('cardData:', cardData);
    return (
        <>
            <Hero2 />
            <div className="container">
                <section className="cardList">
                    {cardData.map((dataProject, index) => {
                        console.log("dataproject:", dataProject );
                        return <Card cardData={dataProject} key={index} />;
                    })}
                </section>
            </div>
        </>
    );
}

export default ProjectList;
