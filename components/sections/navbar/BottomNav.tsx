"use client"
import React from 'react';
import {ChevronUp} from "lucide-react";

const BottomNav = () => {
  const handleBottomNavDrawer = () => {
    alert("bottom drawer has been clicked!")
  }
  return (
    <div className="fixed bottom-0 right-0 left-0 flex justify-center items-center w-full h-5 sm:hidden">
      
      <ChevronUp
        type="button"
        onClick={handleBottomNavDrawer}
        className="animate-bounce-nav shadow-sm border border-gray-500/30 rounded-xl cursor-pointer hover:bg-gray-100 hover:bg-opacity-75 hover:animate-bounce mb-3"
      />
    </div>
  );
};

export default BottomNav;