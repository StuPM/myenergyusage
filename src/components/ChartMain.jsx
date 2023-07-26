import React from "react";
import Chart_JS from "./charts/Chart_JS";
import "../styles/Electric.css";

import DateSelection from "./charts/DateSelection";

import { selectFromDate, selectToDate } from "../features/octopus/octopusSlice";
import { useSelector } from "react-redux";

const ChartGroup = () => {
  const defaultFrom = useSelector(selectFromDate);
  const defaultTo = useSelector(selectToDate);

  return (
    <>
      <main className="min-h-screen mt-4 flex flex-col items-center">
        <h2 className="text-3xl font-extrabold mb-4">
          💡 Electricity and Gas 🔥
        </h2>
        <DateSelection defaultFrom={defaultFrom} defaultTo={defaultTo} />
        <Chart_JS />
      </main>
    </>
  );
};

export default ChartGroup;
