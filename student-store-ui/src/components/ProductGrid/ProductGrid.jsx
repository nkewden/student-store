import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"
import { useState } from "react";

export default function productGrid(props) {

//state variables
const [searchedActive, setSearchedActive] = useState(false);
const [searchInput, setSearchInput] = useState("");
const [filteredData, setFilteredData] = useState([]);
//prop variables
const {products} = props;
const {searched} = props;    
//const {searched} = props;
const handleOnChange = (e) => {
    setSearchInput(e.target.value);
    getFilteredItems(searchInput, products);
    if (e.target.value==''){
        setSearchedActive(false);
    }else{
        setSearchedActive(true);
    }
    
}
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
            price={product.price} pic={product.image}/> )
        }))
    }else if (searchedActive === true){
        return(filteredData.map((product, i) => { 
            return (<ProductCard className="productCard" key={i} name={product.name} idx={product.id}
            price={product.price} pic={product.image}/> )
        }))
    }
}
  
    return (
      <div className="productGrid" id="buy">
        <div className="search-input">
            <input type="text" placeholder="Search products" onChange={handleOnChange} value={searchInput} className="textbox" />
      </div>
      <div className="content"><h1>Best Selling Products</h1>
        <div className="grid" >
        {returnProducts()}
        </div>
        </div>
      </div>
    )
}