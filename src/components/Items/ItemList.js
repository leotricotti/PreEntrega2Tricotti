import { Item } from "./Item";

export const ItemList = ({ productsList }) => {
  return (
    <>
      {productsList.map((product, key) => {
        return <Item product = {product} key={key}/>;
      })}
    </>
  );
};
