import { Avatar } from "../ui/avatar";
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

export default function Profile({ loginUser }) {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("user");
    toast.success("Logout successful, PLease Wait...");
    navigate("/");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <Avatar className="hover:pointer flex items-center justify-center bg-black text-lg font-bold text-white md:bg-white md:text-gray-900">
          {loginUser.name?.slice(0, 1).toUpperCase()}
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="-translate-x-2">
        <DropdownMenuLabel className="text-lg">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link className="w-full text-base" to={"/profile"}>
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link className="w-full text-base" to="/" onClick={logoutHandler}>
            Logout
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
