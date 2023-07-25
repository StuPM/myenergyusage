import React, { useState } from "react";

const ChartTypes = () => {
  const [selectedGraphType, setSelectedGraphType] = useState("chartjs");

  const selectedStyle =
    "w-40 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none ring ";

  const notSelectedStyle =
    "w-40 inline-block rounded border border-indigo-600 bg-transparent px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white";

  const changeChartType = (e) => {
    e.preventDefault();

    console.log(e.target.id);
    setSelectedGraphType(e.target.id);
  };

  return (
    <form className="flex justify-center" onClick={changeChartType}>
      <button
        id="d3"
        className={`${
          selectedGraphType === "d3" ? selectedStyle : notSelectedStyle
        } mr-2`}
      >
        D3
      </button>
      <button
        id="chartjs"
        className={`${
          selectedGraphType === "chartjs" ? selectedStyle : notSelectedStyle
        } ml-2`}
      >
        Chart JS
      </button>
    </form>
  );
};

export default ChartTypes;
