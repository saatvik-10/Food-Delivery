import axios from "axios";
import { ShoppingCart } from "lucide-react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = () => {
  const [cartItems, setCartItems] = useState();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("jwt"));
        const response = await axios.get(
          "http://localhost:5000/api/users/cart",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          },
        );
        console.log(response.data);
        if (response.data) {
          setCartItems(cartItems);
        }
      } catch (error) {
        console.error("Error fetching user profile", error);
        toast.error("Unable to fetch data", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    };
    fetchCartItems();
  }, [cartItems]);

  return (
    <div className="w-full">
      <div>
        <span className="flex items-center justify-center text-4xl font-semibold text-red-600 md:text-6xl">
          ITEMS YOU HAVE ADDED !
        </span>
        <div className="grid grid-cols-2">
          {/* <span>{cartItems.amount}</span> */}
        </div>
      </div>

      {/* <div className="text-center">
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
      </div> */}
    </div>
  );
};

export default Cart;
