import SignIn from "@/components/login/sign_in";
import SignOut from "@/components/login/sign_out";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Login() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    redirect("/login");
  };  

  const signIn = async (formData: FormData) => {
    "use server";

    const supabase = createClient();
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/");
    }

    return redirect("/add-content");
  };

  console.log(user?.email);
  return (
    user ?
      <SignOut formAction={signOut} />
      :
      <SignIn signIn={signIn} />
  );
}
