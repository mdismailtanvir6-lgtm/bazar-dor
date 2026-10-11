import React from "react";
import SignInWithGoogle from "./SignInWithGoogle";
import SignInWithGitHub from "./SignInWithGitHub";

const SocialsSignIn = () => {
  return (
    <div className="mt-5 flex flex-col gap-3">
      <SignInWithGoogle />
      <SignInWithGitHub />
    </div>
  );
};

export default SocialsSignIn;
