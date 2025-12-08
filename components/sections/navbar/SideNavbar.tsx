import styles from "./nav.module.css";

const SideNavbar = ({ isActive }: { isActive: boolean }) => {
  console.log("is it active?:", isActive);
  return (
    <aside>
      <nav
        className={`absolute top-12 right-0 max-w-max px-2 ${
          isActive ? "block" : "hidden"
        }`}
      >
        <ul className={styles.sideNavLinks}>
          <li>option 1</li>
          <li>option 1</li>
          <li>option 1</li>
          <li>option 1</li>
          <li>option 1</li>
          <li>option 1</li>
          <li>option 1</li>
          <li>option 1</li>
          <li>option 1</li>
          <li>option 1</li>
          <li>option 1</li>
          <li>option 1</li>
          <li>option 1</li>
          <li>option 1</li>
          <li>option 1</li>
          <li>option 1</li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideNavbar;
