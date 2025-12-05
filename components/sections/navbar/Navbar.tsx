import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import styles from "./nav.module.css";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-center items-center text-[10px] font-medium py-3 mb-3">
      <div className="w-full flex justify-between px-10">
        <Link href="/public" className="ps-10 pe-3">
          <Image
            src="/logo/company-logo.svg"
            width={120}
            height={50}
            alt="Company logo"
          />
        </Link>
        <ul className="flex justify-between items-center gap-3">
          <li className="navBtnStyle w-30 h-[21px] md:w-60">
            <span className="w-40 text-gray-600/50">
              {/* todo:  add form here... */}
            </span>
            <button className="block md:flex items-center gap-1 cursor-pointer">
              <span className="hidden md:inline">Search</span>

              <Search className={styles.icons} />
            </button>
          </li>
          <li>
            <Link href="/" className="navBtnStyle">
              <span>
                <Image
                  src="/icons/cart-add.svg"
                  width={15}
                  height={15}
                  alt="add to cart"
                  className="w-4 h-4"
                />
              </span>
              <span className="hidden md:inline">Cart</span>
            </Link>
          </li>
          <li>
            <Link href="/" className="navBtnStyle">
              <span>
                <Image
                  src="/icons/favorite.svg"
                  width={15}
                  height={15}
                  alt="favorite"
                  className="w-4 h-4"
                />
              </span>
              <span className="hidden md:inline">Favorite</span>
            </Link>
          </li>
          <li>
            <Link href="/" className="navBtnStyle">
              <span>
                <Image
                  src="/icons/profile.svg"
                  width={15}
                  height={15}
                  alt="profile"
                  className="w-4 h-4"
                />
              </span>
              <span className="hidden md:inline">Profile</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;