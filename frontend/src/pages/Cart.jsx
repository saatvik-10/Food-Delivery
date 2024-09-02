import axios from "axios";
import { ShoppingCart } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        const token = user.id;
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
          setCartItems(response.data);
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
      } finally {
        setLoading(false);
      }
    };
    fetchCartItems();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full">
      {cartItems.length === 0 ? (
        <div className="text-center">
          <span className="text-4xl font-semibold text-red-600 md:text-6xl">
            YOUR CART IS EMPTY!
          </span>
          <div className="flex items-center justify-center">
            <ShoppingCart className="m-20 size-1/2 text-orange-600 md:size-1/5" />
          </div>
          <p className="mb-10 text-2xl font-semibold text-red-600 md:text-3xl">
            Don't be shy, add your favourite items to the list. Order and get
            them delivered fresh at your door step to enjoy the flavourful
            cuisine from some of the finest chefs out there...HURRY UP!!!
          </p>
          <span className="flex items-center justify-center text-xl font-semibold text-black md:text-start md:text-2xl lg:text-3xl">
            <Link to="/menu">Click here to order yours now !</Link>
          </span>
        </div>
      ) : (
        <div>
          <span className="flex items-center justify-center text-4xl font-semibold text-red-600 md:text-6xl">
            ITEMS YOU HAVE ADDED!
          </span>
          <div className="grid grid-cols-2 gap-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="rounded border border-gray-200 p-4 shadow"
              >
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p>Amount: {item.amount}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
