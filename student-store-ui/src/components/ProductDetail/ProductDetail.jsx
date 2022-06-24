import * as React from "react"
import "./ProductDetail.css"
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import NotFound from "../NotFound/NotFound";
import ProductView from "../ProductView/ProductView"

export default function ProductDetail(props) {
  const productId = useParams();
 
  const {handleAddItemToCart} = props;
  const {handleRemoveItemToCart} = props;

  const {products} = props;
  const [product, setProduct]=useState();
  const [isLoading, setIsLoading] = useState(false);
  

  useEffect(()=>{
    const fetchProductId = async() => {
      setIsLoading(true);
      await axios.get(`https://codepath-store-api.herokuapp.com/store/${productId.productsId}`)
        .then((res) => {
          setProduct(res.data.product)
          
        }).catch((error)=>{
          setProduct(null);
        })
    }
    fetchProductId();
    setIsLoading(false);
  },[])
  return (
    <div className="product-detail">
      {isLoading == true && <h1 className="loading">Loading...</h1>}
      {product ? <ProductView product={product} productId={productId.productsId} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart}/>:<NotFound/>}
    </div>
  )
}