import bodyImage1 from "../assets/body-img-1.png";
import bodyImage2 from "../assets/body-img-2.png";
import "./components.css";

function Introduction() {
  return (
    <div>
      <div className="grid grid-flow-row auto-rows-max md:auto-rows-min mt-36">
        <div className="grid grid-flow-col auto-cols-full">
          <h3 className="text-h2 font-josefin leading-none hidden md:flex items-end pb-10 pr-10 self-center">
            Learn <br /> Build <br /> Innovate
          </h3>
          <div className="grid grid-flow-row auto-rows-max md:auto-rows-min">
            <img src={bodyImage1} alt="Wika at Teknolohiya" />
            <p className="text-justify pt-10 text-p">
              Ang Algo Filipino ay itinatag ni John Jherlet Hollero noong
              Setyembre 27, 2020 sa edad na labing - siyam na taong gulang. Ito
              ay nagsimula sa ideya ng pagkakaroon ng kolaborasyon ng mga
              content creators sa iba’t ibang panig ng bansa sa larangan ng
              teknolohiya.
              <br /> <br />
              Ang organisasyong ito ay walang pinipili sa paggamit ng kahit
              anong programming language o ng isang tiyak na paksa sa
              teknolohiya na pabor sa mga teknikal na kurso. Naniniwala ang
              organisayson na maari ring magamit ang teknolohiya sa iba pang
              larangan ng pag aaral.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row auto-rows-max md:auto-rows-min mt-24 md:mt-36">
        <div className="grid grid-flow-col auto-cols-full">
          <div className="grid grid-flow-row auto-rows-max md:auto-rows-min">
            <img src={bodyImage2} alt="Algo Filipino Tambayan" />
            <p className="text-justify pt-10 text-p">
              Ang Algo Filipino Tambayan ay isang programa sa Algo Filipino na
              binubuo ng mga kabataan na iisa ang adhikain pagdating sa Wika at
              Teknolohiya. Tinawag itong “Tambayan” dahil gustong iparating ng
              Algo Filipino sa manonood at madla na magaan lamang ang hatid ng
              programa at maari sila manood dito pagkatapos ng isang nakakapagod
              na maghapon.
            </p>
          </div>
          <h2 className="text-h2 font-josefin leading-none hidden md:flex items-end pb-10 pl-10 self-center">
            Make <br /> Things <br /> Possible{" "}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
