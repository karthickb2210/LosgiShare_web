import React from "react";
import img from "./img/main.jpg";
import { Link } from "react-router-dom";
function MiddleArea() {
  return (
    <div className=" my-24 flex justify-start mx-[100px]">
      <div className="flex space-x-14">
        <div className="flex flex-col">
          <h1 className="text-[80px] text-black">
            Quick & Reliable{" "}
            <span className="text-orange-600"> Warehousing</span>
          </h1>
          <h1 className="text-[70px] text-black">
            <span className=" text-orange-600">And Logistic</span> Solutions
          </h1>
          <h4 className="text-black mt-[40px] text-wrap text-[20px]">
            ShipUp delivers an unparalleled customer service through dedicated
            customer teams, engaged people working in an agile culture, and a
            global footprint
          </h4>
          <div className="  mt-[40px] flex flex-row max-h-[600px] space-x-20 max-w-[600px]">
            <button
              type="button"
              className=" max-h-[320px] max-w-[300px]  focus:outline-none text-white bg-orange-600 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-2xl px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
            >
              Ship Package
            </button>
            <Link to="/feeder">
              {" "}
              <button
                type="button"
                className=" max-h-[320px] max-w-[300px]  focus:outline-none text-white bg-orange-600 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-2xl px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
              >
                Feed Package
              </button>
            </Link>{" "}
          </div>
        </div>
        <div></div>
        <div>
          <img className="  w-full" src={img} alt="mainpic.jpg" />
        </div>
      </div>
    </div>
  );
}

export default MiddleArea;
