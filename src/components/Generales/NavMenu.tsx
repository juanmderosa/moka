import { useState } from "react";
import menuIcon from "../../assets/icons/menu-icon.svg";
import closeIcon from "../../assets/icons/close-icon.svg";
import menuIconScrolled from "../../assets/icons/menu-icon-scrolled.svg";
import closeIconScrolled from "../../assets/icons/close-icon-scrolled.svg";
import "../../styles/navmenu.css";
import { Logo } from "./Logo";

const menuItems = [
  { href: "/", label: "Incio" },
  { href: "/sobre-nosotros", label: "Sobre Nosotros" },
  { href: "/consultorios", label: "Consultorios" },
  { href: "/formacion", label: "Formación" },
  { href: "/contacto", label: "Contacto" },
];

interface NavMenuProps {
  scrolled: boolean;
}

export const NavMenu = ({ scrolled }: NavMenuProps) => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <Logo />
      <nav>
        <ul className="menu-container-ul">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className={`li-item ${
                item.href === "/contacto" ? "li-item-contacto" : ""
              }`}>
              <a
                href={item.href}
                className={`nav-link ${
                  window.location.pathname === item.href
                    ? "nav-link-active"
                    : ""
                } ${item.href === "/contacto" ? "nav-link-contacto" : ""}`}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mobile-menu-container">
        <img
          src={
            menuActive
              ? scrolled
                ? closeIconScrolled.src
                : closeIcon.src
              : scrolled
              ? menuIconScrolled.src
              : menuIcon.src
          }
          alt={menuActive ? "close icon" : "menu icon"}
          className="menu-icon"
          width={30}
          height={30}
          onClick={toggleMenu}
          style={{ stroke: scrolled ? "blue !important" : "white" }}
        />
        {menuActive && (
          <nav className={`mobile-menu `}>
            <ul className="mobile-menu-container-ul">
              {menuItems.map((item) => (
                <li
                  key={item.label}
                  className={`li-item-mobile ${
                    item.href === "/contacto" ? "li-item-contacto" : ""
                  }`}>
                  <a
                    href={item.href}
                    className={`nav-link ${
                      window.location.pathname === item.href
                        ? "nav-link-active"
                        : ""
                    } ${
                      item.href === "/contacto" ? "nav-link-contacto" : ""
                    } `}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </>
  );
};
