"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ForgotSchema, ForgotSchemaType } from "@/Schema/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import AuthCardWrapper from "../_components/AuthCardWrapper";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const description =
  "Lorem ipsum, dolor sit  deleniti nulla quod provident nam earum ";

export default function ResetPassForm() {
  const form = useForm<ForgotSchemaType>({
    resolver: zodResolver(ForgotSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit: SubmitHandler<ForgotSchemaType> = (value) => {
    console.log(value);
  };

  return (
    <AuthCardWrapper
      description={description}
      title="Forgot Password"
      navigateText=" back to login page ?"
      navigatelink="/login"
      toNavigate="Login"
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

          <Button type="submit" className="w-full">
            Send Email
          </Button>
        </form>
      </Form>
    </AuthCardWrapper>
  );
}
