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

export default function ForgotPswdCon() {
  return (
    <Card className="mx-auto w-[100%] max-w-sm border-2 border-orange-600">
      <CardHeader className="space-y-3">
        <CardTitle className="text-center text-3xl font-bold">
          Confirm Its You
        </CardTitle>
        <CardDescription className="text-center">Who is it ?</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div className="space-y-2">
            <Label htmlFor="email">Question</Label>
            <div className="font-medium">
              <span>What is that one Date ?</span>
            </div>
            <Input id="ans" type="text" required />
          </div>
          <Button type="submit" className="w-full bg-gray-900">
            Confirm
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
