"use client";
import styles from "./navBtn.module.css";
import {useState} from "react";
import {storeLinks} from "@/components/constant/storeLinks";


const BurgerBtn = () => {
  const [checked, setChecked] = useState<boolean>(false);
  
  const handleChecked = () => {
    setChecked(!checked);
  };
  
  const overlayClick = () => {
    handleChecked();
  }
  
  
  return (
    <div>
      <div
        className={`${checked ? "fixed" : "hidden"} absolute top-0 left-0 right-0 w-full h-screen p-0 m-0 backdrop-blur-[2px] bg-gray-800/50`}
        onClick={overlayClick}/>
      <label
        htmlFor="hamburger-menu"
        id={styles.hamburgerMenu}
        className="shadow-lg"
      >
        <input type="checkbox" id="hamburger-menu"
               checked={checked}
               onChange={handleChecked}
        />
      </label>
      <nav
        className={`absolute flex top-12 right-0 min-w-[40%] w-48 bg-gray-800 rounded-lg border border-gray-200/50 mr-1 sm:mr-2 shadow-xl text-sm ${
          checked ? "block" : "hidden"
        }`}
      >
        <ul className={styles.sideNavBarStyle}>
          <li onClick={overlayClick} className="hover:underline ">{storeLinks.motherboard}</li>
          <li onClick={overlayClick}>{storeLinks.processor}</li>
          <li onClick={overlayClick}>{storeLinks.memory}</li>
          <li onClick={overlayClick}>{storeLinks.storage}</li>
          <li onClick={overlayClick}>{storeLinks.gpu}</li>
          <li onClick={overlayClick}>{storeLinks.psu}</li>
          <li onClick={overlayClick}>{storeLinks.computer_case}</li>
          <li onClick={overlayClick}>{storeLinks.case_fans}</li>
          <li onClick={overlayClick}>{storeLinks.cpu_cooler_air}</li>
          <li onClick={overlayClick}>{storeLinks.cpu_cooler_aio}</li>
          <li onClick={overlayClick}>{storeLinks.cable}</li>
          <li onClick={overlayClick}>{storeLinks.networking}</li>
          <li onClick={overlayClick}>{storeLinks.keyboard}</li>
          <li onClick={overlayClick}>{storeLinks.mouse}</li>
          <li onClick={overlayClick}>{storeLinks.mouse_pad}</li>
          <li onClick={overlayClick}>{storeLinks.headset}</li>
          <li onClick={overlayClick}>{storeLinks.audio}</li>
          <li onClick={overlayClick}>{storeLinks.monitor}</li>
          <li onClick={overlayClick}>{storeLinks.monitor_arm}</li>
        </ul>
      </nav>
    </div>
  );
};

export default BurgerBtn;