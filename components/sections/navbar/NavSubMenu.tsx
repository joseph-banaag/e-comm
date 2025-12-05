import React from "react";
import { storeLinks } from "@/components/constant/storeLinks";
import OtherLinks from "@/components/ui/OtherLinks";

const NavSubMenu = () => {
  return (
    <div className="w-full hidden md:flex items-center text-[10px] font-medium px-5 pb-2 shadow-md">
      <ul className="flex items-center gap-5">
        <li className="subNavBtn">
          {storeLinks.processor}
        </li>
        <li className="subNavBtn">
          {storeLinks.monitor}
        </li>
        <li className="subNavBtn">
          {storeLinks.memory}
        </li>
        <li className="subNavBtn">
          {storeLinks.storage}
        </li>
        <li className="subNavBtn">
          {storeLinks.gpu}
        </li>
        <li className="subNavBtn">
          {storeLinks.psu}
        </li>
        <li className="subNavBtn">
          {storeLinks.computer_case}
        </li>
        <li className="subNavBtn">
          <OtherLinks />
        </li>
      </ul>
    </div>
  );
};

export default NavSubMenu;