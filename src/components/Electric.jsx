import React from "react";
import Chart from "./Chart";
import {
  selectMyElectricData,
  selectMyGasData,
} from "../features/octopus/octopusSlice";
import "./Electric.css";

const Electric = () => {
  return (
    <>
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              My usage
            </h3>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              venenatis sollicitudin quam ut tincidunt.
            </p>
          </div>
          <div className="mt-12 chartContainer">
            <Chart selectorToUse={selectMyElectricData} electricOrGas={true} />
          </div>
          <div className="mt-12 chartContainer">
            <Chart selectorToUse={selectMyGasData} electricOrGas={false} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Electric;
