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
    type: Array,
    required: true,
  },
});

const UCart = mongoose.model("ucart", userCart);

export default UCart;
