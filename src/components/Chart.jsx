import React from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { element } from "prop-types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
  scales: {
    y: {
      title: {
        display: true,
        text: "Your Title",
      },
    },
    x: {
      title: {
        display: true,
        text: "Your Title",
      },
    },
  },
};

// export
const Chart = ({ selectorToUse }) => {
  const electricData = useSelector(selectorToUse);

  const data = {
    labels: electricData.map((element) => {
      return element.interval_start;
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

  return (
    <>
      {/* {electricData.map((element) => (
        <p>{element.interval_start}</p>
      ))} */}
      <Bar data={data} options={options} />
    </>
  );
};

export default Chart;
