import styles from "./nav.module.css";
import {storeLinks} from "@/components/constant/storeLinks";

const SideNavbar = ({isActive}: { isActive: boolean }) => {
  
  return (
    <nav
      className={`absolute flex top-12 right-0 min-w-[40%] w-48 bg-gray-800 rounded-lg border border-gray-100 mr-px sm:mr-2 shadow-xl text-sm ${
        isActive ? "block" : "hidden"
      }`}
    >
      <ul className={styles.sideNavBarStyle}>
        <li>{storeLinks.motherboard}</li>
        <li>{storeLinks.processor}</li>
        <li>{storeLinks.memory}</li>
        <li>{storeLinks.storage}</li>
        <li>{storeLinks.gpu}</li>
        <li>{storeLinks.psu}</li>
        <li>{storeLinks.computer_case}</li>
        <li>{storeLinks.case_fans}</li>
        <li>{storeLinks.cpu_cooler_air}</li>
        <li>{storeLinks.cpu_cooler_aio}</li>
        <li>{storeLinks.cable}</li>
        <li>{storeLinks.networking}</li>
        <li>{storeLinks.keyboard}</li>
        <li>{storeLinks.mouse}</li>
        <li>{storeLinks.mouse_pad}</li>
        <li>{storeLinks.headset}</li>
        <li>{storeLinks.audio}</li>
        <li>{storeLinks.monitor}</li>
        <li>{storeLinks.monitor_arm}</li>
      </ul>
    </nav>
  );
};

export default SideNavbar;