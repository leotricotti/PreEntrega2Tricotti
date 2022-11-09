import { useState } from "react";
import logo from "../../assets/images/logo/converse.webp";
import styles from "./NavBar.module.css";
import { CartWidget } from "../Widgets/CartWidget";
import { NavToggle } from "../Widgets/NavToggle";
import { NavBarDesktop } from "./NavBarMenu";
import { NavLink } from "react-router-dom";


export function NavBar() {
  const [toggle, setToggle] = useState(false);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navToggle}>
        <NavToggle action={() => setToggle(!toggle)} />
      </div>
      <div className={styles.navRight}>
        <div className={styles.logoContainer}>
          <NavLink to="/">
            <img src={logo} alt="Logo" className={styles.headerLogo} />
          </NavLink>
        </div>
        {toggle && (
          <div className={styles.navMobile}>
            <NavBarDesktop />
          </div>
        )}
      </div>
      <div className={styles.navDesktop}>
        <NavBarDesktop />
      </div>
      <div>
        <NavLink to="/cart" className={styles.cart}>
          <p>Cart</p>
          <CartWidget />
        </NavLink>
      </div>
    </header>
  );
}
