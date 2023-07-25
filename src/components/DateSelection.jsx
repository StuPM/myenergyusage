import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  callMyElectricMeter,
  callMyGasMeter,
  selectTimeFrame,
  setNewDateFrom,
  setNewDateTo,
} from "../features/octopus/octopusSlice";

const DateSelection = ({ defaultFrom, defaultTo }) => {
  const dispatch = useDispatch();

  const timeFrame = useSelector(selectTimeFrame);

  const [newDefaultFrom, setNewDefaultFrom] = useState(defaultFrom);
  const [newDefaultTo, setNewDefaultTo] = useState(defaultTo);

  const updateDate = (e) => {
    if (e.target.name === "dateFrom") {
      dispatch(setNewDateFrom(e.target.value));
      // setNewDefaultFrom(e.target.value);
    } else if (e.target.name === "dateTo") {
      dispatch(setNewDateTo(e.target.value));
      // setNewDefaultTo(e.target.value);
    }
  };

  const submitDateChanges = (e) => {
    e.preventDefault();
    dispatch(setNewDateFrom(newDefaultFrom));
    dispatch(setNewDateTo(newDefaultTo));
  };

  useEffect(() => {
    dispatch(
      callMyElectricMeter({
        FROM: defaultFrom,
        TO: defaultTo,
        GROUP: timeFrame,
      })
    );
    dispatch(
      callMyGasMeter({
        FROM: defaultFrom,
        TO: defaultTo,
        GROUP: timeFrame,
      })
    );
  }, [defaultFrom, defaultTo, timeFrame]);

  return (
    <form
      className="flex flex-col mb-4 items-center"
      onSubmit={submitDateChanges}
      onChange={updateDate}
    >
      <div className="flex flex-row mb-4 ">
        <div className="mr-2">
          <label htmlFor="dateFrom" className="block font-medium text-gray-700">
            Start:
          </label>
          <input
            type="date"
            name="dateFrom"
            id="dateFrom"
            defaultValue={defaultFrom}
          />
        </div>
        <div className="ml-2">
          <label htmlFor="dateTo" className="block font-medium text-gray-700">
            End:
          </label>
          <input
            type="date"
            name="dateTo"
            id="dateTo"
            defaultValue={defaultTo}
          />
        </div>
      </div>
      <button
        type="submit"
        className="max-w-max inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
      >
        Go!
      </button>
    </form>
  );
};

export default DateSelection;
