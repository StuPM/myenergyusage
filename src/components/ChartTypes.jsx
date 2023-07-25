import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectChartType,
  setChartType,
} from "../features/octopus/octopusSlice";

const ChartTypes = () => {
  const dispatch = useDispatch();

  const selectedChartType = useSelector(selectChartType);

  const selectedStyle =
    "w-36 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none ring ";

  const notSelectedStyle =
    "w-36 inline-block rounded border border-indigo-600 bg-transparent px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white";

  const changeChartType = (e) => {
    e.preventDefault();
    dispatch(setChartType(e.target.id));
  };

  return (
    <form className="flex justify-center" onClick={changeChartType}>
      <button
        id="d3"
        className={`${
          selectedChartType === "d3" ? selectedStyle : notSelectedStyle
        } mr-2`}
      >
        D3
      </button>
      <button
        id="chartjs"
        className={`${
          selectedChartType === "chartjs" ? selectedStyle : notSelectedStyle
        } ml-2`}
      >
        ChartJS
      </button>
    </form>
  );
};

export default ChartTypes;
