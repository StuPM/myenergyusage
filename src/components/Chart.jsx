import React, { useEffect, useRef } from "react";

import * as d3 from "d3";

import { useSelector } from "react-redux";

const Chart = ({ selectorToUse, electricOrGas }) => {
  const data = useSelector(selectorToUse);

  // const data = [
  //   {
  //     consumption: 0.031,
  //     interval_start: "2023-07-10T00:30:00+01:00",
  //     interval_end: "2023-07-10T01:00:00+01:00",
  //   },

  //   {
  //     consumption: 0.039,
  //     interval_start: "2023-07-10T00:00:00+01:00",
  //     interval_end: "2023-07-10T00:30:00+01:00",
  //   },
  // ];

  // console.log(Math.ceil(d3.max(data.map((d) => d.consumption))));

  const svgRef = useRef();

  console.log(data);

  useEffect(() => {
    const w = 1500;
    const h = 300;
    const marginTop = 30;
    const marginRight = 0;
    const marginBottom = 30;
    const marginLeft = 40;

    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("overflow", "visible")
      .attr("viewBox", [0, 0, w, h])
      .attr("style", "max-width: 100%; height: auto;");

    const xScale = d3
      .scaleBand()
      .domain(data.map((val) => val.interval_end))
      .range([marginLeft, w - marginRight])
      .padding(0.5);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data.map((d) => d.consumption))])
      .range([h - marginBottom, marginTop]);

    svg
      .append("g")
      .attr("fill", "steelblue")
      .selectAll()
      .data(data)
      .join("rect")
      .attr("x", (d) => xScale(d.interval_end))
      .attr("y", (d) => yScale(d.consumption))
      .attr("height", (d) => yScale(0) - yScale(d.consumption))
      .attr("width", xScale.bandwidth());

    svg
      .append("g")
      .attr("transform", `translate(0,${h - marginBottom})`)
      .call(d3.axisBottom(xScale).tickSizeOuter(0));

    svg
      .append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(d3.axisLeft(yScale))
      .call((g) => g.select(".domain").remove())
      .call((g) =>
        g
          .append("text")
          .attr("x", -marginLeft)
          .attr("y", 10)
          .attr("fill", "currentColor")
          .attr("text-anchor", "start")
          .text("↑ Frequency (%)")
      );
  }, [data]);

  return (
    <>
      <svg ref={svgRef}></svg>
    </>
  );
};

export default Chart;
