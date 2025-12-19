import Link from "next/link";
import Image from "next/image";
import {CircleUserRound, Heart, Percent, ShoppingCart} from "lucide-react";
import styles from "./nav.module.css";
import BurgerBtn from "@/components/ui/button/BurgerBtn";
import NavSearchBtn from "@/components/ui/button/NavSearchBtn";
import Tooltip from "@/components/ui/Tooltip";

const Navbar = () => {
  return (
    <nav
      className="w-full h-auto md:min-h-16 flex justify-center items-center text-xs font-medium px-1 py-3 mb-3 shadow-lg bg-linear-to-r from-blue-600 to-purple-950 text-[#e1e1e3]">
      <div className="w-full flex justify-between px-3">
        
        <div className="flex gap-3 px-3 ">
          <Link href="/">
            <Image
              src="/logo/company-logo-small.svg"
              width={20}
              height={20}
              alt="Company logo"
              style={{width: "22px", height: "22px"}}
              loading="eager"
              className="inline md:hidden"
            />
            <Image
              src="/logo/company-logo.svg"
              width={120}
              height={50}
              alt="Company logo"
              style={{width: "auto", height: "auto"}}
              loading="eager"
              className="hidden md:inline pr-3 md:pr-5"
            />
          </Link>
        </div>
        
        
        <ul className="flex justify-between items-center gap-0.5 sm:gap-2 md:gap-3">
          <li
            className="flex justify-end items-center gap-1 cursor-pointer border border-gray-400/50 rounded-2xl  px-1.5 md:px-3 py-0.5 h-5.25 w-auto xs:w-50 md:w-60 shadow-lg transition-all duration-300 hover:ring-1 hover:ring-gray-200/70">
            <span className="w-full text-[#e1e1e3]">
              <NavSearchBtn/>
            </span>
          </li>
          
          <li>
            {/*todo:
                    if the user is logged in, change the content of the cart from local to user's
                     profile/database...
            */}
            <Tooltip content="Cart" position="bottom">
              
              <Link href="/cart"
                    className="hidden sm:flex items-center gap-1 cursor-pointer border border-gray-400/50 rounded-2xl  px-2 py-0.5 transition-all duration-300 hover:bg-gray-200/60 hover:text-[#19191a] text-shadow-lg shadow-lg">
                <ShoppingCart className={styles.icons}/>
                <span className="hidden md:inline">Cart</span>
              </Link>
            
            </Tooltip>
          </li>
          
          <li className="md:hidden">
            {/*todo:
                  if the user is logged in, change the favorites from save to local to save to user's
                   profile/database...
            */}
            <div className="hidden sm:flex">
              <Tooltip content="Sale" position="bottom">
                
                <Link href="/on-sale"
                      className="flex md:hidden items-center gap-1 cursor-pointer border border-gray-400/50 rounded-2xl  px-2 py-0.5 transition-all duration-300 hover:bg-gray-200/60 hover:text-[#19191a] text-shadow-lg shadow-lg">
                  <Percent className={styles.icons}/>
                </Link>
              
              </Tooltip>
            </div>
          </li>
          
          <li>
            {/*todo:
                  if the user is logged in, change the favorites from save to local to save to user's
                   profile/database...
            */}
            <Tooltip content="Favorite" position="bottom">
              
              <Link href="/favorites"
                    className="hidden sm:flex items-center gap-1 cursor-pointer border border-gray-400/50 rounded-2xl  px-2 py-0.5 transition-all duration-300 hover:bg-gray-200/60 hover:text-[#19191a] text-shadow-lg shadow-lg">
                <Heart className={styles.icons}/>
                <span className="hidden md:inline">Favorites</span>
              </Link>
            
            </Tooltip>
          </li>
          
          <li>
            {/*todo:
                  if use is logged in, change this link to be in the users dashboard/profile...
            */}
            <Tooltip content="Profile" position="bottom">
              
              <Link href="/profile"
                    className="hidden sm:flex items-center gap-1 cursor-pointer border border-gray-400/50 rounded-2xl  px-2 py-0.5 transition-all duration-300 hover:bg-gray-200/60 hover:text-[#19191a] text-shadow-lg shadow-lg">
                <CircleUserRound className={styles.icons}/>
                <span className="hidden md:inline">Profile</span>
              </Link>
            
            </Tooltip>
          </li>
          <li className="inline md:hidden ">
            <BurgerBtn/>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;