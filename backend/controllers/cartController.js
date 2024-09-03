import UCart from "../models/userCart.js";
import asyncHandler from "express-async-handler";

const addToCart = asyncHandler(async (req, res) => {
  const { userId, name, amount } = req.body;

  const cartItem = new UCart({
    userId,
    name,
    amount,
  });

  await cartItem.save();

  res.status(201).json(cartItem);
});

const getCartItems = asyncHandler(async (req, res) => {
  const { userId } = req.query;

  const cartItems = await UCart.find({ userId });

  res.status(200).json(cartItems);
});

const deleteCartItems = asyncHandler(async (req, res) => {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ message: "Item ID is required" });
  }

  const result = await UCart.findByIdAndDelete(id);

  if (!result) {
    return res.status(404).json({ message: "Item not found" });
  }

  res.status(200).json({ message: "Item Deleted" });
});

export { addToCart, getCartItems, deleteCartItems };
