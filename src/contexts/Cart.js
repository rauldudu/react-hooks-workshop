import React from "react";

export const CartContext = React.createContext();

function reducer(state = [], action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload.item];
    case "delete":
      return state.filter(item => item.id !== action.payload.id);
    case "reset":
      return [];
    default:
      throw Error("Invalid action");
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = React.useReducer(reducer, []);

  const actions = {
    addItem: item => {
      dispatch({ type: "add", payload: { item } });
    },
    deleteItem: id => {
      dispatch({ type: "delete", payload: { id } });
    },
    reset: () => {
      dispatch({ type: "reset" });
    }
  };

  return (
    <CartContext.Provider value={{ items, actions }}>
      {children}
    </CartContext.Provider>
  );
}
