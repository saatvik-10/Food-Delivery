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
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Textarea } from "../components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
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
  address: z.string().min(1, {
    message: "Address is required",
  }),
});

const UserProfile = () => {
  const [authUser, setAuthUser] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("jwt"));
        const response = await axios.get(
          "http://localhost:5000/api/users/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          },
        );

        setAuthUser(response.data);
      } catch (error) {
        console.error("Error fetching user profile", error);
        if (error.response && error.response.status === 404) {
          toast.error("User not found", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else {
          toast.error("Something went wrong", {
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
      }
    };

    fetchUserProfile();
  }, []);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
    },
  });

  useEffect(() => {
    form.reset(authUser);
  }, [authUser, form]);

  const handleSubmit = async (data) => {
    try {
      const token = JSON.parse(localStorage.getItem("jwt"));
      const response = await axios.put(
        "http://localhost:5000/api/users/profile",
        { ...data },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        },
      );

      console.log(response.data);
      localStorage.setItem("user", JSON.stringify({ ...response.data }));

      toast.success("User Info updated successfully", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", {
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
    <div className="mx-auto w-full md:w-1/3">
      <Card className="border-2 border-red-600">
        <CardHeader>
          <CardTitle className="text-center">Profile</CardTitle>
          <CardDescription className="text-center">
            Update your profile
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-2"
            >
              <div>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-bold uppercase text-zinc-500 dark:text-white">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="focus-visible: border-0 bg-slate-100 text-black ring-offset-0 focus-visible:ring-0 dark:bg-slate-500 dark:text-white"
                          placeholder="Enter Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

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
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mt-3 text-xs font-bold uppercase text-zinc-500 dark:text-white">
                        Address
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          className="focus-visible: h-20 border-0 bg-slate-100 text-black ring-offset-0 focus-visible:ring-0 dark:bg-slate-500 dark:text-white"
                          placeholder="Enter Address"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="mt-3 w-full" type="submit">
                  Save
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;
