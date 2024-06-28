import logoMoka from "../../assets/images/LogoMoka.png";
import logoMokaContsultorios from "../../assets/images/LogoMokaConsultorios.png";
import logoMokaFormacion from "../../assets/images/LogoMokaFormacion.png";

export const Logo = () => {
  return (
    <a href="moka/">
      <img
        src={
          window.location.pathname === "/consultorios"
            ? logoMokaContsultorios.src
            : window.location.pathname === "/formacion"
            ? logoMokaFormacion.src
            : logoMoka.src
        }
        alt="Moka Logo"
        style={{
          textDecoration: "none",
          cursor: "pointer",
          position: "fixed",
          right: "3%",
          top: "3%",
          zIndex: 999,
        }}
        width={150}
      />
    </a>
  );
};
