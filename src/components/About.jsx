import React from "react";
import me from "../assets/me.jpg";
import misty from "../assets/misty.jpg";
import molly from "../assets/molly.jpg";

import About_ChartTypes from "./About_ChartTypes";

/**
 * Via the Octopus Energy API, my family's electricity and gas usage has been visualized in the graph below.
 * How do our families compare? With 2 adults working from home 3 days a week and 2 cats running around 24/7, do you use more or less than us?
 * @returns
 */

const About = () => {
  return (
    <header className="bg-gray-200 max-h-screen">
      <div className="mx-auto my-auto min-h-screen max-w-screen-xl px-4 flex items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-indigo-600 text-6xl font-extrabold mb-6">
            My Energy Usage.
          </h1>
          <p className="mt-4 sm:text-xl/relaxed">
            How does my family's electricity and gas usage compare to yours?
          </p>
          <p className="mt-4 sm:text-xl/relaxed">
            With two adults working from home three days a week and 2 energetic
            cats keeping us company, do you use more or less than us?
          </p>
          <div className="flex justify-center p-4">
            <img
              className="w-24 h-24 rounded-full"
              src={me}
              alt="Stuart M face"
            />
            <img
              className="w-24 h-24 rounded-full mx-4"
              src={misty}
              alt="Misty the cat face"
            />
            <img
              className="w-24 h-24 rounded-full"
              src={molly}
              alt="Molly the cat face"
            />
          </div>
          <p className="mt-4 sm:text-xl/relaxed">
            Specifiy the date range and how to group the data via the button
            below the chart.
          </p>
          {/* <p className="mt-4 sm:text-xl/relaxed">
            Switch between D3 and Chart JS Graph technology.
          </p>
          <About_ChartTypes /> */}
        </div>
      </div>
    </header>
  );
};

export default About;
