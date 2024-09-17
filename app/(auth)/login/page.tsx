"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import AuthCardWrapper from "../_components/AuthCardWrapper";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginSchema, LoginSchemaType } from "@/Schema/auth";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useTransition } from "react";
import CustomBtn from "@/components/shared/CustomBtn";
import { useToast } from "@/hooks/use-toast";
import { customMessage } from "@/components/data/customToast";
import { ToastAction } from "@/components/ui/toast";
import { BiError } from "react-icons/bi";
import { useMutation } from "@tanstack/react-query";
import { loginAction } from "@/actions/auth";

const description =
  "Lorem ipsum, dolor sit  deleniti nulla quod provident nam earum ";

export default function LoginForm() {
  const { toast } = useToast();

  // const { isPending, mutate } = useMutation({
  //   mutationFn: loginAction,
  //   onSuccess: ({ error, success }) => {
  //     if (error) toast(customMessage("Error", error));
  //     if (success) toast(customMessage("Success", success));
  //   },
  // });

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginSchemaType> = (value) => {
    // mutate(value);

    loginAction(value).then((data) => {
      console.log("info", data);
    });
  };

  return (
    <AuthCardWrapper
      description={description}
      title="Login"
      navigateText="don't have any account?"
      navigatelink="/sign-up"
      social
      toNavigate="Sign-Up"
    >
      <Form {...form}>
        <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="****" {...field} />
                </FormControl>
                <FormMessage />
                <Link href={"/forgot-password"}>
                  <div className="text-end text-sm text-gray-500 underline">
                    forgot your password?
                  </div>
                </Link>
              </FormItem>
            )}
          />
          {/* <Button type="submit" className="w-full">
            Login
            
          </Button> */}
          <CustomBtn type="submit">Login</CustomBtn>
        </form>
      </Form>
    </AuthCardWrapper>
  );
}
