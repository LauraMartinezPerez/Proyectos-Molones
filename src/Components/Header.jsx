import "../scss/layout/Header.scss";
import LogoAdalab from "./LogoAdalab";
import laptopIcon from "../images/laptop-code-solid.svg";

const Header = () => {
    return (
        <header className="header">
        <a
            className="header__brand"
            href="./"
            title="Haz click para volver a la página inicial"
        >
            {
            <img
                className="header__companyLogo"
                src={laptopIcon}
                alt="Logo proyectos molones"
            />}
            <h1 className="header__title">Proyectos molones</h1>
        </a>
        < LogoAdalab />
    </header>
    )
};
export default Header;