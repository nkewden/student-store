const express = require("express");
const route = express.Router();
const store = require("../models/store")
// const error = require("../errors/errors")

route.get("/store", async (req, res, next) => {
    res.status(200).json(store.products())
})

route.get("/store/:productId", async(req, res, next) => {
    res.status(200).json(store.product(req.params.productId))
})

route.post("/store", async(req, res, next) => {
    const shoppingCart = req.body.shoppingCart;
    const user = req.body.user
    const purchase = await store.makePurchase(shoppingCart, user)
    res.status(200).json({"purchase":purchase})
})

module.exports = route;