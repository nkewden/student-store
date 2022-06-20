import "./Searchbar.css"
import { useState } from "react"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiMagnifyingGlass } from "react-icons/gi";
import Home from "../Home/Home";




export default function SearchBar(props){
    //prop variables
    const {products} = props;
    console.log(24,products);
    //state variables
    const [searchInput, setSearchInput] = useState("");
    //searchBar function
    // const searchBar = searchInput != "" ? props.product.filter(product) = >

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };

    if (searchInput.length > 0) {
          products.filter((product) => {
          return product.name.match(searchInput);
      });
    }


    

    return(
        <div className="search-input">
            <input id="search" type="text" placeholder="Search products" onChange={(e) => props.setSearchInput(e.target.value)} value={searchInput} className="textbox" />



            <div className="catergories">
              <button className="all" onClick={(e) => {<Home />}}>All Catergories</button>
              <button className="clothing" onClick={(e) => {setSearchInput()}}>Clothing</button>
              <button className="food" onClick={(e) => {setSearchInput(e.target.catergory)}}>Food</button>
              <button className="accessoriesll" onClick={(e) => {setSearchInput(e.target.catergory)}}>Accessories</button>
              <button className="tech" onClick={(e) => {setSearchInput(e.target.catergory)}}>Tech</button>
            </div>
            
        </div>
    )
}