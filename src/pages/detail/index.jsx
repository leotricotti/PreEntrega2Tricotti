import { useLocation } from "react-router-dom";
import styles from "./styles.module.css";

export const Detail = () => {
  const state = useLocation();
  const {img, title, price, desc} = state.state;

  return (
    <div>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <span>{price}</span>
      <p>{desc}</p>
    </div>
  );
};
