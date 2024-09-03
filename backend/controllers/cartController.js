import UCart from "../models/userCart.js";
import asyncHandler from "express-async-handler";

const addToCart = asyncHandler(async (req, res) => {
  const { userId, name, quantity, price } = req.body;

  const cartItem = new UCart({
    userId,
    name,
    quantity,
    price,
  });

  await cartItem.save();

  res.status(201).json(cartItem);
});

const getCartItems = asyncHandler(async (req, res) => {
  const { userId } = req.query;

  const cartItems = await UCart.find({ userId });

  res.status(200).json(cartItems);
});

export { addToCart, getCartItems };
