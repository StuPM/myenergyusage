import React from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

import "chartjs-adapter-date-fns";

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

ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ selectorToUse, electricOrGas }) => {
  /*
        Electric = true
        Title - Electricity - My usage / Electricitry - Our usage compared
        Subtitle - 
        Icon - Me, Amy, 2 cats 

    */

  const electricData = useSelector(selectorToUse);

  const data = {
    labels: electricData.map((element) => {
      //   console.log(element.interval_start.substring(0, 16));
      return Date.parse(element.interval_start);
    }),
    datasets: [
      {
        label: "My data",
        data: electricData.map((element) => {
          return element.consumption;
        }),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      //   },
      //   {
      //     label: "Dataset 2",
      //     data: [2],
      //     backgroundColor: "rgba(53, 162, 235, 0.5)",
      //   },
    ],
  };

  const options = {
    // responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: electricOrGas
          ? "Electricity usage in KwH, from to."
          : "Gas usage in m³, from to.",
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
        title: {
          display: true,
          text: electricOrGas ? "Usage KwH" : "Usage m³",
          font: {
            weight: "bold",
          },
        },
      },
    },
  };

  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};

export default Chart;
