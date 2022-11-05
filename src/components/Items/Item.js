import styles from "./item.module.css";

export const Item = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img src={product.img} alt={product.title} />
        <a href="/" className={styles.cardBtn}>Ver más</a>
      </div>
      <h3 className={styles.title}>{product.title}</h3>
    </div>
  );
};
