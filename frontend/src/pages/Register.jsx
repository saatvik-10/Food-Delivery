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

export default function Register() {
  return (
    <Card className="mx-auto w-full max-w-sm border-2 border-orange-600">
      <CardHeader>
        <CardTitle className="text-center text-3xl">Register</CardTitle>
        <CardDescription className="text-center">
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-1">
        <div className="space-y-1">
          <Label htmlFor="full-name">Full name</Label>
          <Input id="full-name" placeholder="John Doe" required />
        </div>
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="me@example.com"
            required
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>
        <div className="space-y-1">
          <Label htmlFor="confirm-password">Confirm Password</Label>
          <Input id="confirm-password" type="password" required />
        </div>
        <div className="space-y-1">
          <div className="mt-2 flex flex-col space-y-1 font-medium">
            <Label>What is that one Date ?</Label>
            <span className="text-xs text-gray-500">(For Forgot Password)</span>
          </div>
          <Input id="ans" type="text" required />
        </div>
        <Button className="w-full bg-gray-900">Register</Button>
      </CardContent>
    </Card>
  );
}
