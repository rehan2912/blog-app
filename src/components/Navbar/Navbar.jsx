import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }
  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar-container">
          <header className="logo">Blog App</header>

          <div className="hamburger" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>

        {/* Use a class name to toggle the visibility of the navbar items */}
        <div className="mobile-navbar">
          <ul className={showMenu ? "navbar-open" : "navbar-close"}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Sign Out</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="desktop-navbar">
        <header className="logo">Blog App</header>
        <div className="menu-item-container">
          <ul className="desktop-navbar items">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Sign out</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
