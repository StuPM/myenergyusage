import React, { useEffect, useState } from "react";

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
import {
  selectMyElectricData,
  selectMyGasData,
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
  const electricData = useSelector(selectMyElectricData);
  const gasData = useSelector(selectMyGasData);

  const [electricDataGrouped, setElectricDataGrouped] = useState(electricData);
  const [timeFrame, setTimeFrame] = useState("hour");

  const clickTimeFrame = (e) => {
    e.preventDefault();
    setTimeFrame(e.target.id);

    console.log(e.target.id);

    if (e.target.id === "week") {
      setElectricDataGrouped(weeklyData());
    } else if (e.target.id === "day") {
      setElectricDataGrouped(dailyData());
    } else if (e.target.id === "hour") {
      setElectricDataGrouped(electricData);
    }
  };

  const dailyData = () => {
    const electricDay = [];

    electricData.map((element) => {
      const currentDate = new Date(
        new Date(element.interval_start).setHours(0, 0, 0, 0)
      );

      // const newWeekDate = new Date(
      //   new Date(currentDate.setDate(diff)).setHours(0, 0, 0, 0)
      // );

      const index = electricDay.findIndex(
        (e) => e.interval_start.valueOf() === currentDate.valueOf()
      );

      if (index === -1) {
        electricDay.push({
          interval_start: currentDate,
          consumption: element.consumption,
        });
      } else {
        const newConsumption =
          electricDay[index].consumption + element.consumption;
        electricDay[index].consumption = newConsumption;
      }
    });

    console.log(electricDay);

    return electricDay;
  };

  const weeklyData = () => {
    const electricWeek = [];

    electricData.map((element) => {
      const currentDate = new Date(element.interval_start);

      let diff =
        currentDate.getDate() -
        currentDate.getDay() +
        (currentDate.getDay() === 0 ? -6 : 1);

      const newWeekDate = new Date(
        new Date(currentDate.setDate(diff)).setHours(0, 0, 0, 0)
      );

      const index = electricWeek.findIndex(
        (e) => e.interval_start.valueOf() === newWeekDate.valueOf()
      );

      if (index === -1) {
        electricWeek.push({
          interval_start: newWeekDate,
          consumption: element.consumption,
        });
      } else {
        const newConsumption =
          electricWeek[index].consumption + element.consumption;
        electricWeek[index].consumption = newConsumption;
      }
    });

    console.log(electricWeek);

    return electricWeek;
  };

  useEffect(() => {
    setElectricDataGrouped(electricData);
  }, [electricData]);

  const data = {
    labels: electricDataGrouped.map((element) => {
      //   console.log(element.interval_start.substring(0, 16));
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
      // {
      //   label: "Gas",
      //   data: gasData.map((element) => {
      //     return element.consumption;
      //   }),
      //   backgroundColor: "rgba(53, 162, 235, 0.5)",
      //   yAxisID: "gas",
      // },
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
