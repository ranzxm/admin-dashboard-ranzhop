import { RegisterForm } from "@/components/auth/register-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "Register with Ranzhop",
};

export default function RegisterPage() {
  return <RegisterForm />;
}
