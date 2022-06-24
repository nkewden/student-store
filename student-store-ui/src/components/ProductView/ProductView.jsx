import * as React from "react"
import "./ProductView.css"

export default function ProductView(props) {

  let price = props.product.price

  return (
    <div className="productView">
      <div className = "product">
            <div className = "productHeading">
                <h2 className = "productTitle">Product #{props.product.id}</h2>
                <img className = "producPoster" src={props.product.image} alt="" />
            </div>
            <div className = "details">
                <h5 className = "productName">{props.product.name}</h5>
                <p className = "productDescription">{props.product.description}</p>
                <p className = "productPrice">Price: ${price}</p>
            </div>
        </div>
    </div>
  )
}