import React from "react";
import { storeLinks } from "@/components/constant/storeLinks";
import OtherLinks from "@/components/ui/OtherLinks";

const NavSubMenu = () => {
  return (
    <div className="w-full h-8 flex items-center text-[10px] font-medium px-5">
      <ul className="flex items-center gap-5">
        <li className="sub-nav-links-style">{storeLinks.processor}</li>
        <li className="sub-nav-links-style">{storeLinks.monitor}</li>
        <li className="sub-nav-links-style">{storeLinks.memory}</li>
        <li className="sub-nav-links-style">{storeLinks.storage}</li>
        <li className="sub-nav-links-style">{storeLinks.gpu}</li>
        <li className="sub-nav-links-style">{storeLinks.psu}</li>
        <li className="sub-nav-links-style">{storeLinks.computer_case}</li>
        <li className="sub-nav-links-style"><OtherLinks /></li>
      </ul>
    </div>
  );
};

export default NavSubMenu;