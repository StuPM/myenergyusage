import React from "react";
import Chart from "./Chart";
import "../styles/Electric.css";

import me from "../assets/me.jpg";
import misty from "../assets/misty.jpg";
import molly from "../assets/molly.jpg";

//https://flowbite.com/docs/components/avatar/
//https://nerdcave.com/tailwind-cheat-sheet

const ChartGroup = () => {
  return (
    <>
      <section id="MyUsage" className="py-14 border-black border-t-2">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          {/* <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              My familys usage
            </h3>
            <p className="mt-3">
              How do our families compare? With 2 adults working from home 3
              days a week and 2 cats running around 24/7, do you use more or
              less than us?
            </p>
            <div className="flex justify-center">
              <img
                className="w-24 h-24 rounded-full"
                src={me}
                alt="Rounded avatar"
              />
              <img
                className="w-24 h-24 rounded-full"
                src={misty}
                alt="Rounded avatar"
              />
              <img
                className="w-24 h-24 rounded-full"
                src={molly}
                alt="Rounded avatar"
              />
            </div>
          </div> */}
          <div className="mt-12 chartContainer">
            <h4 className="text-2xl font-semibold">
              {" "}
              💡 Electricity and Gas 🔥
            </h4>
            <Chart />
          </div>
        </div>
      </section>
    </>
  );
};

export default ChartGroup;
