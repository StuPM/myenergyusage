import { configureStore } from "@reduxjs/toolkit";
import octopusSlice from "../features/octopus/octopusSlice";

export const store = configureStore({
  reducer: {
    octopus: octopusSlice,
  },
});
