import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { CartContext, CartProvider } from "./Cart";

export function renderComponent() {
  function Wrapper({ children }) {
    return <CartProvider>{children}</CartProvider>;
  }

  const renderResult = renderHook(() => React.useContext(CartContext), {
    wrapper: Wrapper
  });

  return {
    ...renderResult,
    getItems: () => renderResult.result.current.items,
    getActions: () => renderResult.result.current.actions
  };
}

describe("Cart", () => {
  it("should initialize with an empty list", () => {
    const { getItems } = renderComponent();

    expect(getItems()).toEqual([]);
  });

  it("should add the item to the list", () => {
    const { getItems, getActions } = renderComponent();

    act(() => {
      getActions().addItem({ id: 1 });
    });

    expect(getItems()).toEqual([{ id: 1 }]);
  });

  it("should remove the item from the list", () => {
    const { getItems, getActions } = renderComponent();

    act(() => {
      getActions().addItem({ id: 1 });
      getActions().addItem({ id: 2 });
      getActions().deleteItem(1);
    });

    expect(getItems()).toEqual([{ id: 2 }]);
  });

  it("should reset the list", () => {
    const { getItems, getActions } = renderComponent();

    act(() => {
      getActions().addItem({ id: 1 });
      getActions().addItem({ id: 2 });
      getActions().reset();
    });

    expect(getItems()).toEqual([]);
  });
});
