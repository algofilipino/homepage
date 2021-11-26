// import imageQuote1 from "../assets/member-quote-1.png";
// import imageQuote2 from "../assets/member-quote-2.png";

// function Testimonials() {
//   return (
//     <div className="grid grid-flow-row auto-rows-max md:auto-rows-min ml-36 mt-36">
//       <div className="flex justify-evenly grid grid-flow-col auto-cols-max">
//         <img src={imageQuote1} />
//         <p class="text-left md:text-center italic">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, et!
//           At, iste aliquid! Placeat eos earum excepturi numquam cum dicta
//           ducimus reprehenderit fuga itaque, voluptatum voluptates deserunt
//           repellendus voluptatem autem.
//         </p>
//         <img src={imageQuote2} />
//       </div>
//     </div>
//   );
// }

// export default Testimonials;

import "./components.css";
import member1 from "../assets/member-quote-1.png";
import member2 from "../assets/member-quote-2.png";

function Testimonials() {
  return (
    <>
      <div>
        <div>
          <div className="grid grid-flow-row auto-rows-max lg:auto-rows-min mt-36">
            <div className="grid grid-flow-row lg:grid-flow-col auto-cols-full">
              <img
                src={member1}
                className="transform w-1/2 flex justify-self-center"
              />
              <div className="grid grid-flow-row auto-rows-max lg:auto-rows-min flex justify-center">
                <p className="text-p italic">
                  Lorem ipsum dolor sit amet, <br />
                  consectetur adipiscing elit. Odio sed <br />
                  egestas natoque ultrices imperdiet <br />
                  urna at integer porttitor.
                </p>
                <p className="text-name font-bold my-1">John Jherlet Hollero</p>
                <p className="text-btn">Founder and President</p>
              </div>
              <img
                src={member2}
                className="transform w-1/2 flex justify-self-center mt-10 lg:mt-0"
              />
              <div className="grid grid-flow-row auto-rows-max lg:auto-rows-min flex justify-center">
                <p className="text-p italic">
                  Lorem ipsum dolor sit amet, <br />
                  consectetur adipiscing elit. Odio sed <br />
                  egestas natoque ultrices imperdiet <br />
                  urna at integer porttitor.
                </p>
                <p className="text-name font-bold my-1">Waren Gonzaga</p>
                <p className="text-btn">Executive Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
