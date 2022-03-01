import { Link } from "react-router-dom";
import logoTitle from "../assets/algo-filipino-logo.png";
import iconFB from "../assets/icon-facebook.svg";
import iconTW from "../assets/icon-twitter.svg";
import iconIG from "../assets/icon-instagram.svg";
import iconIN from "../assets/icon-linkedin.svg";
import iconEmail from "../assets/icon-email.svg";

function Footer() {
  return (
    <div className="flex bg-gray px-6 text-white flex-col lg:px-36 lg:flex-row py-32 mt-36 justify-around">
      <div>
        <img src={logoTitle} className="mx-auto w-48 " alt="" />
        <h1 className="flex justify-center text-h3 font-josefin">
          algo filipino
        </h1>
      </div>
      <div className="flex justify-center self-center pb-10 pt-10 md:pt-0">
        <Link
          to="/"
          className="nav-links flex px-5 transition font-josefin hover:text-yellow-100"
        >
          HOME
        </Link>
        <Link
          to="/about"
          className="nav-links flex px-5 transition font-josefin hover:text-yellow-100"
        >
          ABOUT
        </Link>
        <Link
          to="/events"
          className="nav-links flex px-5 transition font-josefin hover:text-yellow-100"
        >
          EVENTS
        </Link>
        <Link
          to="/contact"
          className="nav-links flex px-5 transition font-josefin hover:text-yellow-100"
        >
          CONTACT
        </Link>
      </div>
      <div className="self-center">
        <div className="flex justify-center">
          <a
            href="https://facebook.com/algofilipino"
            target="_blank"
            rel="noreferrer"
          >
            <img src={iconFB} className="px-2" alt="" />
          </a>
          <a
            href="https://twitter.com/algo_filipino"
            target="_blank"
            rel="noreferrer"
          >
            <img src={iconTW} className="px-2" alt="" />
          </a>
          <a
            href="https://instagram.com/algofilipino/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={iconIG} className="px-2" alt="" />
          </a>
          <a
            href="https://linkedin.com/company/algofilipino/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={iconIN} className="px-2" alt="" />
          </a>
          <a
            href="mailto:kumusta@algofilipino.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={iconEmail} className="px-2" alt="" />
          </a>
        </div>

        <div>
          <h1 className="pt-6 text-center lg:flex text-btn justify-end font-open">
            💻💖🔥 by Algo Filipino Technologies
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
