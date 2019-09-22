import React from "react";
import { CartContext } from "../../contexts/Cart";
import useTracker from "../../helpers/useTracker";
import useTotal from "../../helpers/useTotal";

import "./Checkout.scss";

export default function Checkout() {
  // TODO
  const items = [];
  const total = 0;

  return (
    <div className="checkout">
      <h2>Your items</h2>
      {items.length === 0 ? (
        <h4>Your cart is empty!</h4>
      ) : (
        <React.Fragment>
          <table>
            <tbody>
              <tr>
                <th>Product</th>
                <th>Price</th>
              </tr>
              {items.map(item => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                </tr>
              ))}
              <tr className="checkout__total" key="total">
                <td></td>
                <td>${total}</td>
              </tr>
            </tbody>
          </table>
          <button>Checkout</button>
        </React.Fragment>
      )}
    </div>
  );
}
