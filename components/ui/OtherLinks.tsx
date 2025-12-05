"use client";
import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const OtherLinks = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="static">
      <CollapsibleTrigger asChild>
        <button type="button" className="cursor-pointer">
          Other
        </button>
      </CollapsibleTrigger>

      <CollapsibleContent className="absolute top-[85px] left-0 right-0">
        <div className="h-40 w-full px-5 py-1 bg-gray-100">
          <p>Other components that you need. Here...</p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default OtherLinks;