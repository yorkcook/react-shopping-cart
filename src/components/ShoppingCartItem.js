import React, { useContext } from "react";

import { RemoveContext } from "../contexts/RemoveContext";

const Item = props => {
  const { removeItem } = useContext(RemoveContext);
  return (
    <div className="shopping-cart_item">
      <img src={props.image} alt={`${props.title} book`} />

      <div>
        <h1>{props.title}</h1>
        <p>$ {props.price}</p>
        <button onClick={() => removeItem(props.id)}>Remove from cart</button>
      </div>
    </div>
  );
};

export default Item;
