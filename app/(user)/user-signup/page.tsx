import React from "react";
import SignUpPage from "@/components/constant/SignUpPage";

const UserSignUpPage = () => {
  
  const userCredential = "/user-login"
  /**
   * todo:
   *  pass props to the sign in page to change the link to went to user for users
   */
  return (
    <SignUpPage credential={userCredential}/>
  );
};

export default UserSignUpPage;