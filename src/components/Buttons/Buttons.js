import styles from "./Btn.module.css";

export function HeroBtn({ link }) {
  return (
    <a href={link} className={styles.heroBtn}>
      ver más
    </a>
  );
}
