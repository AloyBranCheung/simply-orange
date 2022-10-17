import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  date: string,
  location: string,
  price: number,
  _id: string
) {
  return { _id, date, location, price };
}

const rows = [
  createData("2022-08-25", "Loblaws", 7.9, "12312312"),
  createData("2022-08-26", "T&T", 5.9, "12312"),
  createData("2022-08-27", "Farmboy", 6.5, "12312312"),
  createData("2022-08-28", "Loblaws", 3.9, "123123"),
  createData("2022-08-28", "Loblaws", 3.9, "123123"),
  createData("2022-08-28", "Loblaws", 3.9, "123123"),
  createData("2022-08-28", "Loblaws", 3.9, "123123"),
  createData("2022-08-28", "Loblaws", 3.9, "123123"),
  createData("2022-08-28", "Loblaws", 3.9, "123123"),
  createData("2022-08-28", "Loblaws", 3.9, "123123"),
  createData("2022-08-28", "Loblaws", 3.9, "123123"),
  createData("2022-08-28", "Loblaws", 3.9, "123123"),
  createData("2022-08-28", "Loblaws", 3.9, "123123"),
  createData("2022-08-28", "Loblaws", 3.9, "123123"),
  createData("2022-08-28", "Loblaws", 3.9, "123123"),
  createData("2022-08-28", "Loblaws", 3.9, "123123"),
  createData("2022-08-28", "Loblaws", 3.9, "123123"),
  createData("2022-08-28", "Loblaws", 3.9, "123123"),
  createData("2022-08-28", "Loblaws", 3.9, "123123"),
  createData("2022-08-28", "Loblaws", 3.9, "123123"),
  createData("2022-08-28", "Loblaws", 3.9, "123123"),
];

// use _id as key
const dataTable = rows.map((dataPoint, index) => {
  return (
    <TableRow key={index}>
      <TableCell>{dataPoint.date}</TableCell>
      <TableCell>{dataPoint.location}</TableCell>
      <TableCell>{dataPoint.price}</TableCell>
    </TableRow>
  );
});

export default function PurchaseTable() {
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
