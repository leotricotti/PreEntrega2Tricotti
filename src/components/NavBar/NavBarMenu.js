import { MenuItems } from "./MenuItems";
import styles from "./NavBar.module.css";

export function NavBarDesktop() {
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navItem}>
        {MenuItems.map((item) => {
          return (
            <li key={item.title} className={styles.navList}>
              <a href={item.url} className={styles.navLink}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
