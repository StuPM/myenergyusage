import axios from "axios";

export function callOctopusConsumptionAPI(
  URL,
  METERPOINT,
  SERIAL,
  APIKEY,
  FROM,
  TO
) {
  return new Promise((resolve) => {
    resolve(
      axios.get(
        `https://api.octopus.energy/v1/${URL}/${METERPOINT}/meters/${SERIAL}/consumption/`,
        {
          headers: {
            Authorization: "Basic " + APIKEY,
          },
          params: {
            period_from: FROM,
            period_to: TO,
            // page_size: 1000,
            // group_by: "day",
          },
        }
      ),
      500
    );
  });
}
