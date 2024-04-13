import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    default: "Auth",
    template: "%s | Ranzhop - Admin Dashboard",
  },
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center p-8 justify-center bg-muted-foreground">
      {children}
    </div>
  );
}
