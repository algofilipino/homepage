import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import background from "../assets/background-img-1.png";

function Header() {
  return (
    <>
      <img
        src={background}
        className="bg-z-index absolute top-0 left-0 h-screen"
        alt=""
      />
      <div className="">
        <div className="auto-cols-auto">
          <div>
            <p className=""></p>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Header;