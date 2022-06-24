import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"
import { useState, useEffect } from "react";

export default function ProductGrid(props) {

//state variables
const [searchedActive, setSearchedActive] = useState(false);
const [searchInput, setSearchInput] = useState("");
const [filteredData, setFilteredData] = useState([]);
const [filteredCategory, setFilteredCategory] = useState([]);
const [filterActive, setFilterActive] = useState(false);

//prop variables
const {products} = props;
const {handleAddItemToCart} = props;
const {handleRemoveItemToCart} = props;  
//const {searched} = props;

useEffect(()=>{
    setFilteredCategory(products);
}, []);
//handle for category


const getFilteredItems = (searchInput, products) => {
    if (!searchInput){
        return products;
    }
    const data = products.filter((product) => product.name.toLowerCase().includes(searchInput.toLowerCase()));
    setFilteredData(data);
    // setSearched(true);
    return filteredData;
}

const returnProducts = () => {
    if (searchedActive === false) {
        return(props.products.map((product, i) => { 
            return (<ProductCard className="productCard" key={i} name={product.name} idx={product.id}
            price={product.price} pic={product.image} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemToCart={props.handleRemoveItemToCart}/> )
        }))
    }else if (searchedActive === true){
        return(filteredData.map((product, i) => { 
            return (<ProductCard className="productCard" key={i} name={product.name} idx={product.id}
            price={product.price} pic={product.image} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemToCart={props.handleRemoveItemToCart}/> )
        }))
    }
}
  
console.log(props.categoryArr)


if (props.categoryArr.length > 0){
        return(props.categoryArr.map((product, i) => { 
            return (<ProductCard className="productCard" key={i} name={product.name} idx={product.id}
            price={product.price} pic={product.image} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemToCart={props.handleRemoveItemToCart}/> )
        }))
} else {

    return (
      <div className="productGrid" id="buy">
        <div className="content"><h1>Best Selling Products</h1>
            <div className="grid" >
                {returnProducts()}
            </div>
        </div>
      </div>
    )
}
}
