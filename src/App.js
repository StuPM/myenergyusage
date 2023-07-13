import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import {
  callMyElectricMeter,
  callMyGasMeter,
  selectFromDate,
  selectToDate,
} from "./features/octopus/octopusSlice";
import Navigation from "./components/Navigation";
import About from "./components/About";
import ChartGroup from "./components/ChartGroup";

function App() {
  const dispatch = useDispatch();
  const defaultFrom = useSelector(selectFromDate);
  const defaultTo = useSelector(selectToDate);

  useEffect(() => {
    dispatch(
      callMyElectricMeter({
        URL: "electricity-meter-points",
        METERPOINT: 1012766925331,
        SERIAL: "17P0337651",
        APIKEY: process.env.REACT_APP_APIKEY,
        FROM: defaultFrom,
        TO: defaultTo,
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
      })
    );
  }, [defaultFrom, defaultTo]);

  return (
    <>
      <Navigation />
      <About />
      <ChartGroup />
    </>
  );
}

export default App;
