import { Request, Response, NextFunction } from "express";
import PriceModel from "../models/PriceModel";

// = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   res.send("route controller reached");
// };

// GET
export const getPriceHistory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const list = await PriceModel.find();
    res.send(list);
  } catch (error: any) {
    res.send(error.message);
  }
};

// POST new price
export const updatePriceHistory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const newPrice = new PriceModel(req.body);
  try {
    await newPrice.save();
    res.send("Price recorded.");
  } catch (error: any) {
    res.send(error.message);
  }
};
