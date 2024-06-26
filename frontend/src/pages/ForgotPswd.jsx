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

export default function ForgotPswd() {
  return (
    <Card className="mx-auto w-[100%] max-w-sm border-2 border-orange-600">
      <CardHeader className="space-y-3">
        <CardTitle className="text-center text-3xl font-bold">
          Forgot Password
        </CardTitle>
        <CardDescription className="text-center">Hello //name</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-1">
            <Label htmlFor="newPassword">New Password</Label>
            <Input id="password" type="password" required />
          </div>
          <div className="space-y-1">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input id="confirm-password" type="password" required />
          </div>
          <Button type="submit" className="w-full bg-gray-900">
            Confirm
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
