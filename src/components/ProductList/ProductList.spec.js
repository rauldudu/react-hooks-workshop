/* global renderWithL10n */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import { ProductList } from "./ProductList";

describe("ProductList", () => {
  const products = [
    {
      id: 1,
      title: "iRobot"
    },
    {
      id: 2,
      title: "JETech Case"
    }
  ];

  const history = {
    push: jest.fn()
  };

  it("should show a spinner while loading the products", () => {
    const { getByTestId } = render(<ProductList history={history} />);

    // TODO
  });

  it("should list the items by product title", () => {
    const { getByText } = render(<ProductList history={history} />);

    // TODO
  });

  it("should navigate to the correct url when clicking on the title", () => {
    const { getByText } = render(<ProductList history={history} />);

    // TODO
  });
});
