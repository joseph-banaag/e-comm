import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1>
      only authorized personnel can access this page.
      </h1>
      <p>please access your account here....</p>
      <Link href="/user-signin">Sign in</Link>
    </div>
  );
};

export default Page;