import logoMoka from "../../assets/images/LogoMoka.webp";
import logoMokaContsultorios from "../../assets/images/LogoMokaConsultorios.webp";
import logoMokaFormacion from "../../assets/images/LogoMokaFormacion.webp";
import "../../styles/navmenu.css";

export const Logo = () => {
  return (
    <a href="/">
      <img
        className="nav-logo"
        src={
          window.location.pathname === "/consultorios"
            ? logoMokaContsultorios.src
            : window.location.pathname === "/formacion"
            ? logoMokaFormacion.src
            : logoMoka.src
        }
        alt="Moka Logo"
        width={150}
      />
    </a>
  );
};
