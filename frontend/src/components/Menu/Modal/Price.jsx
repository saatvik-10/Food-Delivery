import axios from "axios";
import { Button } from "../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import Counter from "../Modal/Counter";
import { toast } from "react-toastify";
import { useState } from "react";

export function Price({ subTitle, price1, price2 }) {
  const prices = [price1, price2];
  const [counter, setCounter] = useState("");
  const selectedPrice = prices.map((pr) => pr.prices);

  const handleAddToCart = async () => {
    try {
      // const response = await axios.post(
      //   "http://localhost:5000/api/users/cart",
      const data = {
        subTitle,
        counter,
        price: selectedPrice,
      };
      //   { withCredentials: true },
      // );
      console.log(data);
      // localStorage.setItem("user", JSON.stringify(response.data));
      toast.success("Items added to cart successfully", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", {
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

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-max rounded-md bg-gray-900 text-center">
          Add to Cart
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[375px]">
        <DialogHeader>
          <DialogTitle>{subTitle}</DialogTitle>
          <DialogDescription>Customise as per your taste</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center">
            <Counter
              prices={prices}
              setCounter={setCounter}
              counter={counter}
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleAddToCart}>Add Item</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
