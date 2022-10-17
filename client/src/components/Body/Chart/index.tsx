import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

// chart options
const options = {
  title: {
    text: "Simply Orange History",
  },
  xAxis: {
    title: {
      text: "Dates",
    },
    type: "datetime",
    min: Date.UTC(2022, 8, 15),
    max: Date.UTC(2022, 8, 22),
  },
  series: [
    {
      name: "Loblaws",
      data: [
        [Date.UTC(2022, 8, 15), 5.9],
        [Date.UTC(2022, 8, 16), 6.5],
        [Date.UTC(2022, 8, 17), 7.9],
      ],
    },
    {
      name: "T&T",
      data: [
        [Date.UTC(2022, 8, 17), 5.9],
        [Date.UTC(2022, 8, 25), 6.5],
        [Date.UTC(2022, 8, 27), 3.9],
      ],
    },
    {
      name: "Farm Boy",
      data: [
        [Date.UTC(2022, 8, 15), 5.9],
        [Date.UTC(2022, 8, 18), 7.0],
        [Date.UTC(2022, 8, 21), 9.0],
      ],
    },
  ],
};

export default function Chart() {
  return (
    <Card sx={{ width: "100%", maxWidth: "800px" }}>
      <CardHeader title="Price History Graph" />
      <CardContent>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </CardContent>
    </Card>
  );
}
