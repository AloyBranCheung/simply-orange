import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";

interface dataPoints {
  _id: string;
  date: Date;
  price: number;
  company: string;
}

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
          const sortedArr = value.sort(
            (a: dataPoints, b: dataPoints) =>
              new Date(b.date).valueOf() - new Date(a.date).valueOf()
          );
          console.log(sortedArr);
          for (let arr of sortedArr) {
            const tempArr = [];
            const strArr = arr.date.split("-");
            const year = strArr[0];
            const month = strArr[1] - 1;
            const day = strArr[2].split("T")[0] - 1;
            tempArr.push(Date.UTC(year, month, day), arr.price);
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
