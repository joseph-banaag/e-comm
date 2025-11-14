import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="center-element">
      <h1>Welcome to the application main page...</h1>
      <ul>
        <li>
          <Link href="/user">To user log in page</Link>
        </li>
        <Link href="/admin">To admin log in page</Link>
      </ul>
    </div>
  );
};

export default HomePage;
