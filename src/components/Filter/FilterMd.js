import styles from "./filter.module.css";
import { MenuFilter } from "./MenuFilter";

export const FilterMd = () => {
  return (
    <>
      <ul>
        {MenuFilter.map((filter) => {
          return (
            <div key={filter.id}>
              <form action="" className={styles.mapFilterMenu}>
                <li className={styles.subMenuItemUno}>
                  <label className={styles.subMenuLabel}>
                    <input type="radio" name="item" />
                    <span className={styles.subMenuText}>{filter.item}</span>
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
