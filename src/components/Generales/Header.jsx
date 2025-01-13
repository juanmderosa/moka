import { NavMenu } from "./NavMenu";
import { useEffect } from "react";
import { useState } from "react";
import "../../styles/navmenu.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`nav-container ${scrolled ? "scrolled" : ""}`}>
      <NavMenu scrolled={scrolled} />
    </div>
  );
}

export default Header;
