import Image from "next/image";
import React from "react";
import Link from "next/link";
import DropdownButton from "@/components/button/DropdownButton";

const Navbar = () => {
  return (
    <nav className="min-h-10 flex justify-center items-center border">
      <div className="inline-flex min-w-[85%] justify-between items-center">
        <ul className="basis-[50%] flex justify-between px-2">
          <li>
            <Link href="/">
              <Image
                src="/company-logo.svg"
                width={25}
                height={25}
                alt="Company Logo"
              />
            </Link>
          </li>
          <li>On sale</li>
          <li>Brands</li>
        </ul>
        <div className="basis-[30%] px-2 flex flex-row-reverse border">
          search
        </div>
        <div className="basis-[20%] px-2 border">
          <ul className="flex flex-row-reverse gap-x-5 items-center">
            <li>
              <DropdownButton />
            </li>
            <li>profile</li>
            <li>cart</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
