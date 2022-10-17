import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import pricingRoute from "./routes/pricingRoute";

const PORT = process.env.PORT || 5000;
const app = express();

const url = process.env.MONGOURL;
async function connectMongo() {
  try {
    await mongoose.connect(url as string);
    console.log("Successfully connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
}

app.use(express.json());
app.use(cors());
app.use("/api/pricinghistory", pricingRoute);

// test server
app.get("/", (req, res) => {
  res.send("Hello from the server :)");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
  connectMongo();
});
