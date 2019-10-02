import React from "react";
import { CartContext } from "../contexts/Cart";

export default function useTotal() {
  const { items } = React.useContext(CartContext);
  const total = items.reduce((prev, next) => prev + next.price, 0);
  return total;
}
