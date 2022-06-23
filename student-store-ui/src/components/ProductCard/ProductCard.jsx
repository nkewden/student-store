import * as React from "react"
import "./ProductCard.css"
import { Link } from "react-router-dom";

export default function ProductCard(props) {
    return (
      <div className="productCard">
        <Link to={`/products/${props.idx}`}> <img className="media" src={props.pic} alt="" /> </Link>  
        <h3 className="name">{props.name}</h3>
        <h4>{ratingToStars(5)}</h4>
        <h5 className="price">${props.price.toFixed(2)}</h5>
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