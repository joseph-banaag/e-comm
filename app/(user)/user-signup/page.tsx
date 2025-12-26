import React from "react";
import SignUpPage from "@/components/constant/SignUpPage";

const Page = () => {
  
  const userCredential = "/user-signin"

  return (
    <SignUpPage credential={userCredential}/>
  );
};

export default Page;