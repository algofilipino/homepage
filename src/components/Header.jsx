import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./components.css";
import background from "../assets/background-img-1.png";
import headerImage from "../assets/header-img.png";

function Header() {
  return (
    <>
      <img
        src={background}
        className="bg-z-index absolute top-0 left-0 w-screen"
        alt=""
      />
      <div className="grid grid-flow-col auto-cols-max">
        <div className="grid grid-flow-row auto-rows-max md:auto-rows-min">
          <div>
            <p className="">Innovate</p>
          </div>
          <div>
            <p className="text-p">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.{" "}
            </p>
          </div>
          <div>
            <button>JOIN ALGO FILIPINO</button>
          </div>
        </div>
        <div>
          <img src={headerImage} className="scale-50" alt="" />
        </div>
      </div>
    </>
  );
}

export default Header;
