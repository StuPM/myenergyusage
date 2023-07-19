import React from "react";
import Chart from "./Chart";
import "../styles/Electric.css";

import DateSelection from "./DateSelection";

import { selectFromDate, selectToDate } from "../features/octopus/octopusSlice";
import { useSelector } from "react-redux";

const ChartGroup = () => {
  const defaultFrom = useSelector(selectFromDate);
  const defaultTo = useSelector(selectToDate);

  return (
    <>
      <section className="h-screen pt-4 flex flex-col items-center">
        {/* <div className="flex flex-col items-center"> */}
        <h2 className="text-3xl font-extrabold mb-4">
          💡 Electricity and Gas 🔥
        </h2>
        <DateSelection defaultFrom={defaultFrom} defaultTo={defaultTo} />
        <Chart />
        {/* </div> */}
      </section>
    </>
  );
};

export default ChartGroup;
