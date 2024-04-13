"use server";
import * as z from "zod";
import { LoginSchema } from "@/lib/schemas";

export const login = async (value: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(value);

  if (!validatedFields.success) {
    return { error: "Invalid Input!" };
  }

  return { success: "Authorized!" };
};
