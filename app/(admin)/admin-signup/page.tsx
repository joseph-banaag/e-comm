import React from "react";
import SignUpPage from "@/components/constant/SignUpPage";

const Page = () => {
  
  const adminCredential = "/admin-signin"
  
  /*
* todo:
*   create a different authentication for a newly created admin account before granting acess
* */
  
  return (
    <SignUpPage credential={adminCredential}/>
  );
};

export default Page;