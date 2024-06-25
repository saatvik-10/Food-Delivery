import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Card className="mx-auto w-[100%] max-w-sm border-2 border-orange-600">
      <CardHeader className="space-y-1">
        <CardTitle className="text-center text-2xl font-bold">Login</CardTitle>
        <CardDescription className="text-center">
          Enter your email and password to login
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
            <Link to="/forgot-password-confirmation" className="text-sm underline">
              Forgot Password ?
            </Link>
          </div>
          <div>
            <Link to="/register" className="text-sm text-blue-700">
              New Here ? Click here to Register
            </Link>
          </div>
          <Button type="submit" className="w-full bg-gray-900">
            Login
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
