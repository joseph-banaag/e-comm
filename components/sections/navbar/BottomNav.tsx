"use client";
import React from "react";
import {ChevronDown, ChevronUp} from "lucide-react";
import Link from "next/link";
import {bottomNavLinks} from "@/components/constant/storeLinks";

const BottomNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const handleDrawerOpen = () => {
    setIsOpen(!isOpen);
  };
  
  const handleDrawerClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="fixed bottom-0 right-0 left-0 flex flex-col justify-center items-center min-w-2xs sm:hidden">
      <ChevronDown
        type="button"
        onClick={handleDrawerClose}
        className={`${isOpen ? "block" : "hidden"} size-5.5 absolute bottom-[65px] transition-all duration-200 text-gray-800 hover:text-red-500 animate-bounce-close shadow-sm border border-gray-500/30 rounded-xl cursor-pointer hover:bg-gray-100 hover:bg-opacity-75 hover:animate-bounce drop-shadow-lg`}
      />
      
      <div
        className={`${isOpen ? "flex animate-drawer-open" : "hidden animate-drawer-close"} animate-drawer-open w-full border border-gray-200/50 rounded-t-lg pt-2 pb-3 px-1.5 sm:px-5 backdrop-blur-[2px] bg-gray-800 overflow-hidden`}>
        
        <div className="flex justify-between items-center w-full px-5 text-gray-100 text-nowrap gap-1">
          {bottomNavLinks.map((link) => (
            <Link
              key={link.label}
              href={link.route}
              className="flex flex-col gap-0.5 items-center px-2 py-0.5 transition-all duration-300 text-[#bdc2c9] text-shadow-lg hover:text-[#e2e4e8] text-[10px] drop-shadow-lg"
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>
      
      </div>
      
      <ChevronUp
        type="button"
        onClick={handleDrawerOpen}
        className={`${isOpen ? "hidden" : "block"} size-5.5 absolute bottom-[5px] text-gray-800 hover:text-green-500 animate-bounce-nav shadow-sm border border-gray-500/30 rounded-xl cursor-pointer hover:bg-gray-100 hover:bg-opacity-75 hover:animate-bounce drop-shadow-lg`}
      />
    </div>
  );
};

export default BottomNav;