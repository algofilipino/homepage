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
      <div className="flex h-screen">
        <div className="grid grid-flow-row auto-rows-max md:auto-rows-min pb-28 flex content-center justify-center w-2/5">
          <h1 className="text-h1 font-josefin font-bold leading-tight">
            Wika at <br /> Teknolohiya
          </h1>

          <p className="text-p font-open font-semibold">
            Ang Algo Filipino ay isang non-profit na organisasyon na naglalayong
            mapalago at mapagyaman ang wikang Filipino sa larangan ng
            teknolohiya.
            {/* <br />
              Naniniwala ang aming organisasyon sa pagpapahalaga at pagiingat sa
              sariling wika upang hindi itong tuluyang mawala. */}
          </p>

          <Button />
        </div>
        <div className="w-3/5 flex flex-wrap content-center pb-20">
          <img src={headerImage} className="" alt="" />
        </div>
      </div>
    </>
  );
}

export default Header;
