import UCart from "../models/userCart.js";
import asyncHandler from "express-async-handler";

const addToCart = asyncHandler(async (req, res) => {
  const { userId, name, amount, date } = req.body;

  const cartItem = new UCart({
    userId,
    name,
    amount,
    date,
  });

  await cartItem.save();

  res.status(201).json(cartItem);
});

const getCartItems = asyncHandler(async (req, res) => {
  const { userId } = req.body;

  const cartItems = await UCart.findOne({ userId });

  req.status(200).json(cartItems);
});

export { addToCart, getCartItems };
