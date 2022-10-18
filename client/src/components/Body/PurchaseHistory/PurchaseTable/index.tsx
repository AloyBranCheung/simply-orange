import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

interface dataPoints {
  _id: string;
  date: Date;
  price: number;
  company: string;
}

export default function PurchaseTable() {
  const [fetchedData, setFetchedData] = useState([] as dataPoints[]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://simply-orange.herokuapp.com/api/pricinghistory"
        );
        setFetchedData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  function createData(
    date: string,
    location: string,
    price: number,
    _id: string
  ) {
    return { _id, date, location, price };
  }

  const rows = fetchedData
    .sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf())
    // Note: date type any
    .map((el: { date: any; company: string; _id: string; price: number }) => {
      const strArr = el.date.split("-");
      const year = strArr[0];
      const month = strArr[1] - 1;
      const day = strArr[2].split("T")[0] - 1;
      return createData(
        `${year}-${month}-${day}`,
        el.company,
        el.price,
        el._id
      );
    });
  // [
  //   createData("2022-08-25", "Loblaws", 7.9, "12312312"),
  //   createData("2022-08-26", "T&T", 5.9, "12312"),
  // ];

  // use _id as key
  const dataTable = rows.map((dataPoint) => {
    return (
      <TableRow key={dataPoint._id}>
        <TableCell>{dataPoint.date}</TableCell>
        <TableCell sx={{ textTransform: "capitalize" }}>
          {dataPoint.location}
        </TableCell>
        <TableCell>{dataPoint.price}</TableCell>
      </TableRow>
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table aria-label="purchase history table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Price ($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{dataTable}</TableBody>
      </Table>
    </TableContainer>
  );
}
