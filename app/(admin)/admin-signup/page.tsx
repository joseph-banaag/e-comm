import React from "react";
import SignUpPage from "@/components/constant/SignUpPage";

const Page = () => {
  
  const adminCredential = "/admin-login"
  
  /**
   * todo:
   *  pass props to the sign in page to change the link to went to admin for admin
   */
  return (
    <SignUpPage credential={adminCredential}/>
  );
};

export default Page;