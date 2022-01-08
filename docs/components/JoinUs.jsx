import Button from "./Button";
import Spacer from "./Spacer";

function JoinUs() {
  return (
    <div className="grid grid-flow-row auto-rows-max md:auto-rows-min text-center justify-items-center mt-36">
      <div className="w-full md:w-3/5">
        <h3 className="text-h3 font-josefin font-bold">
          Join Algo Filipino Community Now!
        </h3>
        <p className="text-p py-4">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <div className="flex flex-col lg:flex-row justify-center w-full">
          <div className="px-4">
            <Button label="SUMALI BILANG MIYEMBRO" />
          </div>
          <div className="px-4">
            <Button label="SUMALI BILANG COMMUNITY PARTNER" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
