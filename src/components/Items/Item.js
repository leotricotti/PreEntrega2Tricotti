import { useNavigate } from "react-router-dom";
import styles from "./item.module.css";

export const Item = ({ product }) => {
  const { id, img, title } = product;
  const navigate = useNavigate();
  const handleDetail = () => {
      navigate(`/detail/${id}`, { state: product });
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img src={img} alt={title} />
        <div onClick={handleDetail} className={styles.cardBtn}>
          <a href={navigate}>Ver más</a>
        </div>
      </div>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};
  