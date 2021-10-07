import bodyImage1 from "../assets/body-img-1.png";
import bodyImage2 from "../assets/body-img-2.png";
import "./components.css";
import Spacer from "./Spacer.jsx";

function Introduction() {
  return (
    <div>
      <Spacer />
      <div>
        <div className="grid grid-flow-row auto-rows-max md:auto-rows-min mt-36 ">
          <div className="grid grid-flow-col auto-cols-max">
            <h3 className="text-h2 font-josefin leading-none flex items-end pb-10 pr-10">
              learn <br /> build <br /> innovate
            </h3>
            <img src={bodyImage1} className="100px" />
          </div>
        </div>
        <div className="grid grid-flow-row auto-rows-max md:auto-rows-min">
          <p className="flex justify-center py-10 px-10 w-50 font-open text-p">
            Naniniwala ang aming organisasyon sa pagpapahalaga at pagiingat sa
            sariling wika upang hindi itong tuluyang mawala.
          </p>
        </div>
        <div className="grid grid-flow-row auto-rows-max md:auto-rows-min mt-36">
          <div className="grid grid-flow-col auto-cols-max">
            <img src={bodyImage2} className="" />
            <h2 className="text-h2 font-josefin leading-none flex items-end pb-10 pl-10">
              Make <br /> Things <br /> Possible{" "}
            </h2>
          </div>
        </div>
        <div className="grid grid-flow-row auto-rows-max md:auto-rows-min">
          <p className="flex justify-center py-10 px-10 w-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            deserunt esse quia, ea maiores officiis nulla doloribus corrupti
            magnam eius, illo vitae possimus molestiae voluptatum! Et
            praesentium quam quos molestiae.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
