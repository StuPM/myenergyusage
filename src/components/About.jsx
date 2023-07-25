import React from "react";
import me from "../assets/me.jpg";
import misty from "../assets/misty.jpg";
import molly from "../assets/molly.jpg";

import About_ChartTypes from "./About_ChartTypes";

const About = () => {
  return (
    <>
      <section className="bg-gray-200 max-h-screen">
        <div className="mx-auto my-auto min-h-screen max-w-screen-xl px-4 flex items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              My Energy Usage.
              <strong className="font-extrabold text-red-700 sm:block">
                via Octopus Energy.
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              By using the Octopus Energy API, my families energy usage has been
              visulised in the graphs below. How do our families compare? With 2
              adults working from home 3 days a week and 2 cats running around
              24/7, do you use more or less than us?
            </p>
            <div className="flex justify-center p-4">
              <img
                className="w-24 h-24 rounded-full"
                src={me}
                alt="Rounded avatar"
              />
              <img
                className="w-24 h-24 rounded-full mx-4"
                src={misty}
                alt="Rounded avatar"
              />
              <img
                className="w-24 h-24 rounded-full"
                src={molly}
                alt="Rounded avatar"
              />
            </div>

            <p className="mb-6 text-lg font-normal lg:text-xl sm:px-16">
              Switch between D3 and Chart JS Graph technology.
            </p>
            <p className="mb-6 text-lg font-normal lg:text-xl sm:px-16">
              Specifiy the date range and how to group the data via the button
              below the chart.
            </p>
            <About_ChartTypes />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
