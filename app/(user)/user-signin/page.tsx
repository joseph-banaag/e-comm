import React from "react";
import SignInPage from "@/components/constant/SignInPage";

const Page = () => {
  
  const userCredential = "/user-signup"

  return (
    <SignInPage credential={userCredential}/>
  );
};

export default Page;