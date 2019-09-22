import React from "react";
import makeTrashable from 'trashable';
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import fetchProducts from "../../api/fetchProducts";
import useTracker from "../../helpers/useTracker";

import "./ProductList.scss";

export default function ProductList() {
  const isLoading = true;
  const products = [];

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="product-list">
      <h3>Products</h3>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
