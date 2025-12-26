import React from 'react';
import SignInPage from "@/components/constant/SignInPage";

const Page = () => {
  const adminCredential = "/admin-signup"
  
  /*
  * todo:
  *   create a different authentication for a newly created admin account before granting acess
  * */

  return (
    <SignInPage credential={adminCredential}/>
  );
};

export default Page;