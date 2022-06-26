const express = require("express");
const route = express.Router();
const store = require("../models/store")

route.get("/store", async (req, res, next) => {
    res.status(200).json(store.products())
})

route.get("/store/:productId", async(req, res, next) => {
    res.status(200).json(store.product(req.params.productId))
})

route.post("/", async(req, res, next) => {
    const shoppingCart = req.body.shoppingCart;
    const user = req.body.user
    const purchase = store.makePurchase(shoppingCart, user)

    res.status(200).json({"purchase":purchase})
})

module.exports = route;