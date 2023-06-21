import axios from "axios";

// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export function callAPI() {
  return new Promise((resolve) => {
    resolve(
      axios.get(
        "https://api.octopus.energy/v1/electricity-meter-points/1012766925331/meters/17P0337651/consumption/",
        {
          headers: {
            Authorization: "Basic " + process.env.REACT_APP_APIKEY,
          },
        }
      ),
      500
    );
  });
}
