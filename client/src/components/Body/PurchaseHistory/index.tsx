import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import PurchaseTable from "./PurchaseTable";

export default function PurchaseHistory() {
  return (
    <Card
      sx={{
        overflowY: "auto",
        width: "100%",
        maxHeight: "500px",
        maxWidth: "800px",
      }}
    >
      <CardHeader title="Purchase History" />
      <CardContent>
        <PurchaseTable />
      </CardContent>
    </Card>
  );
}
