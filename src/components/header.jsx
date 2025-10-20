import React, { useState } from "react";
import "../styles/header.css"; // or your CSS file path

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // closes mobile menu after clicking
  };

  return (
    <header className="header">
      <div className="logo">Azimi Koko</div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul id="menu-sty">
          <li>
            <a onClick={() => handleNavClick("hero")}>Home</a>
          </li>
          <li>
            <a onClick={() => handleNavClick("books")}>Books</a>
          </li>
          <li>
            <a onClick={() => handleNavClick("mission")}>Mission</a>
          </li>
          <li>
            <a onClick={() => handleNavClick("author")}>Author</a>
          </li>
          <li>
            <a onClick={() => handleNavClick("contact")}>Contact</a>
          </li>
        </ul>
      </nav>

      <div
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Header;
