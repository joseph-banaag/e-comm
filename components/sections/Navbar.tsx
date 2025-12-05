import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="h-20 w-full flex justify-center items-center text-[10px] font-medium">
      <div className="w-full flex justify-between px-10">
        <Link href="/" className="ps-10">
          <Image
            src="/logo/company-logo.svg"
            width={120}
            height={50}
            alt="Company logo"
          />
        </Link>
        <ul className="flex justify-between items-center gap-3">
          <li className="flex items-center border border-gray-700/50 rounded-2xl shadow-md w-60 px-2 py-[2px]">
            <span className="w-40 text-gray-600/50">
              {/*  add form here... */}
            </span>
            <button className="flex items-center gap-1 cursor-pointer">
              <span>Search</span>
              <Image
                src="/icons/search-icon.svg"
                width={19}
                height={19}
                alt="Search"
              />
            </button>
          </li>
          <li>
            <Link href="/" className="nav-btn-style">
              <span>
                <Image
                  src="/icons/cart-add.svg"
                  width={20}
                  height={20}
                  alt="add to cart"
                />
              </span>
              <span>Cart</span>
            </Link>
          </li>
          <li>
            <Link href="/" className="nav-btn-style">
              <span>
                <Image
                  src="/icons/favorite.svg"
                  width={20}
                  height={20}
                  alt="favorite"
                />
              </span>
              <span>Favorite</span>
            </Link>
          </li>
          <li>
            <Link href="/" className="nav-btn-style">
              <span>
                <Image
                  src="/icons/profile.svg"
                  width={18}
                  height={18}
                  alt="profile"
                />
              </span>
              <span>Profile</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;