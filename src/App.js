import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./App.css";
import {
  callMyElectricMeter,
  callMyGasMeter,
} from "./features/octopus/octopusSlice";
import HeroBanner from "./components/HeroBanner";
import GetStarted from "./components/GetStarted";
import Electric from "./components/Electric";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      callMyElectricMeter({
        URL: "electricity-meter-points",
        METERPOINT: 1012766925331,
        SERIAL: "17P0337651",
      })
    );
    dispatch(
      callMyGasMeter({
        URL: "gas-meter-points",
        METERPOINT: 2996767710,
        SERIAL: "G4P03698001700",
      })
    );
  }, []);

  return (
    <>
      {/* <HeroBanner /> */}
      {/* <GetStarted /> */}
      <Electric />
    </>
  );
}

export default App;
