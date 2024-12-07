"use client";
import { type ComponentProps } from "react";
import { signOutAction } from "@/app/actions";
import { Button } from "./ui/button";

type Props = ComponentProps<"button">;

export default function SignOut({ ...props }: Props) {

  return (
    <form  className="flex w-full justify-center items-center h-[80vh]" onSubmit={signOutAction}>
        <Button {...props} type="submit">
            SIGN OUT
        </Button>
    </form>
  );
}
