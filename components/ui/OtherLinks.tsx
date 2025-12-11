"use client";
import React, { useEffect, useRef } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import OtherLinksContent from "./OtherLinksContent";

const OtherLinks = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    
  })


  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="static">
      <CollapsibleTrigger asChild>
        <button type="button" className="cursor-pointer">
          Other
        </button>
      </CollapsibleTrigger>

      <CollapsibleContent className="absolute top-[110px] left-0 right-0">
        <div className="h-40 w-full px-5 py-1 bg-gray-800 text-xs text-[#bec1c4]">
          <OtherLinksContent />
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default OtherLinks;