"use server";

import { signIn } from "@/auth";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import {
  LoginSchema,
  LoginSchemaType,
  RegisterSchema,
  RegisterSchemaType,
} from "@/Schema/auth";
import { AuthError } from "next-auth";

export const loginAction = async (values: LoginSchemaType) => {
  try {
    const validateFields = LoginSchema.safeParse(values);
    if (!validateFields.success) {
      return { error: "invalid fields !" };
    }

    const { email, password, code } = validateFields.data;
    const existingUser = await getUserByEmail(email);

    if (!existingUser || !existingUser.email || !existingUser.password) {
      return { error: "Email does not exist!" };
    }
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/profile",
    });

    return { success: "you have successfully logged in " };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }

    throw error;
  }
};

export const registerAction = async (values: RegisterSchemaType) => {
  try {
    const validateFields = RegisterSchema.safeParse(values);
    if (!validateFields.success) {
      return { error: "invalid fields !" };
    }

    const { email, password, name } = validateFields.data;
    const existingUser = await getUserByEmail(email);

    if (existingUser?.email) {
      return { error: "Email Aready Exist !" };
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    await db.user.create({ data: { name, email, password: hashedPassword } });

    return { success: "Register successfully" };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }

    throw error;
  }
};
