import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./components.css";
import background from "../assets/background-img-1.png";
import headerImage from "../assets/header-img.png";
import Button from "./Button";

function Header() {
  return (
    <>
      <img
        src={background}
        className="bg-z-index absolute top-0 left-0 w-screen"
        alt=""
      />
      <div className="grid grid-flow-col auto-cols-max">
        <div className="grid grid-flow-row auto-rows-max md:auto-rows-min ml-36 mt-36">
          <div>
            <h1 className="text-h1 font-josefin font-bold leading-tight">
              Wika at <br /> Teknolohiya
            </h1>
          </div>
          <div>
            <p className="text-p font-open font-semibold">
              Amet minim mollit non deserunt ullamco est sit
              <br />
              aliqua dolor do amet sint. Velit officia
              <br />
              consequat duis enim velit mollit.{" "}
            </p>
          </div>
          <div>
            <Button className="py-7" />
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
