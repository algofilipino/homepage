import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./components.css";
import logoTitle from "../assets/algo-filipino-logo.png";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar bg-light text-btn flex items-center z-10 font-josefin h-20 lg:h-16 w-screen fixed">
        <div className="navbar-container flex justify-between items-center w-full lg:px-36">
          <div className="flex">
            <Link
              to="/"
              className="navbar-logo w-20 flex items-center ml-3 mr-3 mb-2"
            >
              <img src={logoTitle} alt="Algo Logo" />
            </Link>
            <h1 className="hidden lg:flex text-name w-4/12b items-center">
              algo filipino
            </h1>
            <div className="menu-icon lg:hidden" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>
          <div>
            <ul
              className={
                click
                  ? "nav-menu active overflow-visible w-screen active:h-screen text-name drop-shadow flex flex-col mt-96 "
                  : "hidden nav-menu auto-rows-auto text-center lg:flex tracking-widest"
              }
            >
              <li className="nav-item flex justify-center h-20 hover:content-center">
                <Link
                  to="/website"
                  className="nav-links bg-gray-500 flex items-center justify-center px-5 transition text-black hover:text-yellow-100"
                  onClick={closeMobileMenu}
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item  flex justify-center h-20 hover:text-center">
                <Link
                  to="/about"
                  className="nav-links flex items-center justify-center px-5 transition text-black hover:text-yellow-100"
                  onClick={closeMobileMenu}
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item  flex justify-center h-20 hover:text-center">
                <Link
                  to="/events"
                  className="nav-links flex items-center justify-center px-5 transition text-black hover:text-yellow-100"
                  onClick={closeMobileMenu}
                >
                  EVENTS
                </Link>
              </li>
              <li className="nav-item  flex justify-center h-20 hover:text-center">
                <Link
                  to="/contact"
                  className="nav-links flex items-center justify-center px-5 transition text-black hover:text-yellow-100"
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
