import HeroImg from "../../assets/images/hero/hero-desktop.jpg";
import HeroMovil from "../../assets/images/hero/hero-mobile .jpg";
import styles from "./HeroSection.module.css";
import { HeroBtn } from "../Buttons/Buttons";

export function HeroSection() {
  return (
    <div className={styles.flex}>
      <section className={styles.heroContainer}>
        <img src={HeroImg} alt="influencers" className={styles.heroDesktop} />
        <img src={HeroMovil} alt="influencers" className={styles.heroMovil} />
      </section>
      <HeroBtn link={"/products"}/>
    </div>
  );
}
