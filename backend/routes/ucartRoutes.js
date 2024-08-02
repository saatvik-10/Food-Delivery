import express from "express";
import { addToCart, getCartItems } from "../controllers/cartController.js";

const router = express.Router();

router.post("/add", addToCart);
router.get("get", getCartItems);

export default router;
