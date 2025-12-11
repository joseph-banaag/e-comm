"use client";
import SideNavbar from "@/components/sections/navbar/SideNavbar";
import styles from "./navBtn.module.css";
import {useState} from "react";

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
        className={`${checked ? "block" : "hidden"} absolute top-0 left-0 right-0 w-full h-full`}
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
      <SideNavbar isActive={checked}/>
    </div>
  );
};

export default BurgerBtn;