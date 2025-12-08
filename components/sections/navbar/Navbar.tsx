import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Heart, CircleUserRound } from "lucide-react";
import styles from "./nav.module.css";
import BurgerBtn from "@/components/ui/button/BurgerBtn";
import NavSearchBtn from "@/components/ui/button/NavSearchBtn";

const Navbar = () => {
  return (
    <nav className="w-full h-auto md:min-h-16 flex justify-center items-center text-xs font-medium py-3 mb-3 shadow-lg bg-linear-to-r from-blue-600 to-[#F84872] text-gray-100">
      <div className="w-full flex justify-between px-3 md:px-10">
        <div className="flex gap-3">
          <Link href="/">
            <Image
              src="/logo/company-logo-small.svg"
              width={20}
              height={20}
              alt="Company logo"
              style={{ width: "22px", height: "22px" }}
              loading="eager"
              className="inline md:hidden"
            />
            <Image
              src="/logo/company-logo.svg"
              width={120}
              height={50}
              alt="Company logo"
              style={{ width: "auto", height: "auto" }}
              loading="eager"
              className="hidden md:inline pr-3 md:pr-5"
            />
          </Link>
        </div>
        <ul className="flex justify-between items-center gap-1 sm:gap-2 md:gap-3">
          <li className="flex justify-end items-center gap-1 cursor-pointer border border-gray-100 rounded-2xl shadow-md px-1.5 md:px-3 py-0.5 h-[21px] w-35 md:w-50 lg:w-60">
            <span className="w-full text-gray-600/50">
              <NavSearchBtn />
            </span>
          </li>
          <li>
            <Link href="/" className="navBtnStyle">
              <span>
                <ShoppingCart className={styles.icons} />
              </span>
              <span className="hidden md:inline">Cart</span>
            </Link>
          </li>
          <li>
            <Link href="/" className="navBtnStyle">
              <span>
                <Heart className={styles.icons} />
              </span>
              <span className="hidden md:inline">Favorite</span>
            </Link>
          </li>
          <li>
            <Link href="/" className="navBtnStyle">
              <span>
                <CircleUserRound className={styles.icons} />
              </span>
              <span className="hidden md:inline">Profile</span>
            </Link>
          </li>
          <li className="inline md:hidden">
            <BurgerBtn />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
