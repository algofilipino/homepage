import React from "react";
import "./components.css";
import headerImage from "../assets/header-img.png";
import homepageBackground from "../assets/homepage-background.png";
import homepageBackgroundM from "../assets/background-img-mobile.png";
import Button from "./Button";

function Header() {
  return (
    <>
      <img
        src={homepageBackground}
        className="bg-z-index absolute top-0 left-0 w-screen hidden lg:block"
        alt=""
      />
      <img
        src={homepageBackgroundM}
        className="bg-z-index absolute top-0 left-0 w-screen block lg:hidden"
        alt=""
      />
      <div className="bg-z-index-1 w-screen h-screen bg-light left-0 top-0 fixed"></div>
      <div className="flex h-screen pt-28">
        <div className="grid grid-flow-row auto-rows-max md:auto-rows-min pb-28 flex content-center justify-center w-full sm:w-3/4 lg:w-2/5">
          <h1 className="text-h2 lg:text-h1 font-josefin font-bold leading-tight">
            Wika at <br /> Teknolohiya
          </h1>

          <p className="text-p font-open font-semibold">
            Ang Algo Filipino ay isang non-profit na organisasyon na naglalayong
            mapalago at mapagyaman ang wikang Filipino sa larangan ng
            teknolohiya.
          </p>

          <Button label="SUMALI SA ALGO FILIPINO" />
        </div>
        <div className="w-3/5 hidden lg:flex flex-wrap content-center pb-20">
          <img src={headerImage} alt="" />
        </div>
      </div>
    </>
  );
}

export default Header;
