import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { SheetTrigger, SheetContent, Sheet } from "./ui/sheet";
import logo from "./images/cook.png";
import { LogIn, ShoppingBag } from "lucide-react";

export default function Component() {
  return (
    <div className="fixed top-0 flex w-full items-center justify-between bg-gray-900 px-4 py-2">
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
        <Link
          className="flex items-center gap-2 text-lg font-medium underline-offset-4 hover:underline"
          to="/cart"
        >
          Cart
          <ShoppingBag size={17} />
        </Link>
      </div>
      <div className="mr-5 hidden gap-4 text-white md:flex">
        <Button className="gap-2 text-lg font-medium">
          <LogIn />
          Login
        </Button>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
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
            <Link
              className="text-lg font-medium underline-offset-4 hover:underline"
              to="/cart"
            >
              Cart
            </Link>
          </div>
          <Button className="gap-2 bg-none text-lg font-medium">
            <LogIn />
            Login
          </Button>
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
