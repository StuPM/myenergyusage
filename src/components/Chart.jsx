import React, { useEffect, useState } from "react";

import { Bar } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";

import "chartjs-adapter-date-fns";

import { chooseDataGrouping } from "../utils";

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
} from "../features/octopus/octopusSlice";

ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const dispatch = useDispatch();

  const electricData = useSelector(selectMyElectricData);
  const gasData = useSelector(selectMyGasData);
  const timeFrame = useSelector(selectTimeFrame);

  const [electricDataGrouped, setElectricDataGrouped] = useState(electricData);
  const [gasDataGrouped, setGasDataGrouped] = useState(gasData);

  const clickTimeFrame = (e) => {
    e.preventDefault();

    dispatch(setTimeFrame(e.target.id));

    setElectricDataGrouped(chooseDataGrouping(e.target.id, electricData));
    setGasDataGrouped(chooseDataGrouping(e.target.id, gasData));

    // if (e.target.id === "month") {
    //   setElectricDataGrouped(monthlyData(electricData));
    //   setGasDataGrouped(monthlyData(gasData));
    // } else if (e.target.id === "week") {
    //   setElectricDataGrouped(weeklyData(electricData));
    //   setGasDataGrouped(weeklyData(gasData));
    // } else if (e.target.id === "day") {
    //   setElectricDataGrouped(dailyData(electricData));
    //   setGasDataGrouped(dailyData(gasData));
    // } else if (e.target.id === "hour") {
    //   setElectricDataGrouped(electricData);
    //   setGasDataGrouped(gasData);
    // }
  };

  useEffect(() => {
    setElectricDataGrouped(chooseDataGrouping(timeFrame, electricData));
    setGasDataGrouped(chooseDataGrouping(timeFrame, gasData));

    // setElectricDataGrouped(monthlyData(electricData));
    // setGasDataGrouped(monthlyData(gasData));
  }, [electricData, gasData]);

  const data = {
    labels: electricDataGrouped.map((element) => {
      return element.interval_start;
    }),
    datasets: [
      {
        label: "Electric",
        data: electricDataGrouped.map((element) => {
          return element.consumption;
        }),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
      },
      {
        label: "Gas",
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
          text: "Usage KwH",
          font: {
            weight: "bold",
          },
        },
      },
      // gas: {
      //   title: {
      //     display: true,
      //     text: "Usage m³",
      //     font: {
      //       weight: "bold",
      //     },
      //   },
      //   grid: {
      //     drawOnChartArea: false,
      //   },
      // },
    },
  };

  return (
    <>
      <div className="h-full w-full">
        <Bar data={data} options={options} />
      </div>
      <form className="flex justify-between" onClick={clickTimeFrame}>
        <button
          id="month"
          className="mr-2 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        >
          Monthly
        </button>
        <button
          id="week"
          className="mr-2 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        >
          Weekly
        </button>
        <button
          id="day"
          className="mr-2 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        >
          Daily
        </button>
        <button
          id="hour"
          className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        >
          Hourly
        </button>
      </form>
    </>
  );
};

export default Chart;
