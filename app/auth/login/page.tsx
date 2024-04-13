import { LoginForm } from "@/components/auth/login-form";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to Ranzhop",
};

export default function LoginPage() {
  return <LoginForm />;
}
