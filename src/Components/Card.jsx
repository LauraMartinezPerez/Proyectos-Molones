/* import imageAvatar from '../images/avatar.webp'; */

export default function Card( {cardData} ) {

    return (
        <article className="card">
            <h2 className="card__projectTitle">
                <span className="card__projectTitle--text">Personal project card:</span>
            </h2>

            <div className="card__author">
                <div className="card__authorPhoto">
                    <img src={cardData.photo} alt="avatar" />
                </div>
                <p className="card__job">{cardData.job}</p>
                <h3 className="card__name">{cardData.autor}</h3>
            </div>

            <div className="card__project">
                <h3 className="card__name">{cardData.name}</h3>
                <p className="card__slogan">{cardData.slogan}</p>
                <h3 className="card__descriptionTitle">Product description</h3>
                <p className="card__description">{cardData.desc}</p>
                <div className="card__technicalInfo">
                    <p className="card__technologies">{cardData.technologies}</p>

                    <a className="icon icon__www" href={cardData.demo} title="Haz click para ver el proyecto online" target="_blank">
                        Web link
                    </a>
                    <a className="icon icon__github" href={cardData.repo} title="Haz click para ver el código del proyecto" target="_blank">
                        GitHub link
                    </a>
                </div>
            </div>
        </article>
    );
}
