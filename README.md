# My Energy Usage

By utilising ChartJS and the Octopus Energy API, I have created a website that shows my electricity and gas usage over a given timeframe.

## Live link

- [My Energy Usage](https://my-energy-usage.netlify.app/).

## Features

When the webpage loads, an API call will be made to securely retrieve my energy consumption for the past 3 days from the Octopus Energy API. The retrieved data will then be displayed in a graph in hourly segments.

You can then:

- Change the dates specified and the relevant data will be retrieved from the API.
- Change the grouping of the data from hourly, to daily, weekly or monthly.

## Technology Stack

- [React](https://react.dev/)
  - Using functional components to create the website.
- [Redux](https://react-redux.js.org/)
  - For storing data in the local state used to control the website.
  - With CreateAsynThunk functions to manage API calls.
- [AXIOS](https://axios-http.com/)
  - Used to connect to both the Octopus Energy API.
- [React ChartJS](https://react-chartjs-2.js.org/)
  - To create the bar chart and display the data.
- [TailwindCSS](https://tailwindui.com/)
  - To provide styled components.
- HTML5, CSS3 and JavaScript.

## Author

Built and created by me, Stuart Paul McGee.
