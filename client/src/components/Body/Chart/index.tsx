import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";

export default function Chart() {
  const [sortedData, setSortedData] = useState(new Map());
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://simply-orange.herokuapp.com/api/pricinghistory"
        );

        const groupedByCompany = new Map();

        for (let point of data) {
          if (!groupedByCompany.get(point.company)) {
            groupedByCompany.set(point.company, [point]);
          } else {
            groupedByCompany.get(point.company).push(point);
          }
        }

        groupedByCompany.forEach((value, key) => {
          const datePriceArr = [];
          for (let arr of value) {
            const tempArr = [];
            const date = arr.date.replace(/-/g, "/").replace(/T.+/, "");
            // const stringArr = arr.date.split("-");
            // const newDate = `${stringArr[0]}-${stringArr[1]}-${
            //   stringArr[2].split("T")[0]
            // }`;
            tempArr.push(date, arr.price);
            datePriceArr.push(tempArr);
          }
          groupedByCompany.set(key, datePriceArr);
        });

        setSortedData(groupedByCompany);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // chart options
  const options = {
    title: {
      text: "Simply Orange History",
    },
    yAxis: {
      title: {
        text: "Price ($)",
      },
    },
    xAxis: {
      title: {
        text: "Dates",
      },
      type: "datetime",
    },
    series: [
      {
        name: "Loblaws",
        data: sortedData.get("loblaws"),
      },
      {
        name: "T&T",
        data: sortedData.get("t&t"),
      },
      {
        name: "Farm Boy",
        data: sortedData.get("farmBoy"),
      },
    ],
  };

  return (
    <Card sx={{ width: "100%", maxWidth: "800px" }}>
      <CardHeader title="Price History Graph" />
      <CardContent>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </CardContent>
    </Card>
  );
}
