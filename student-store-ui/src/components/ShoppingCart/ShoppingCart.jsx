import React from "react";
import "./ShoppingCart.css";
import {
  BsFillArrowRightCircleFill,
  BsFillCartPlusFill,
  BsFillArrowLeftCircleFill,
  BsFillInfoCircleFill,
} from "react-icons/bs";
import { MdPayment } from "react-icons/md";

export default function ShoppingCart() {
  return (
    <div className="shoppingcart">
      <span>
        <b>Shopping Cart</b>
        <BsFillCartPlusFill />
      </span>
      <div className="table">
        <table></table>
      </div>
      <div className="nvoice">
        <tr>
          <td>Subtotal </td>
          <td></td>
        </tr>
        <tr>
          <td>Taxes</td>
          <td></td>
        </tr>
        <hr></hr>
        <tr>
          <td>Total Amount</td>
          <td></td>
        </tr>
      </div>
      <span>
        <b>Payment Info</b>
        <MdPayment />
      </span>
      <div className="payment">
        <form className="payment-form">
          <label>Name</label>
          <input type="text" placeholder="Your Name"></input>
          <label>Email</label>
          <input type="text" placeholder="Student@Codepath.org"></input>
          {/* <i>I agree to the terms and services</i> */}
          <button type="submit">Check Out</button>
        </form>
      </div>
      <span>
        <b>Checkout Info</b>
        <BsFillInfoCircleFill />
      </span>
      <i>
        {/* A confirmation email will be sent to you so that you can confirm this
        order. Once you have confirmed the order, it will be delivered to your
        dorm room. */}
      </i>
    </div>
  );
}
