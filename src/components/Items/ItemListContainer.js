import { useState, useEffect } from "react";
import { getProducts } from "../../assets/data/products";
import { ItemList } from "./ItemList";
import styles from "./itemListContainer.module.css";
import { Filter } from "../Filter/Filters";
import { FilterImg } from "../Filter/FilterImg";

export const Card =  ({categoryId})  => {
  const [productsList, setProductList] = useState([]);

  useEffect(() => {
    if(categoryId){
      getProducts().then((res) => setProductList(res.filter((item)=> item.category === categoryId)))
    }else{
      getProducts().then((res) => setProductList(res));
    }
  }, [categoryId]);

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
