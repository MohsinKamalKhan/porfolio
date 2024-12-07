import SignIn from "@/components/sign-in";
import SignOut from "@/components/sign-out";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Login() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    user ?
      <SignOut />
      :
      <SignIn />
  );
}
