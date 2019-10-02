import React from "react";
import makeTrashable from "trashable";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import fetchProducts from "../../api/fetchProducts";
import useTracker from "../../helpers/useTracker";

import "./ProductList.scss";

export default function ProductList() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [products, setProducts] = React.useState([]);

  useTracker('ProductList');

  React.useEffect(function() {
    const promise = makeTrashable(fetchProducts());
    promise.then(res => {
      setIsLoading(false);
      setProducts(res);
    });

    return () => {
      promise.trash();
    };
  }, []);

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
