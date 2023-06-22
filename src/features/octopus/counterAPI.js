import axios from "axios";

export function callOctopusConsumptionAPI(URL, METERPOINT, SERIAL) {
  return new Promise((resolve) => {
    resolve(
      axios.get(
        `https://api.octopus.energy/v1/${URL}/${METERPOINT}/meters/${SERIAL}/consumption/`,
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

export function callAPIGas() {
  return new Promise((resolve) => {
    resolve(
      axios.get(
        "https://api.octopus.energy/v1/gas-meter-points/2996767710/meters/G4P03698001700/consumption/",
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
