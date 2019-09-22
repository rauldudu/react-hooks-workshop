import React from "react";

export const CartContext = React.createContext();

export function CartProvider({ children }) {
  // TODO
  // const items = [];
  // const actions = {};

  const [items, setItems] = React.useState([]);
  const actions = {
    addItem: function(item) {
      setItems(prev => {
        return [...prev, { ...item }];
      });

      console.log(items);
    }
  };

  return (
    <CartContext.Provider value={{ items, actions }}>
      {children}
    </CartContext.Provider>
  );
}
