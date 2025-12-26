import React from "react";
import SignInPage from "@/components/constant/SignInPage";

const UserSignInPage = () => {
  
  const userCredential = "/user-signup"
  
  /**
   * todo:
   *  pass props to the sign in page to change the link to went to user for users
   */
  return (
    <SignInPage credential={userCredential}/>
  );
};

export default UserSignInPage;