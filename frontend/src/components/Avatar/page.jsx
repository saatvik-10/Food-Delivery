import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Profile() {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("user");
    toast.success("User Logged Out Successfully");
    navigate("/");
    // window.location.reload();
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback className="text-black">PP</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link to="/profile">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/" onClick={logoutHandler}>
            Logout
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
