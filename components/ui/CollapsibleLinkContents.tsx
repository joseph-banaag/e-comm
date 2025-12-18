"use client";
import {useState} from "react";
import {collapsibleLinks} from "../constant/storeLinks";
import Link from "next/link";

const CollapsibleLinkContents = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div>
      <div
        className={`${isOpen ? "fixed" : "hidden"} w-full p-0 m-0 h-screen absolute top-0 right-0 left-0 backdrop-blur-[2px] bg-gray-800/50`}
        onClick={handleClose}/>
      <button onClick={handleOpen} className="cursor-pointer">
        Other
      </button>
      <div
        className={`${isOpen ? "absolute" : "hidden"} flex flex-wrap px-4 pt-3 pb-7 gap-2  top-27.5 left-0 right-0 w-full h-30 bg-gray-800 text-[#e2e4e8]`}>
        {collapsibleLinks.map((link)=> (
          <Link
            key={link.label}
            href={link.route}
            onClick={handleClose}
            className="border flex items-center rounded-2xl px-2 py-0.5 border-gray-500/40 transition-all duration-300 hover:bg-gray-200/80 hover:text-[#19191a] text-shadow-lg shadow-lg h-6"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CollapsibleLinkContents;