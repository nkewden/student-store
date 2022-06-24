const express = require("express");
const data = require("../data/db.json");

class Store {
    static products () {
        return {"products" : data.products}
    };

    static product (productId) {
        return data.products[productId - 1]
    }
}


module.exports = Store;