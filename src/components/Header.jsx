import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./components.css";
import headerImage from "../assets/header-img.png";
import homepageBackground from "../assets/homepage-background.png";
import Button from "./Button";

function Header() {
  return (
    <>
      <img
        src={homepageBackground}
        className="bg-z-index absolute top-0 left-0 w-screen"
        alt=""
      />
      <div className="flex h-screen pt-28">
        <div className="grid grid-flow-row auto-rows-max md:auto-rows-min pb-28 flex content-center justify-center w-full md:w-2/5">
          <h1 className="text-h2 md:text-h1 font-josefin font-bold leading-tight">
            Wika at <br /> Teknolohiya
          </h1>

          <p className="text-p font-open font-semibold">
            Ang Algo Filipino ay isang non-profit na organisasyon na naglalayong
            mapalago at mapagyaman ang wikang Filipino sa larangan ng
            teknolohiya.
          </p>

          <Button label="SUMALI SA ALGO FILIPINO" />
        </div>
        <div className="w-3/5 hidden md:flex flex-wrap content-center pb-20">
          <img src={headerImage} alt="" />
        </div>
      </div>
    </>
  );
}

export default Header;
