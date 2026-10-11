import { signIn } from "@/lib/auth-client";
import React from "react";

const SignInWithGitHub = () => {
  const handleGithubSignIn = async () => {
    await signIn.social({
      provider: "github",
    });

    if (data) {
      toast.success("Sign In successfull!");
      redirect("/");
    }

    if (error) {
      toast.error("Something went error!");
    }
  };
  
  return (
    <button onClick={handleGithubSignIn} className="btn ">
      Sign In With Github
    </button>
  );
};

export default SignInWithGitHub;
