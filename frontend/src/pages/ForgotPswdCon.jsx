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
import axios from "axios";
import { toast } from "react-toastify";

const formSchema = z.object({
  phone: z
    .string()
    .trim()
    .regex(/^(\d[\s-]?){10}$/, {
      message: "Contact must be of 10 digits",
    })
    .transform((val) => val.replace(/\D/g, ""))
    .refine((val) => val.length === 10, {
      message: "Contact of 10 digits is required",
    }),
  forgotPasswordDate: z.date({
    message: "Date is required to proceed.",
  }),
});

const ForgotPswdCon = () => {
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
      forgotPasswordDate: null,
    },
  });

  const handleSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/forgot-password-confirmation",
        data,
        {
          withCredentials: true,
        },
      );
      if (response.status === 201) {
        // localStorage.setItem("isValidated", true);
        navigate("/reset-password");
        toast.success("Validation Succesful", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Validation Failed", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
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
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-bold uppercase text-zinc-500 dark:text-white">
                      Contact
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="focus-visible: border-0 bg-slate-100 text-black ring-offset-0 focus-visible:ring-0 dark:bg-slate-500 dark:text-white"
                        placeholder="Enter Contact Number"
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
