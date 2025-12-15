"use client";
import React from "react";
import {ChevronDown, ChevronUp} from "lucide-react";

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
          className={`${isOpen ? "block" : "hidden"} animate-bounce-close shadow-sm border border-gray-500/30 rounded-xl cursor-pointer hover:bg-gray-100 hover:bg-opacity-75 hover:animate-bounce`}
        />
        <div className={`${isOpen ? "flex" : "hidden"}`}>
          content here...
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