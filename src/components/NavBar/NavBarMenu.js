import { NavLink } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import styles from "./NavBar.module.css";

export function NavBarDesktop({ close }) {
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navItem}>
        {MenuItems.map((item) => {
          return (
            <li key={item.title} className={styles.navList}>
              <NavLink onClick={close} to={item.url} className={styles.navLink}>
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
