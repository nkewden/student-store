import * as React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";
import { useState, useEffect } from "react";

export default function ProductGrid(props) {

  const [searchedActive, setSearchedActive] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState([]);
  const [filterActive, setFilterActive] = useState(false);


  const { products } = props;


  useEffect(() => {
    setFilteredCategory(products);
  }, []);

  const handleCategories = (e) => {
    let typeCategory = e.target.value;
    typeCategory != "all categories"
      ? setFilteredCategory(
          products.filter((product) => {
            if (typeCategory == product.category) {
              return product;
            }
          })
        )
      : setFilteredCategory(products);
    setFilterActive(true);
  };

  const handleOnChange = (e) => {
    setSearchInput(e.target.value);
    getFilteredItems(searchInput, products);
    if (e.target.value == "") {
      setSearchedActive(false);
    } else {
      setSearchedActive(true);
    }
  };
  const getFilteredItems = (searchInput, products) => {
    if (!searchInput) {
      return products;
    }
    const data = products.filter((product) =>
      product.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredData(data);
    return filteredData;
  };

  const returnProducts = () => {
    if (searchedActive === false) {
      if (filterActive) {
        return filteredCategory.map((product, i) => {
          return (
            <ProductCard
              className="productCard"
              key={i}
              product={product}
              handleAddItemToCart={props.handleAddItemToCart}
              handleRemoveItemFromCart={props.handleRemoveItemFromCart}
            />
          );
        });
      } else {
        return props.products.map((product, i) => {
          return (
            <ProductCard
              className="productCard"
              key={i}
              product={product}
              handleAddItemToCart={props.handleAddItemToCart}
              handleRemoveItemFromCart={props.handleRemoveItemFromCart}
            />
          );
        });
      }
    } else if (searchedActive === true) {
      return filteredData.map((product, i) => {
        return (
          <ProductCard
            className="productCard"
            key={i}
            product={product}
            handleAddItemToCart={props.handleAddItemToCart}
            handleRemoveItemFromCart={props.handleRemoveItemFromCart}
          />
        );
      });
    }
  };

  return (
    <div className="product-grid" id="buy">
      <div className="search-input">
        <input
          type="text"
          placeholder="search"
          onChange={handleOnChange}
          value={searchInput}
          className="textbox"
        />
      </div>
      <div className="categories">
        <li className="active-btn">
          <button
            className="buttons"
            id="all"
            value="all categories"
            onClick={handleCategories}
          >
            All Categories
          </button>
          <button
            className="buttons"
            id="clothing"
            value="clothing"
            onClick={handleCategories}
          >
            Clothing
          </button>
          <button
            className="buttons"
            id="food"
            value="food"
            onClick={handleCategories}
          >
            Food
          </button>
          <button
            className="buttons"
            id="acc"
            value="accessories"
            onClick={handleCategories}
          >
            Accessories
          </button>
          <button
            className="buttons"
            id="tech"
            value="tech"
            onClick={handleCategories}
          >
            Tech
          </button>
        </li>
      </div>
      <div className="content">
        <h1>Best Selling Products</h1>
        <div className="grid">{returnProducts()}</div>
      </div>
    </div>
  );
}
