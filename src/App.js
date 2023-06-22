import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./App.css";
import {
  callElectricMeter,
  callGasMeter,
} from "./features/octopus/octopusSlice";
import HeroBanner from "./components/HeroBanner";
import GetStarted from "./components/GetStarted";
import Electric from "./components/Electric";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(callElectricMeter());
    dispatch(callGasMeter());
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
