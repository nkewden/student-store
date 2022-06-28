import * as React from "react"
import "./CheckoutForm.css"

export default function CheckoutForm(props) {
  return (
    <div className="CheckoutForm">
      <div className='payment'>
        <form className='payment-form'>
          <div className="name-placeholder">
          <label>Name</label>
          <input type="name" name = "name" value = {props.checkoutForm.name} onChange = {props.handleOnCheckoutFormChange} placeholder="Enter your name..."></input>
          </div>
          <div  className="email-placeholder">
          <label>Email</label>
          <input type="email" name = "email" value = {props.checkoutForm.email} onChange = {props.handleOnCheckoutFormChange} placeholder="student@codepath.org"></input>
          </div>
          <i>I agree to the terms and services</i>
        </form>
        <button onClick={props.handleOnSubmitCheckoutForm}>Check Out</button>
      </div>
    </div>
  )
}