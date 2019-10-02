import React from "react";
import makeTrashable from "trashable";
import Spinner from "../Spinner/Spinner";
import fetchProducts from "../../api/fetchProducts";
import useTracker from "../../helpers/useTracker";

import "./ProductList.scss";

export default function ProductList({ history }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [products, setProducts] = React.useState([]);

  useTracker("ProductList");

  React.useEffect(function() {
    const promise = makeTrashable(fetchProducts());
    promise.then(res => {
      setIsLoading(false);
      setProducts(res);
    });

    return () => promise.trash();
  }, []);

  if (isLoading) {
    return <Spinner data-testid="spinner" />;
  }

  return (
    <div className="product-list">
      <h3>Products</h3>
      {products.length ? (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <a
                href={`/product/${product.id}`}
                onClick={e => {
                  e.preventDefault();
                  history.push(`/product/${product.id}`);
                }}
              >
                {product.title}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <h4>No products!</h4>
      )}
    </div>
  );
}
