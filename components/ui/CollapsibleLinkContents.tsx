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
        className={`${isOpen ? "absolute" : "hidden"} flex flex-wrap px-4 pt-3 pb-7 gap-2  top-27.5 left-0 right-0 w-full h-30 bg-gray-800 text-sm text-gray-100`}>
        <li id={styles.otherLinksContent} onClick={handleClose}>{storeLinks.case_fans}</li>
        <li id={styles.otherLinksContent} onClick={handleClose}>{storeLinks.cpu_cooler_air}</li>
        <li id={styles.otherLinksContent} onClick={handleClose}>{storeLinks.cpu_cooler_aio}</li>
        <li id={styles.otherLinksContent} onClick={handleClose}>{storeLinks.cable}</li>
        <li id={styles.otherLinksContent} onClick={handleClose}>{storeLinks.networking}</li>
        <li id={styles.otherLinksContent} onClick={handleClose}>{storeLinks.keyboard}</li>
        <li id={styles.otherLinksContent} onClick={handleClose}>{storeLinks.mouse}</li>
        <li id={styles.otherLinksContent} onClick={handleClose}>{storeLinks.mouse_pad}</li>
        <li id={styles.otherLinksContent} onClick={handleClose}>{storeLinks.headset}</li>
        <li id={styles.otherLinksContent} onClick={handleClose}>{storeLinks.audio}</li>
        <li id={styles.otherLinksContent} onClick={handleClose}>{storeLinks.monitor}</li>
        <li id={styles.otherLinksContent} onClick={handleClose}>{storeLinks.monitor_arm}</li>
      </ul>
    </div>
  )
};

export default CollapsibleLinkContents;