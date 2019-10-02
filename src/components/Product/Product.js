import React from "react";
import makeTrashable from "trashable";
import Spinner from "../Spinner/Spinner";
import { CartContext } from "../../contexts/Cart";
import useTracker from "../../helpers/useTracker";
import fetchProduct from "../../api/fetchProduct";

import "./Product.scss";

export default function Product({ id }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [product, setProduct] = React.useState([]);
  const { actions } = React.useContext(CartContext);

  useTracker('Product');

  React.useEffect(
    function() {
      const promise = makeTrashable(fetchProduct(id));
      promise.then(res => {
        setIsLoading(false);
        setProduct(res);
      });

      return () => {
        promise.trash();
      };
    },
    [id]
  );

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
          actions.addItem(product);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
