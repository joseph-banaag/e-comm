import React from "react";
import { storeLinks } from "@/components/constant/storeLinks";

const NavSubMenu = () => {
  return (
    <div className="w-full h-8 flex items-center text-xs px-4 border">
      <ul className="flex items-center gap-4">
        <li>{storeLinks.processor}</li>
        <li>{storeLinks.monitor}</li>
        <li>{storeLinks.memory}</li>
        <li>{storeLinks.storage}</li>
        <li>{storeLinks.gpu}</li>
        <li>{storeLinks.psu}</li>
        <li>{storeLinks.computer_case}</li>
        <li>Other</li>
      </ul>
    </div>
  );
};

export default NavSubMenu;