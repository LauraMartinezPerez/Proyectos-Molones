
import imageAvatar from "../images/avatar.webp";

export default function Card() {
  return (
     <article className="card">
                         <h2 className="card__projectTitle">
                             <span className="card__projectTitle--text">
                                 Personal project card:
                             </span>
                         </h2>
    
                         <div className="card__author">
                             <div className="card__authorPhoto"><img src={imageAvatar}   alt="avatar" /></div>
                             <p className="card__job">Trabajo</p>
                             <h3 className="card__name">
                                 Nombre
                             </h3>
                         </div>
    
                         <div className="card__project">
                             <h3 className="card__name">
                                 Nombre del proyecto
                             </h3>
                             <p className="card__slogan">
                                 Slogan
                             </p>
                             <h3 className="card__descriptionTitle">
                                 Product description
                             </h3>
                             <p className="card__description">
                                 Descripción
                             </p>
                             <div className="card__technicalInfo">
                                 <p className="card__technologies">
                                     Tecnologías
                                 </p>
    
                                 <a
                                     className="icon icon__www"
                                     href=""
                                     title="Haz click para ver el proyecto online"
                                     target="_blank"
                                 >
                                     Web link
                                 </a>
                                 <a
                                     className="icon icon__github"
                                     href=""
                                     title="Haz click para ver el código del proyecto"
                                     target="_blank"
                                 >
                                     GitHub link
                                 </a>
                             </div>
                         </div>
                     </article>
  )
}
