const express = require("express");
const data = require("../data/db.json");
const storage = require("../data/storage")

class Store {
    static products () {
        return {"products" : data.products}
    };

    static product (productId) {
        return data.products[productId - 1]
    }

    static makePurchase (user, shoppingCart) {
        let id = 0;
        let name = "";
        let order = [];
        let total = 0;
        let email = "";
        let createAt = new Date.toISOString();

        storage.get("purchases").push(purchase).write();
    }

}



module.exports = Store;