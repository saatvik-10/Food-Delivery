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
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const UCart = mongoose.model("ucart", userCart);

export default UCart;
