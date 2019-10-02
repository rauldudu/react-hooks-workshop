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

    // TODO
  });

  it("should add the item to the list", () => {
    const { getItems, getActions } = renderComponent();

    act(() => {
      // TODO
    });

    // TODO
  });

  it("should remove the item from the list", () => {
    const { getItems, getActions } = renderComponent();

    act(() => {
      // TODO
    });

    // TODO
  });

  it("should reset the list", () => {
    const { getItems, getActions } = renderComponent();

    act(() => {
      // TODO
    });

    // TODO
  });
});
