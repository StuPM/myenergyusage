import React from "react";
import me from "../assets/me.jpg";
import misty from "../assets/misty.jpg";
import molly from "../assets/molly.jpg";

const About = () => {
  return (
    <>
      <section className="flex flex-col">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            My familys usage
          </h3>
          <p className="mt-3">
            How do our families compare? With 2 adults working from home 3 days
            a week and 2 cats running around 24/7, do you use more or less than
            us?
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
        </div>
      </section>
    </>
  );
};

export default About;
