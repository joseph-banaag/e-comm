import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-20 w-full flex justify-center items-center text-xs font-medium border">
      <div className="w-[85%] flex justify-between">
          <Link href="/">Logo</Link>
          <ul className="flex justify-between gap-3">
              <li>Search</li>
              <li><Link href="/">Cart</Link></li>
              <li><Link href="/">Favorite</Link></li>
              <li><Link href="/">Profile</Link></li>
          </ul>
      </div>
    </nav>
  );
};

export default Navbar;