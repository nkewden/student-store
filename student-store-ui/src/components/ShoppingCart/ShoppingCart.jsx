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
  let subtotal = 0;
  let total = 0;

  props.shoppingCart.map((e) => {
    if (e.quantity > 0) {
      arrayObjects.push(e)
    }
  
  })
console.log(props.shoppingCart)

  function getItem(event) {
    let object = {};
    props.products.map((e) => {
        if (e.id === event) {
          object = e;
      }
    });
    return object;
  }

  let count = 0;

  props.shoppingCart.map((e) => {
    if (e.quantity != 0) {
      count++;
    }
  });

  if (count == 0) {
    return (<div></div>)
  }

props.shoppingCart.map((e) => {
  if (e.quantity != 0) {
    let item = getItem(e.itemId)
    subtotal += item.price * e.quantity 

  }

})

total = (subtotal * .0875) + subtotal

console.log(13, total)


  return (
    <div className="shoppingcart">
      <div className="open">
        <div className="name">
          <h2>Name</h2>
          {arrayObjects.map((event, idx) => {
            let product = getItem(event.itemId);
            return <h4 className="product-name">{product.name}</h4>
          })}
        </div>
          
        <div className="quantity">
          <h2>Quantity</h2>
            {arrayObjects.map((event, idx) => {
              let product = getItem(event.itemId);
              return <h4 className="product-quantity">{event.quantity}</h4>
            })}
        </div>

        <div className="price">
          <h2>Price</h2>
          {arrayObjects.map((event, idx) => {
            let product = getItem(event.itemId);
            return <h4 className="product-price">{product.price}</h4>;
          })}
        </div>
      </div>
      <div className="total">
        <div>
          <h3>Subtotal</h3>
            <h3>{subtotal.toFixed(2)}</h3>
        </div>
        <div>
        <h3>Total</h3>
            <h3>{total.toFixed(2)}</h3>
        </div>
        </div>
    </div>
  );
}
