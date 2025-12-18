"use client";
import styles from "./navBtn.module.css";
import {useState} from "react";
import {storeLinksList} from "@/components/constant/storeLinks";
import Link from "next/link";


const BurgerBtn = () => {
  const [checked, setChecked] = useState<boolean>(false);
  
  const handleChecked = () => {
    setChecked(!checked);
  };
  
  const overlayClick = () => {
    handleChecked();
  };
  
  
  return (
    <div>
      <div
        className={`${checked ? "fixed" : "hidden"} absolute top-0 left-0 right-0 bottom-0 w-full h-full p-0 m-0 backdrop-blur-[2px] bg-gray-800/50`}
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
        className={`absolute flex top-12 right-0 min-w-[30%] w-48 bg-gray-800 rounded-lg border border-gray-200/50 mr-1 sm:mr-2 shadow-xl text-sm/6 text=[#e2e4e8] ${
          checked ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col px-4 py-3">
          {storeLinksList.map((link) => (
            <Link
              key={link.label}
              href={link.route}
              onClick={overlayClick}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default BurgerBtn;