import express from "express";
import {
  addToCart,
  deleteCartItems,
  getCartItems,
} from "../controllers/cartController.js";

const router = express.Router();

router.route("/cart").post(addToCart).get(getCartItems).delete(deleteCartItems);

export default router;
