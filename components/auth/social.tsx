"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
export const Social = ({ state }: { state: string }) => {
  return (
    <div className="w-full text-center space-y-4">
      <p className="text-sm text-muted-foreground select-none">
        or {state == "login" ? "login" : "register"} with
      </p>
      <div className="w-full flex items-center gap-x-2">
        <Button size={"lg"} className="w-full" variant={"outline"}>
          <FcGoogle size={20} />
        </Button>
        <Button size={"lg"} className="w-full" variant={"outline"}>
          <FaGithub size={20} />
        </Button>
      </div>
    </div>
  );
};
