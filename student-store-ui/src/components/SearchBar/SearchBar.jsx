import "./Searchbar.css"
import { useState } from "react"

import { AiOutlineShoppingCart } from "react-icons/ai";

import { GiMagnifyingGlass } from "react-icons/gi";




export default function SearchBar(props){
    //prop variables
    const {products} = props;
    console.log(24,products);
    //state variables
    const [searchInput, setSearchInput] = useState("");
    //searchBar function
    const searchBar=()=>{
        
    }

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
          <form>
            <input id="search" type="text" placeholder="Search products" onChange={handleChange} value={searchInput} className="textbox" /><button id="search-btn" className=""> <GiMagnifyingGlass /> </button>
            
          </form>
          <div>
            

          <button id="cart" className="cart-btn">My Cart <AiOutlineShoppingCart className="cart-icon"/> </button>
          
          </div>
        </div>
    )
}