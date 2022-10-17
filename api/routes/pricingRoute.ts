import express from "express";
import {
  getPriceHistory,
  updatePriceHistory,
} from "../controllers/pricingController";

const router = express.Router();

router.get("/", getPriceHistory);
router.post("/", updatePriceHistory);

export default router;
