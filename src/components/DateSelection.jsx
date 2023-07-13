import React from "react";
import { useDispatch } from "react-redux";

import { setNewDateFrom, setNewDateTo } from "../features/octopus/octopusSlice";

const DateSelection = ({ defaultFrom, defaultTo }) => {
  const dispatch = useDispatch();

  const updateDate = (e) => {
    if (e.target.name === "dateFrom") {
      dispatch(setNewDateFrom(e.target.value));
    } else if (e.target.name === "dateTo") {
      dispatch(setNewDateTo(e.target.value));
    }
  };

  return (
    <div className="flex">
      <label
        htmlFor="dateFrom"
        className="block text-xs font-medium text-gray-700"
      >
        Date from:
      </label>
      <input
        type="date"
        name="dateFrom"
        id=""
        defaultValue={defaultFrom}
        onChange={updateDate}
      />
      <label
        htmlFor="dateTo"
        className="block text-xs font-medium text-gray-700"
      >
        Date to:
      </label>
      <input
        type="date"
        name="dateTo"
        id=""
        defaultValue={defaultTo}
        onChange={updateDate}
      />
    </div>
  );
};

export default DateSelection;
