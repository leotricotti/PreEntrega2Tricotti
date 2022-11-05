import { useState, useEffect } from "react";
import { getProducts } from "../../assets/data/products";
import { ItemList } from "./ItemList";
import styles from "./itemListContainer.module.css";
import { Filter } from "../Filter/Filters";
import { FilterImg } from "../Filter/FilterImg";

export const Card = () => {
  const [productsList, setProductList] = useState([]);

  useEffect(() => {
    getProducts().then((res) => setProductList(res));
  }, []);

  return (
    <>
      <FilterImg />
      <div className={styles.filterMobile}>
        <Filter />
      </div>
      <div className={styles.gridContainer}>
      <div className={styles.filterDesktop}>
        <Filter />
      </div>
        <ItemList productsList={productsList} />
      </div>
    </>
  );
};
