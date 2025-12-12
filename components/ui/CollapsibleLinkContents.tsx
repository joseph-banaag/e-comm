"use client"
import {storeLinks} from "../constant/storeLinks";
import styles from "./links.module.css"
import {useState} from "react";

const CollapsibleLinkContents = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const handleOpen = () => {
    setIsOpen(!isOpen);
  }
  const handleClose = () => {
    setIsOpen(!isOpen)
  };
  
  return (
    <div>
      <div
        className={`${isOpen ? "fixed" : "hidden"} w-full p-0 m-0 h-screen absolute top-0 right-0 left-0 backdrop-blur-[2px] bg-gray-800/50`}
        onClick={handleClose}/>
      <button onClick={handleOpen} className="cursor-pointer">
        Other
      </button>
      <ul
        className={`${isOpen ? "absolute" : "hidden"} flex flex-wrap px-4 pt-3 pb-7 gap-2  top-[110px] left-0 right-0 w-full h-30 bg-gray-800 text-sm text-gray-100`}>
        <li id={styles.otherLinksContent}>{storeLinks.case_fans}</li>
        <li id={styles.otherLinksContent}>{storeLinks.cpu_cooler_air}</li>
        <li id={styles.otherLinksContent}>{storeLinks.cpu_cooler_aio}</li>
        <li id={styles.otherLinksContent}>{storeLinks.cable}</li>
        <li id={styles.otherLinksContent}>{storeLinks.networking}</li>
        <li id={styles.otherLinksContent}>{storeLinks.keyboard}</li>
        <li id={styles.otherLinksContent}>{storeLinks.mouse}</li>
        <li id={styles.otherLinksContent}>{storeLinks.mouse_pad}</li>
        <li id={styles.otherLinksContent}>{storeLinks.headset}</li>
        <li id={styles.otherLinksContent}>{storeLinks.audio}</li>
        <li id={styles.otherLinksContent}>{storeLinks.monitor}</li>
        <li id={styles.otherLinksContent}>{storeLinks.monitor_arm}</li>
      </ul>
    </div>
  )
};

export default CollapsibleLinkContents;