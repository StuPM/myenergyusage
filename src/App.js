import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./App.css";
import {
  callMyElectricMeter,
  callMyGasMeter,
} from "./features/octopus/octopusSlice";
import Navigation from "./components/Navigation";

import ChartGroup from "./components/ChartGroup";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      callMyElectricMeter({
        URL: "electricity-meter-points",
        METERPOINT: 1012766925331,
        SERIAL: "17P0337651",
        APIKEY: process.env.REACT_APP_APIKEY,
      })
    );
    dispatch(
      callMyGasMeter({
        URL: "gas-meter-points",
        METERPOINT: 2996767710,
        SERIAL: "G4P03698001700",
        APIKEY: process.env.REACT_APP_APIKEY,
      })
    );
  }, []);

  return (
    <>
      <Navigation />
      <ChartGroup />
    </>
  );
}

export default App;
