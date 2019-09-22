import React from "react";
import makeTrashable from "trashable";
import Spinner from "../Spinner/Spinner";
import { CartContext } from "../../contexts/Cart";
import useTracker from "../../helpers/useTracker";
import fetchProduct from "../../api/fetchProduct";

import "./Product.scss";

export default function Product({ id }) {
  // TODO
  const isLoading = true;
  const product = null;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="product">
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <button
        onClick={() => {
          // TODO
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
