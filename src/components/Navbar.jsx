import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoTitle from "../assets/algo-filipino-logo.png";

function Navbar() {
  const [click, setClick] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar bg-transparent h-16 text-body flex justify-center items-center sticky z-10 pt-16 pl-20 pr-20">
        <div className="navbar-container flex justify-center items-center w-11/12">
          <Link
            to="/"
            className="navbar-logo w-24 justify-self-start flex items-center"
          >
            <img src={logoTitle} alt="Algo Logo" />
          </Link>
          <h1 className="">algo filipino</h1>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul
            className={
              click
                ? "nav-menu active"
                : "nav-menu auto-rows-auto text-center flex justify-end w-10/12"
            }
          >
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links text-black flex items-center pl-6 pr-6 font-josefin  "
                onClick={closeMobileMenu}
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/learn"
                className="nav-links text-black flex items-center pl-6 pr-6 font-josefin  "
                onClick={closeMobileMenu}
              >
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/translate"
                className="nav-links text-black flex items-center pl-6 pr-6 font-josefin  "
                onClick={closeMobileMenu}
              >
                EVENTS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-links text-black flex items-center pl-6 pr-6 font-josefin  "
                onClick={closeMobileMenu}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
