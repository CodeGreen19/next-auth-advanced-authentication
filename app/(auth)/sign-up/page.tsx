"use client";

import { Input } from "@/components/ui/input";
import { RegisterSchema, RegisterSchemaType } from "@/Schema/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import AuthCardWrapper from "../_components/AuthCardWrapper";

import { registerAction } from "@/actions/auth";
import { customMessage } from "@/components/data/customToast";
import CustomBtn from "@/components/shared/CustomBtn";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const description =
  "Lorem ipsum, dolor sit  deleniti nulla quod provident nam earum ";

export default function SignUpForm() {
  const { toast } = useToast();
  const router = useRouter();

  const { isPending, mutate } = useMutation({
    mutationFn: registerAction,
    onSuccess: ({ error, success }) => {
      if (error) return toast(customMessage("Error", error));
      if (success) toast(customMessage("Success", success));
      router.push("/login");
    },
  });
  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<RegisterSchemaType> = (value) => {
    mutate(value);
  };

  return (
    <AuthCardWrapper
      description={description}
      title="Sign Up"
      navigateText="Already Have an account?"
      navigatelink="/login"
      social
      toNavigate="login"
    >
      <Form {...form}>
        <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="john doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
              </FormItem>
            )}
          />
          <CustomBtn
            type="submit"
            className="w-full"
            loading={isPending}
            loadingText="Registering"
          >
            Register
          </CustomBtn>
        </form>
      </Form>
    </AuthCardWrapper>
  );
}
