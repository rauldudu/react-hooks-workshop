import React from "react";

export const CartContext = React.createContext();

export function CartProvider({ children }) {
  const [items, setItems] = React.useState([]);
  const actions = {
    addItem: item => {
      setItems(prev => [...prev, { ...item }]);
    },
    deleteItem: id => {
      setItems(prev => prev.filter(item => item.id !== id));
    },
    reset: id => {
      setItems([]);
    }
  };

  return (
    <CartContext.Provider value={{ items, actions }}>
      {children}
    </CartContext.Provider>
  );
}
