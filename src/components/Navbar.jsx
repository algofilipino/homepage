import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./components.css";
import logoTitle from "../assets/algo-filipino-logo.png";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar bg-transparent text-btn flex justify-center items-center z-10 mt-16 font-josefin">
        <div className="navbar-container flex justify-between items-center w-10/12 mx-auto fixed">
          <div className="flex">
            <Link
              to="/"
              className="navbar-logo w-20 justify-self-start flex items-center ml-6 mr-6 mb-2"
            >
              <img src={logoTitle} alt="Algo Logo" />
            </Link>
            <h1 className="text-name w-4/12b flex items-center">
              algo filipino
            </h1>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>
          <div>
            <ul
              className={
                click
                  ? "nav-menu active"
                  : "nav-menu auto-rows-auto text-center flex justify-end tracking-widest"
              }
            >
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-links flex items-center px-5 transition text-black hover:text-yellow-100 hover:"
                  onClick={closeMobileMenu}
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/learn"
                  className="nav-links flex items-center px-5 transition text-black hover:text-yellow-100 hover:"
                  onClick={closeMobileMenu}
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/translate"
                  className="nav-links flex items-center px-5 transition text-black hover:text-yellow-100 hover:"
                  onClick={closeMobileMenu}
                >
                  EVENTS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-links flex items-center px-5 transition text-black hover:text-yellow-100 hover:"
                  onClick={closeMobileMenu}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
