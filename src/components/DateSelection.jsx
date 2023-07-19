import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { setNewDateFrom, setNewDateTo } from "../features/octopus/octopusSlice";

const DateSelection = ({ defaultFrom, defaultTo }) => {
  const dispatch = useDispatch();

  const [newDefaultFrom, setNewDefaultFrom] = useState(defaultFrom);
  const [newDefaultTo, setNewDefaultTo] = useState(defaultTo);

  const updateDate = (e) => {
    if (e.target.name === "dateFrom") {
      setNewDefaultFrom(e.target.value);
    } else if (e.target.name === "dateTo") {
      setNewDefaultTo(e.target.value);
    }
  };

  const submitDateChanges = (e) => {
    e.preventDefault();
    dispatch(setNewDateFrom(newDefaultFrom));
    dispatch(setNewDateTo(newDefaultTo));
  };

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
          <input type="date" name="dateFrom" id="" defaultValue={defaultFrom} />
        </div>
        <div className="ml-2">
          <label htmlFor="dateTo" className="block font-medium text-gray-700">
            End:
          </label>
          <input type="date" name="dateTo" id="" defaultValue={defaultTo} />
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
