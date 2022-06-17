import * as React from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ProductDetails(props) {
  const [currentProduct, setCurrentProduct] = useState(null);
  const productId = useParams();

  return (
    <div className="product-detail">
      <p>ProductDetails</p>
    </div>
  );
}
