"use client";
import SideNavbar from "@/components/sections/navbar/SideNavbar";
import styles from "./burgerbtn.module.css";
import { useState } from "react";

const BurgerBtn = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChecked = () => {
    setChecked(!checked);
  };

  console.log("Is checked: ", checked);

  return (
    <>
      <label htmlFor="hamburger-menu" className={styles.hamburgerMenu}>
        <input type="checkbox" id="hamburger-menu" onClick={handleChecked} />
      </label>
      <SideNavbar isActive={checked} />
    </>
  );
};

export default BurgerBtn;
