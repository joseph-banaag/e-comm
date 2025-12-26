"use client";
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";

const ProfilePage = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  
  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/user-signin");
    } else {
      console.log("logged in?", isLoggedIn);
    }
    
  });
  
  return (
    <div className="w-full h-full max-w-7xl">
      <h1>Welcome User!</h1>
      <p>This is you profile page...</p>
    </div>
  );
};

export default ProfilePage;