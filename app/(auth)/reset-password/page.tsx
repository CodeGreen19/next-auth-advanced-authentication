"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResetSchema, ResetSchemaType } from "@/Schema/auth";
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
  const form = useForm<ResetSchemaType>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      newPass: "",
      confirmPass: "",
    },
  });

  const onSubmit: SubmitHandler<ResetSchemaType> = (value) => {
    console.log(value);
  };

  return (
    <AuthCardWrapper
      description={description}
      title="Reset Password"
      navigateText=" back to login page ?"
      navigatelink="/login"
      toNavigate="Login"
    >
      <Form {...form}>
        <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="newPass"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <Input placeholder="*****" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPass"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input placeholder="*****" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Update
          </Button>
        </form>
      </Form>
    </AuthCardWrapper>
  );
}
