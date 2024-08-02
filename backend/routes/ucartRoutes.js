import express from "express";
import { addToCart, getCartItems } from "../controllers/cartController.js";

const router = express.Router();

router.route("/cart").post(addToCart).get(getCartItems);

export default router;
