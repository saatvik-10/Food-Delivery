import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  newPassword: z.string().min(1, {
    message: "New Password is required",
  }),
  confirmNewPassword: z.string().min(1, {
    message: "Confirm New Password is required",
  }),
});

const ForgotPswd = () => {
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const handleSubmit = (data) => {
    navigate("/login");
    console.log(data);
  };

  return (
    <div className="mx-auto md:w-1/4">
      <Card className="border-2 border-red-600">
        <CardHeader>
          <CardTitle className="text-center">Forgot Password</CardTitle>
          <CardDescription className="text-center">
            Hello //name
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-6"
            >
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-bold uppercase text-zinc-500 dark:text-white">
                      New Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="focus-visible: border-0 bg-slate-100 text-black ring-offset-0 focus-visible:ring-0 dark:bg-slate-500 dark:text-white"
                        type="password"
                        placeholder="Enter New Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmNewPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-bold uppercase text-zinc-500 dark:text-white">
                      Confirm New Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="focus-visible: border-0 bg-slate-100 text-black ring-offset-0 focus-visible:ring-0 dark:bg-slate-500 dark:text-white"
                        type="password"
                        placeholder="Confirm New Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button className="w-full">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPswd;
