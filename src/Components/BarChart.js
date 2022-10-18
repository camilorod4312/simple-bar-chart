import React from "react";
import Paper from "@mui/material/Paper";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";

const BarChart = (props) => {
  return (
    <Paper>
      <Chart data={props.Data}>
        <ArgumentAxis />
        <ValueAxis max={7} />

        <BarSeries valueField="sales" argumentField="month" />
        <Title text="Sales By Month for:" />
      </Chart>
    </Paper>
  );
};

export default BarChart;
