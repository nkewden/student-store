import React from "react";
import "./ShoppingCart.css";
import {
  BsFillArrowRightCircleFill,
  BsFillCartPlusFill,
  BsFillArrowLeftCircleFill,
  BsFillInfoCircleFill,
} from "react-icons/bs";
import { MdPayment } from "react-icons/md";

export default function ShoppingCart(props) {

let arrayObjects = [{}];

function getItem (event) {
  let object = {};
  props.products.map((e) => {
    if (e) {
      if (e.itemId === event) {
        object == e;
    } 
    return object
  }
  })
}

  return (
    <div className="shoppingcart">
      <div className={props.isOpen ? "open" : "hidden"}>
        <div className="name">
          <h2>Name</h2>
          {arrayObjects.map((event) => {
            let object = getItem(event.itemId);
            return <h4 className="product-name">{event.name}</h4>
          })}
        </div>
          
        <div className="quantity">
          <h2>Quantity</h2>
            {arrayObjects.map((event) => {
              let object = getItem(event.itemId);
              return <h4 className="product-quantity">{event.quantity}</h4>
            })}
        </div>

        <div className="price">
          <h2>Price</h2>
              {arrayObjects.map((event) => {
                let object = getItem(event.itemId);
                return <h4 className="product-price">{event.price}</h4>
              })}
        </div>
      </div>
    </div>
  );
}
