import * as React from "react"
import "./ProductCard.css"
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const {product} = props;
  const {productId} = props;
  const {quantity} = props;
  const {handleAddItemToCart} = props;
  const {handleRemoveItemToCart} = props;
  const showDescription = props.showDescription;
    return (
      <div className="productCard">
        <Link to={`/products/${props.idx}`}> <img className="media" src={props.pic} alt="" width={300} height={300}/> </Link>  

        <div className="card-descrip">
          <div className="product-text">
            <h3 className="name">{props.name}</h3>
            <h4>{ratingToStars(5)}</h4>
            <h5 className="price">${props.price.toFixed(2)}</h5>
          </div>

          <div className = "product-buttons">
              <button className="add" onClick={() => handleAddItemToCart(props.idx)}>+</button>
              <button className="remove" onClick={() => handleRemoveItemToCart(props.idx)}>-</button>
          </div>
        </div>
      </div>
    )
}



function ratingToStars(rating) {
  if (rating === null || rating == 0) {
      return "⭐";

  }
  let result = ""
  let stars = Math.ceil(rating)
  for (let i = 0; i < stars; i++) {
      result += "⭐";

  }
  return result;
}