import React from 'react';
import SignInPage from "@/components/constant/SignInPage";

const AdminLoginPage = () => {
  
  const adminCredential = "/admin-signup"
  /**
   * todo:
   *  pass props to the sign in page to change the link to went to admin for admin
   */
  
  return (
    <SignInPage credential={adminCredential}/>
  );
};

export default AdminLoginPage;