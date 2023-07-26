import React, { useEffect, useState } from "react";

import { Bar } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";

import "chartjs-adapter-date-fns";

import { chooseDataGrouping } from "../../utils";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  TimeScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import {
  selectMyElectricData,
  selectMyGasData,
  selectTimeFrame,
  setTimeFrame,
} from "../../features/octopus/octopusSlice";

ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart_JS = () => {
  const dispatch = useDispatch();

  const electricData = useSelector(selectMyElectricData);
  const gasData = useSelector(selectMyGasData);
  const timeFrame = useSelector(selectTimeFrame);

  const [electricDataGrouped, setElectricDataGrouped] = useState(electricData);
  const [gasDataGrouped, setGasDataGrouped] = useState(gasData);

  const selectedStyle =
    "w-36 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none ring ";

  const notSelectedStyle =
    "w-36 inline-block rounded border border-indigo-600 bg-transparent px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white";

  useEffect(() => {
    setElectricDataGrouped(chooseDataGrouping(timeFrame, electricData));
    setGasDataGrouped(chooseDataGrouping(timeFrame, gasData));
  }, [electricData, gasData]);

  const clickTimeFrame = (e) => {
    e.preventDefault();

    dispatch(setTimeFrame(e.target.id));

    setElectricDataGrouped(chooseDataGrouping(e.target.id, electricData));
    setGasDataGrouped(chooseDataGrouping(e.target.id, gasData));
  };

  const data = {
    labels: electricDataGrouped.map((element) => {
      return element.interval_start;
    }),
    datasets: [
      {
        label: "Electricity (KwH)",
        data: electricDataGrouped.map((element) => {
          return element.consumption;
        }),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
      },
      {
        label: "Gas m³",
        data: gasDataGrouped.map((element) => {
          return element.consumption;
        }),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          title: (context) => {
            const currentValue = new Date(context[0].parsed.x);
            const formattedDate = currentValue.toLocaleString([], {
              hour: "2-digit",
              minute: "2-digit",
            });
            return formattedDate;
          },
        },
      },
    },
    scales: {
      x: {
        position: "bottom",
        type: "time",

        time: {
          unit: timeFrame,
          isoWeekday: true,
          displayFormats: {
            month: "MMMM yyyy",
          },
        },

        ticks: {
          major: {
            enabled: true,
          },
          font: (context) => {
            const bolded = context.tick && context.tick.major ? "bold" : "";
            return { weight: bolded };
          },
        },
        title: {
          display: true,
          text: "Date and Time",
          beginAtZero: true,
          font: {
            weight: "bold",
          },
        },
      },
      y: {
        position: "right",
        min: 0,
        beginAtZero: true,

        title: {
          display: true,
          text: "Usage",
          font: {
            weight: "bold",
          },
        },
      },
    },
  };

  //TODO buttons to own component
  return (
    <>
      <div className="w-full  flex-grow">
        <Bar data={data} options={options} />
      </div>
      <form
        className="flex justify-center flex-wrap gap-4 w-4/5"
        onClick={clickTimeFrame}
      >
        <button
          id="month"
          className={`${
            timeFrame === "month" ? selectedStyle : notSelectedStyle
          }`}
        >
          Monthly
        </button>
        <button
          id="week"
          className={`${
            timeFrame === "week" ? selectedStyle : notSelectedStyle
          }`}
        >
          Weekly
        </button>
        <button
          id="day"
          className={`${
            timeFrame === "day" ? selectedStyle : notSelectedStyle
          }`}
        >
          Daily
        </button>
        <button
          id="hour"
          className={`${
            timeFrame === "hour" ? selectedStyle : notSelectedStyle
          }`}
        >
          Hourly
        </button>
      </form>
    </>
  );
};

export default Chart_JS;
