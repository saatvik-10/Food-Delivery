import { ShoppingCart } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="h-full w-full text-center">
      <span className="text-4xl font-semibold text-red-600 md:text-6xl">
        Your cart is Empty!
      </span>
      <div className="flex items-center justify-center">
        <ShoppingCart className="m-20 size-1/2 text-orange-600 md:size-1/5" />
      </div>
      <p className="mb-10 text-2xl font-semibold text-red-600 md:text-3xl">
        Don't be shy, add your favourite items to the list. Order and get them
        delivered fresh at your door step to enjoy the flavourful cuisine from
        some of the finest chefs out there...HURRY UP!!!
      </p>
      <span className="flex items-center justify-center text-xl font-semibold text-black md:text-start md:text-2xl lg:text-3xl">
        <Link to="/menu">Click here to order yours now !</Link>
      </span>
    </div>
  );
};

export default Cart;
