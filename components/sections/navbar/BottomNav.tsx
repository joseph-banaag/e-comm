"use client";
import React from "react";
import {ChevronDown, ChevronUp} from "lucide-react";
import styles from "./nav.module.css";
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
          className={`${isOpen ? "block" : "hidden"} animate-bounce-close shadow-sm border border-gray-500/30 rounded-xl cursor-pointer hover:bg-gray-100 hover:bg-opacity-75 hover:animate-bounce mb-1`}
        />
        <div
          className={`${isOpen ? "flex animate-drawer-open" : "hidden animate-drawer-close"} animate-drawer-open w-full border border-gray-700/20 rounded-t-2xl pt-2 pb-4 px-5 backdrop-blur-[2px]`}>
          <ul className="flex justify-between items-center w-full px-5 text-xs ">
            <li><Link
              href="/"
              className="border flex items-center rounded-2xl px-2 py-0.5 border-gray-700/50 shadow-lg">
              Home
            </Link></li>
            <li><Link href="/"
                      className="border flex items-center rounded-2xl px-2 py-0.5 border-gray-700/50 shadow-lg">On
              Sale</Link></li>
            <li><Link href="/cart"
                      className="border flex items-center rounded-2xl px-2 py-0.5 border-gray-700/50 shadow-lg">Cart</Link>
            </li>
            <li><Link href="/Profile"
                      className="border flex items-center rounded-2xl px-2 py-0.5 border-gray-700/50 shadow-lg">Home</Link>
            </li>
          </ul>
        </div>
      </div>
      
      <ChevronUp
        type="button"
        onClick={handleDrawerOpen}
        className={`${isOpen ? "hidden" : "block"} animate-bounce-nav shadow-sm border border-gray-500/30 rounded-xl cursor-pointer hover:bg-gray-100 hover:bg-opacity-75 hover:animate-bounce mb-2`}
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