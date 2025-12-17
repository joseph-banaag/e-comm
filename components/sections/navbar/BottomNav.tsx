"use client";
import React from "react";
import {ChevronDown, ChevronUp} from "lucide-react";
import Link from "next/link";

const BottomNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const handleDrawerOpen = () => {
    setIsOpen(!isOpen);
  };
  
  const handleDrawerClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="fixed bottom-0 right-0 left-0 flex flex-col justify-center items-center w-full sm:hidden">
      <div className="flex flex-col items-center w-full">
        <ChevronDown
          type="button"
          onClick={handleDrawerClose}
          className={`${isOpen ? "block" : "hidden"} transition-all duration-200 text-gray-800 hover:text-red-500 animate-bounce-close shadow-sm border border-gray-500/30 rounded-xl cursor-pointer hover:bg-gray-100 hover:bg-opacity-75 hover:animate-bounce mb-1 drop-shadow-lg`}
        />
        <div
          className={`${isOpen ? "flex animate-drawer-open" : "hidden animate-drawer-close"} animate-drawer-open w-full border border-gray-200/50 rounded-t-lg pt-2 pb-3 px-5 backdrop-blur-[2px] bg-gray-800`}>
          <ul className="flex justify-between items-center w-full px-5 text-xs text-gray-100">
            <li><Link
              href="/"
              className="border flex items-center rounded-2xl px-2 py-0.5 border-gray-500/40 shadow-lg transition-all duration-300 hover:bg-gray-400 hover:text-[#19191a] text-shadow-lg">
              Home
            </Link></li>
            <li>
              <Link href="/"
                    className="border flex items-center rounded-2xl px-2 py-0.5 border-gray-500/40 shadow-lg transition-all duration-300 hover:bg-gray-400 hover:text-[#19191a] text-shadow-lg">On Sale</Link>
            </li>
            <li>
              <Link href="/cart"
                    className="border flex items-center rounded-2xl px-2 py-0.5 border-gray-500/40 shadow-lg transition-all duration-300 hover:bg-gray-400 hover:text-[#19191a] text-shadow-lg">Cart</Link>
            </li>
            <li>
              <Link href="/favorites"
                    className="border flex items-center rounded-2xl px-2 py-0.5 border-gray-500/40 shadow-lg transition-all duration-300 hover:bg-gray-400 hover:text-[#19191a] text-shadow-lg">Favorite</Link>
            </li>
            <li>
              <Link href="/profile"
                    className="border flex items-center rounded-2xl px-2 py-0.5 border-gray-500/40 shadow-lg transition-all duration-300 hover:bg-gray-400 hover:text-[#19191a] text-shadow-lg">Profile</Link>
            </li>
          </ul>
        </div>
      </div>
      
      <ChevronUp
        type="button"
        onClick={handleDrawerOpen}
        className={`${isOpen ? "hidden" : "block"} text-gray-800 hover:text-green-500 animate-bounce-nav shadow-sm border border-gray-500/30 rounded-xl cursor-pointer hover:bg-gray-100 hover:bg-opacity-75 hover:animate-bounce mb-2 drop-shadow-lg`}
      />
      
      {/*  todo:
      - create drawer container
      - hide chevron up drawer button once the drawer is clicked
      - create a reverse drawer button chevron down and reverse the animation
    */}
    </div>
  );
};

export default BottomNav;