import * as React from "react"
import "./ProductDetail.css"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import ProductView from "../ProductView/ProductView";
import axios from "axios"

export default function ProductDetail(props) {
  //states
  const [product, setProduct] = React.useState({});
  const {productId} = useParams();


  //Get request with axios to the (`/store/:productId`) API with the use of the useEffect function
  useEffect(() => {
    axios.get(`https://codepath-store-api.herokuapp.com/store/${productId}`).then(response => {
        setProduct(response.data.product)
    }).catch(error => {
        setProduct(null)
    })
}, [])
  
  return (
    <div className="product-detail">
      <ProductView product = {product} />
    </div>
  )
}
