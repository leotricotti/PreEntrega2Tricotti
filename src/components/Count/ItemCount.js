import React, { useState } from "react";
import { MinusSign } from "../Widgets/MinusSign";
import { PlusSign } from "../Widgets/PlusSign";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'
import styles from "./ItemCount.module.css";

export const ItemCount = ({ stock, initial }) => {
  
  const MySwal = withReactContent(Swal);
  
  let [count, setCount] = useState(initial);

  //función para sumar y modificar setCount
  const plusItem = () => {
    setCount(count += 1);
    if(count > stock) {
      MySwal.fire({
        position: 'center',
        icon: 'error',
        title: 'Stock insuficiente',
        showConfirmButton: false,
        timer: 1700
      });
      setCount(count = 0);
    }
  }

  //función para restar y modificar setCount
  const minusItem = () => {
    setCount(count -= 1);
    if(count <= 0) {
      MySwal.fire({
        position: 'center',
        icon: 'error',
        title: 'Opción inválida',
        showConfirmButton: false,
        timer: 1700
      });
      setCount(count = 0);
    }
  }

  //funcion que confirma al usuario la operacion
  const confirmAdd = () => {
    if(count <= 0) {
      MySwal.fire({
        position: 'center',
        icon: 'error',
        title: 'Opción inválida',
        showConfirmButton: false,
        timer: 1700
      });
    } else {
      MySwal.fire({
        position: 'center',
        icon: 'success',
        title: 'Producto agregado con exito',
        showConfirmButton: false,
        timer: 1700
      });
    }
  }

  return (
    <>
      <div className={styles.counter}>
        <div className={styles.addCuant}>
          <div className={styles.plusSign} onClick={plusItem}>
            <PlusSign />
          </div>
          <span className={styles.number}>{count}</span>
          <div className={styles.minusSign} onClick={minusItem}>
            <MinusSign />
        </div>
        </div>
        <div className={styles.addToCart} onClick={confirmAdd}>
          <p>Agregar al carrito</p>
        </div>
      </div>
    </>
  );
};
