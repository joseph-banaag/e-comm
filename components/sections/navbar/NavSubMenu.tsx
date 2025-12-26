import CollapsibleLinkContents from "@/components/ui/CollapsibleLinkContents";
import {subNavLinks} from "@/components/constant/storeLinks";
import Link from "next/link";

const NavSubMenu = () => {
  return (
    <div
      className="min-w-full h-auto hidden md:flex flex-1 items-center text-xs font-medium px-2 lg:px-5 pt-3 pb-6 shadow-md max-w-7xl bg-[#e4e4e6]">
      <div className="flex items-center gap-2 lg:gap-5 flex-wrap">
        {subNavLinks.map((link) => (
          <Link
            key={link.label}
            href={link.route}
            className="text-nowrap border border-gray-200 rounded-4xl px-2 py-0.5 bg-white text-[#19191a] transition-all duration-300 hover:bg-gray-700/70 hover:text-[#e2e4e8] text-shadow-lg shadow-lg"
          >
            {link.label}
          </Link>
        ))}
        <div className="border border-gray-200 rounded-4xl px-2 py-0.5 bg-white text-[#19191a] transition-all duration-300 hover:bg-gray-700/70 hover:text-[#e2e4e8] text-shadow-lg shadow-lg">
          <CollapsibleLinkContents/>
        </div>
      </div>
    </div>
  );
};

export default NavSubMenu;