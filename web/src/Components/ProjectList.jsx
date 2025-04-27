

import { Link } from "react-router-dom";
import "../scss/layout/ProjectList.scss";
import Hero2 from "./Hero2";
import Card from "./Card";


function ProjectList({ cardData }) {
    console.log('cardData:', cardData);
    return (
        <>
            <Hero2 />
        <div>
          {cardData.map((dataProject) => (
            <div key={dataProject.id}>
              <Link to={`http://localhost:5001/detail/${dataProject.id}`}>
                <Card cardData={dataProject} />
              </Link>
            </div>
          ))}
        </div>
        </>
      );
}

export default ProjectList; 