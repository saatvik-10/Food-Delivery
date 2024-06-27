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
import { DatePicker } from "../components/DatePicker/DatePicker";

const formSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email({
      message: "Please enter a valid email",
    }),
  forgotPasswordDate: z.date({
    message: "Date is required for Forgot Password.",
  }),
});

const ForgotPswdCon = () => {
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      forgotPasswordDate: null,
    },
  });

  const handleSubmit = (data) => {
    navigate("/forgot-password");
    console.log(data);
  };

  return (
    <div className="mx-auto md:w-1/4">
      <Card className="border-2 border-red-600">
        <CardHeader>
          <CardTitle className="text-center">Confirm Its You</CardTitle>
          <CardDescription className="text-center">Who is it ?</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-6"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-bold uppercase text-zinc-500 dark:text-white">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="focus-visible: border-0 bg-slate-100 text-black ring-offset-0 focus-visible:ring-0 dark:bg-slate-500 dark:text-white"
                        placeholder="Enter Email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="forgotPasswordDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-bold uppercase text-zinc-500 dark:text-white">
                      What is that one Date ?
                    </FormLabel>
                    <FormControl>
                      <DatePicker {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button className="w-full">Proceed</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPswdCon;
