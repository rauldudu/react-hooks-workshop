import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ProductList } from "./ProductList";

const props = {
  isLoading: false,
  error: null,
  products: [
    {
      id: 1,
      title: "Men's Belt"
    },
    {
      id: 2,
      title: "JETech Case for Apple iPhone"
    },
    {
      id: 3,
      title: "iRobot Roomba 690 Robot"
    },
    {
      id: 4,
      title: "Fire TV Stick with Alexa Voice Remote"
    },
    {
      id: 5,
      title: "Stainless Steel Digital Kitchen Scale"
    }
  ],
  history: {
    push: action("go to product")
  },
  fetchProducts: action("fetch products")
};

storiesOf("ProductList", module).add("Details", () => (
  <ProductList {...props} />
));

storiesOf("ProductList", module).add("No products", () => (
  <ProductList {...props} products={[]} />
));

storiesOf("ProductList", module).add("Loading", () => (
  <ProductList {...props} isLoading products={null} />
));
