import { storeLinks } from "../constant/storeLinks";
import styles from "./links.module.css"
const OtherLinksContent = () => {
  return (
    <div>
     <ul className="flex flex-wrap gap-2 px-5 py-3 ">
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

export default OtherLinksContent;
