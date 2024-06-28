import React, { useState } from "react";
import menuIcon from "../../assets/icons/menu-icon.svg";
import closeIcon from "../../assets/icons/close-icon.svg";
import "../../styles/navmenu.css";

const menuItems = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-nosotros", label: "Sobre Nosotros" },
  { href: "/consultorios", label: "Consultorios" },
  { href: "/formacion", label: "Formación" },
  { href: "/contacto", label: "Contacto" },
];

export const NavMenu = () => {
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className={`nav-container ${menuActive ? "menu-active" : ""}`}>
      <img
        src={menuActive ? closeIcon.src : menuIcon.src}
        alt="Menu Icon"
        width={30}
        className="menu-icon"
        onClick={toggleMenu}
      />
      <article className="menu-container">
        <ul
          className={`menu-container-ul ${
            menuActive ? "menu-container-ul-active" : "menu-hide"
          }`}>
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`nav-link ${
                  window.location.pathname === item.href
                    ? "nav-link-active"
                    : ""
                }`}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </article>
    </nav>
  );
};
