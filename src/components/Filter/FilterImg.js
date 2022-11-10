import img from "../../assets/images/banner/todo.webp";
import styles from "./filter.module.css";

export const FilterImg = () => {
  return (
    <div className={styles.bannerImg}>
      <img src={img} alt="calzado mujeres" />
    </div>
  );
};
