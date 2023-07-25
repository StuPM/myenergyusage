import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  callMyElectricMeter,
  callMyGasMeter,
  selectTimeFrame,
  setNewDateFrom,
  setNewDateTo,
} from "../../features/octopus/octopusSlice";

const DateSelection = ({ defaultFrom, defaultTo }) => {
  const dispatch = useDispatch();

  const timeFrame = useSelector(selectTimeFrame);

  const updateDate = (e) => {
    if (e.target.name === "dateFrom") {
      dispatch(setNewDateFrom(e.target.value));
    } else if (e.target.name === "dateTo") {
      dispatch(setNewDateTo(e.target.value));
    }
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
    <form className="flex flex-col mb-4 items-center" onChange={updateDate}>
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
    </form>
  );
};

export default DateSelection;
