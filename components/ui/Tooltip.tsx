"use client";
import {ReactNode, useState} from "react";

interface ToolTipProps {
  content: string;
  children: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}

const Tooltip = ({
                   content,
                   children,
                   position = "top"
                 }: ToolTipProps) => {
  
  const [isVisible, setIsVisible] = useState<boolean>(false);
  
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2"
  };
  
  const arrowClasses = {
    top: "top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-gray-900",
    bottom: "bottom-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-gray-900",
    left: "left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-gray-900",
    right: "right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-gray-900"
  };
  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      
      {isVisible && (
        <div
          className={`absolute z-50 px-3 py-2 text-[10px] text-shadow-lg text-[#e1e1e3] bg-gray-900/90 rounded-lg whitespace-nowrap inline md:hidden ${positionClasses[position]}`}
        >
          {content}
          <div
            className={`absolute w-0 h-0 border-4 ${arrowClasses[position]}`}
          />
        </div>
      )}
    </div>
  );
};

export default Tooltip;