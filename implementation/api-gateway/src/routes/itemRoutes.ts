import express from "express";
import ItemsService from "../controllers/ItemsService";

const itemRouter = express.Router();

itemRouter.get("/prices", ItemsService.findPrices);

export default itemRouter 
