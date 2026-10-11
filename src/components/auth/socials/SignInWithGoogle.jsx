import { signIn } from "@/lib/auth-client";
import React from "react";

const SignInWithGoogle = () => {
  const handleGoogleSignIn = async () => {
    await signIn.social({
      provider: "google",
    });

    if (data) {
      toast.success("Sign In successfull!");
      redirect("/");
    }

    if (error) {
      toast.error("Something went wrong!");
    }
  };
  
  return (
    <button onClick={handleGoogleSignIn} className="btn ">
      Sign In With Google
    </button>
  );
};

export default SignInWithGoogle;
