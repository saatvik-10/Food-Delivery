import mongoose from "mongoose";

const userCart = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const UCart = mongoose.model("ucart", userCart);

export default UCart;
