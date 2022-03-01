import Button from "./Button";

function JoinUs() {
  return (
    <div className="grid grid-flow-row auto-rows-max md:auto-rows-min text-center justify-items-center mt-36">
      <div className="w-full md:w-3/5">
        <h3 className="text-h3 font-josefin font-bold">
          Sumali sa Algo Filipino!
        </h3>
        <p className="text-p py-4">
          Naniniwala ang aming organisasyon sa pagpapahalaga at pag-iingat sa sariling wika upang hindi ito tuluyang mamatay at mawala.<br/><br/>
          Sumasang-ayon ka rin ba sa layuning mapaugnay ang teknolohiya at ang wikang Filipino? Ano pa ba ang hinihintay mo? Magboluntaryo na at maging kasapi na sa Algo Filipino! 
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
