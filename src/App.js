import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  callMyElectricMeter,
  callMyGasMeter,
  selectFromDate,
  selectTimeFrame,
  selectToDate,
} from "./features/octopus/octopusSlice";

import About from "./components/About";
import ChartGroup from "./components/ChartGroup";

function App() {
  const dispatch = useDispatch();
  const defaultFrom = useSelector(selectFromDate);
  const defaultTo = useSelector(selectToDate);

  const timeFrame = useSelector(selectTimeFrame);

  useEffect(() => {
    // Add in group here
    // any time it changes, call api again?
    // add it to the parameters at least

    console.log(timeFrame);

    dispatch(
      callMyElectricMeter({
        URL: "electricity-meter-points",
        METERPOINT: 1012766925331,
        SERIAL: "17P0337651",
        APIKEY: process.env.REACT_APP_APIKEY,
        FROM: defaultFrom,
        TO: defaultTo,
        GROUP: timeFrame,
      })
    );
    dispatch(
      callMyGasMeter({
        URL: "gas-meter-points",
        METERPOINT: 2996767710,
        SERIAL: "G4P03698001700",
        APIKEY: process.env.REACT_APP_APIKEY,
        FROM: defaultFrom,
        TO: defaultTo,
        GROUP: timeFrame,
      })
    );
  }, [defaultFrom, defaultTo, timeFrame]);

  return (
    <>
      <About />
      <ChartGroup />
    </>
  );
}

export default App;
