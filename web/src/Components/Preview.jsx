
import imageBooks from "../images/ebook-example.jpg";
import imageAvatar from "../images/avatar.webp";
 import "../scss/layout/Preview.scss";


const Preview = ({ project }) => {
    return (
        <>
         <section className="preview">
                 <div className="projectImage">
                    <img src={project.image || imageBooks} alt="libros" />
                 </div>
                 <article className="card">
                     <h2 className="card__projectTitle">
                         <span className="card__projectTitle--text">
                             Personal project card:
                         </span>
                     </h2>

                     <div className="card__author">
                         <div className="card__authorPhoto"><img src={project.photo || imageAvatar}   alt="avatar" /></div>
                         <p className="card__job">{project.job || "Trabajo"}</p>
                         <h3 className="card__name">
                             {project.autor || "Nombre"}
                         </h3>
                     </div>

                     <div className="card__project">
                         <h3 className="card__name">
                             {project.name || "Nombre del proyecto"}
                         </h3>
                         <p className="card__slogan">
                             {project.slogan || "Slogan"}
                         </p>
                         <h3 className="card__descriptionTitle">
                             Product description
                         </h3>
                         <p className="card__description">
                             {project.desc || "Descripción"}
                         </p>
                         <div className="card__technicalInfo">
                             <p className="card__technologies">
                                 {project.technologies || "Tecnologías"}
                             </p>

                             <a
                                 className="icon icon__www"
                                 href={project.demo}
                                 title="Haz click para ver el proyecto online"
                                 target="_blank"
                             >
                                 Web link
                             </a>
                             <a
                                 className="icon icon__github"
                                 href={project.repo}
                                 title="Haz click para ver el código del proyecto"
                                 target="_blank"
                             >
                                 GitHub link
                             </a>
                         </div>
                     </div>
                 </article>
             </section>
         </>
     );
};

export default Preview;