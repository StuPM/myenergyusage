import React from "react";
import Chart from "./Chart";
import "../styles/Electric.css";

import DateSelection from "./DateSelection";

import { selectFromDate, selectToDate } from "../features/octopus/octopusSlice";
import { useSelector } from "react-redux";
import ChartTypes from "./ChartTypes";

const ChartGroup = () => {
  const defaultFrom = useSelector(selectFromDate);
  const defaultTo = useSelector(selectToDate);

  return (
    <>
      <section id="MyUsage" className="py-14 border-black border-t-2">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="chartContainer flex flex-col items-center ">
            <h4 className="text-2xl font-semibold">
              💡 Electricity and Gas 🔥
            </h4>
            <DateSelection defaultFrom={defaultFrom} defaultTo={defaultTo} />
            <ChartTypes />
            <Chart />
          </div>
        </div>
      </section>
    </>
  );
};

export default ChartGroup;
