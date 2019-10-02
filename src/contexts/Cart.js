import React from "react";

export const CartContext = React.createContext();

export function CartProvider({ children }) {
  const [items, setItems] = React.useState([]);
  const actions = {
    addItem: function(item) {
      setItems(prev => {
        return [...prev, { ...item }];
      });
    }
  };

  return (
    <CartContext.Provider value={{ items, actions }}>
      {children}
    </CartContext.Provider>
  );
}
