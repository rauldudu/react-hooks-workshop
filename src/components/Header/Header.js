import React from "react";
import useTotal from "../../helpers/useTotal";
import { CartContext } from "../../contexts/Cart";
import { Link } from "react-router-dom";

import "./Header.scss";

export default function Header() {
  const { items } = React.useContext(CartContext);
  const itemsCount = items.length;
  const total = useTotal();

  return (
    <header className="header">
      <Link to="/">
        <h1>My Store</h1>
      </Link>
      <div>
        <Link to="/checkout">
          {itemsCount} {itemsCount === 1 ? "Item" : "Items"}
        </Link>
        &nbsp; (${total})
      </div>
    </header>
  );
}
