"use server";
import * as z from "zod";
import bcryptjs from "bcryptjs";
import { RegisterSchema } from "@/lib/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/lib/data/user";

export const register = async (value: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(value);

  if (!validatedFields.success) {
    return { error: "Invalid Input!" };
  }

  const { email, password, name } = validatedFields.data;

  const hashedPassword = await bcryptjs.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "User already exists" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return { success: "Register's successfully!, check your email for verification." };
};
