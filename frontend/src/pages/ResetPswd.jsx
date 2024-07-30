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
import { toast } from "react-toastify";
import { useEffect } from "react";
import axios from "axios";

const formSchema = z.object({
  newPassword: z.string().min(1, {
    message: "Enter new password",
  }),
  confirmNewPassword: z.string().min(1, {
    message: "Confirm your new password",
  }),
});

const ResetPswd = () => {
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  // useEffect(() => {
  //   const checkValidation = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:5000/api/users/reset-password",
  //         { withCredentials: true }, // Include cookies in the request
  //       );
  //       if (response.status === 200) {
  //         setIsValidated(true);
  //       } else {
  //         navigate("/forgot-password-confirmation");
  //       }
  //     } catch (error) {
  //       navigate("/forgot-password-confirmation");
  //     }
  //   };

  //   checkValidation();
  // }, [navigate]);

  const handleSubmit = async (data) => {
    if (data.newPassword !== data.confirmNewPassword) {
      toast.error("Passwords do not match", {
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
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/reset-password",
        { ...data },
      );
      if (response.status === 200) {
        toast.success("Password reset successful", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error while resetting the password", {
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

export default ResetPswd;
