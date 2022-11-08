import { useLocation } from "react-router-dom";
import { ItemCount } from "../../components/Count/ItemCount";
import styles from "./styles.module.css";

export const Detail = () => {
  const state = useLocation();
  const {img, title, price, desc, stock} = state.state;

  return (
    <div className={styles.detailContainer}>
      <img className={styles.detailImg} src={img} alt={title} />
      <div className={styles.detail}>
        <h1 className={styles.detailTitle} >{title}</h1>
        <p className={styles.detailDescription}>{desc}</p>
        <span className={styles.detailPrice}>$ {price}</span>
        <ItemCount stock={stock} initial={0}/>
      </div>
    </div>
  );
};
