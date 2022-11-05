import React, { useState } from "react";
import styles from "./filter.module.css";
import { PlusSign } from "../Widgets/PlusSign";
import { MenuFilter } from "./MenuFilter";

export const FilterMd = () => {

  return (
    <>
      <ul>
        {MenuFilter.map((filter) => {
          return (
            <div key={filter.id}>
              <div className={styles.subMenu}>
                <h3 className={styles.title}>{filter.gender}</h3>
                <div className={styles.filterPlus}>
                  <PlusSign />
                </div>
              </div>
              <form action="" className={styles.mapFilterMenu}>
                <li className={styles.subMenuItemUno}>
                  <label className={styles.subMenuLabel}>
                    <input type="radio" name="item" />
                    <span className={styles.subMenuText}>{filter.item1}</span>
                  </label>
                </li>
                <li className={styles.subMenuItemDos}>
                  <label className={styles.subMenuLabel}>
                    <input type="radio" name="item" />
                    <span className={styles.subMenuText}>{filter.item2}</span>
                  </label>
                </li>
                <li className={styles.subMenuItemTres}>
                  <label className={styles.subMenuLabel}>
                    <input type="radio" name="item" />
                    <span className={styles.subMenuText}>{filter.item3}</span>
                  </label>
                </li>
              </form>
            </div>
          );
        })}
      </ul>
    </>
  );
};
