import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Year", "Sales", "Expenses"],
  ["2018", 1000, 400],
  ["2019", 1170, 460],
  ["2020", 660, 1120],
  ["2021", 1030, 540],
];

const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
};

const GoogleChartExample = () => {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};

export default GoogleChartExample;