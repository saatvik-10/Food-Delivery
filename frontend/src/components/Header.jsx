import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { SheetTrigger, SheetContent, Sheet } from "./ui/sheet";
import logo from "./images/cook.png";
import { LogIn, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import Profile from "./Avatar/page";
import { toast } from "react-toastify";

export default function Component() {
  const [loginUser, setloginUser] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setloginUser(user);
    }
  }, []);

  const handleUser = () => {
    if (!loginUser) {
      toast.error("Login to access the cart");
    }
  };

  return (
    <div className="fixed top-0 z-50 flex w-full items-center justify-between bg-gray-900 px-4 py-2">
      <Link className="flex items-center gap-1" to="/">
        <img src={logo} alt="" className="size-14" />
        <span className="text-lg font-semibold text-white">FoodyZzz</span>
      </Link>
      <div className="mr-5 hidden gap-4 text-white md:flex">
        <Link
          className="text-lg font-medium underline-offset-4 hover:underline"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-lg font-medium underline-offset-4 hover:underline"
          to="/menu"
        >
          Menu
        </Link>
        {loginUser ? (
          <Link
            className="flex items-center gap-2 text-lg font-medium underline-offset-4 hover:underline"
            to="/cart"
          >
            Cart
            <ShoppingBag size={17} />
          </Link>
        ) : (
          <Link
            className="flex cursor-pointer items-center gap-2 text-lg font-medium underline-offset-4 hover:underline"
            onClick={handleUser}
            to="/login"
          >
            Cart <ShoppingBag size={17} />
            <span className="-ml-1 inline-flex size-5 items-center justify-center rounded-full bg-white text-xs font-bold text-gray-900">
              10
            </span>
          </Link>
        )}
      </div>
      <div className="mr-5 hidden gap-4 text-white md:flex">
        {loginUser ? (
          <Profile loginUser={loginUser} />
        ) : (
          <Link to="/login" className="flex gap-2 text-lg font-medium">
            <LogIn />
            Login
          </Link>
        )}
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <Button className="gap-2 bg-white text-lg font-medium hover:bg-white">
            {loginUser ? (
              <Profile loginUser={loginUser} />
            ) : (
              <Link
                to="/login"
                className="flex gap-2 text-lg font-medium text-black"
              >
                <LogIn />
                Login
              </Link>
            )}
          </Button>
          <div className="grid w-[200px] gap-y-3 p-3">
            <Link
              className="text-lg font-medium underline-offset-4 hover:underline"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-lg font-medium underline-offset-4 hover:underline"
              to="/menu"
            >
              Menu
            </Link>
            {loginUser ? (
              <Link
                className="flex items-center gap-2 text-lg font-medium underline-offset-4 hover:underline"
                to="/cart"
              >
                Cart
                <ShoppingBag size={17} />
                <span className="-ml-1 inline-flex size-5 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white">
                  10
                </span>
              </Link>
            ) : (
              <Link
                className="flex cursor-pointer items-center gap-2 text-lg font-medium underline-offset-4 hover:underline"
                onClick={handleUser}
                to="/login"
              >
                Cart <ShoppingBag size={17} />
              </Link>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
