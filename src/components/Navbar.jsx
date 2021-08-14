import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoTitle from "website\assets\algo-filipino-logo.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    // Renders the button only one time
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar bg-green-100 h-16 text-body flex justify-center items-center sticky top-0 z-6">
        <div className="navbar-container flex justify-center items-center w-11/12">
          <Link
            to="/"
            className="navbar-logo w-28 justify-self-start flex items-center"
          >
            <img src={logoTitle} alt="Algo Logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul
            className={
              click
                ? "nav-menu active"
                : "nav-menu auto-rows-auto text-center flex justify-end w-11/12"
            }
          >
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links text-white flex items-center pl-4"
                onClick={closeMobileMenu}
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/learn" className="nav-links" onClick={closeMobileMenu}>
                LEARN
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/translate"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                TRANSLATE
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/register"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                REGISTER
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                LOGIN
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--primary">REGISTER</Button>}
          {button && <Button buttonStyle="btn--secondary">LOGIN</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
