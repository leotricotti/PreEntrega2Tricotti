import React, { useState } from "react";
import img from "../../assets/images/mujer/calzado/banner/0047b494219b8af236da089e2c86.jpg";
import styles from "./filter.module.css";
import { PlusSign } from "../Widgets/PlusSign";
import { FilterMd } from "./FilterMd";

export const Filter = () => {
  const [toggleFilter, setToggleFilter] = useState(false);

  return (
    <>
      <div className={styles.bannerImg}>
        <img src={img} alt="calzado mujeres" />
      </div>
      <div className={styles.filtersConatiner}>
        <ul>
          <div className={styles.filterBtn}>
            <span>Filtros</span>
            <div className={styles.plusSign}>
              <PlusSign action={() => setToggleFilter(!toggleFilter)} />
            </div>
          </div>
          {toggleFilter && (
            <div className={styles.filterToggle}>
              <FilterMd />
            </div>
          )}
          <div className={styles.filterMd}>
            <FilterMd />
          </div>
        </ul>
      </div>
    </>
  );
};
