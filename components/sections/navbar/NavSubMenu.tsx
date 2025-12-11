import {storeLinks} from "@/components/constant/storeLinks";
import CollapsibleLinkContents from "@/components/ui/CollapsibleLinkContents";

const NavSubMenu = () => {
  return (
    <div
      className="min-w-dvw h-auto hidden md:flex flex-1 items-center text-xs font-medium px-2 lg:px-5 pb-3 shadow-md">
      <ul className="flex items-center gap-2 lg:gap-5">
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
          <CollapsibleLinkContents/>
        </li>
      </ul>
    </div>
  );
};

export default NavSubMenu;