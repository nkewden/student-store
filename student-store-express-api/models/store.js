const express = require("express");
const data = require("../data/db.json");
const { storage } = require("../data/storage")
const { BadRequestError } = require("../errors/erros");

class Store {
    static products () {
        return {"products" : data.products}
    };

    static product (productId) {
        return data.products[productId - 1]
    }

    static purchases () {
        const buy = storage.get('purchases').value()
        return buy
    }

    static makePurchase (shoppingCart, user) {
        let id = this.purchases().length + 1;
        let name = "";
        let order = [];
        let total = 0;
        let email = "";
        let createAt = new Date().toISOString();

        if (!shoppingCart || !user) {
            throw new BadRequestError()
        }

        if (user.email != "" && user.name != "") {
            name = user.name;
            email = user.email
        }else {
            throw new BadRequestError()
        }

        shoppingCart.map((e) => {
            if (e.itemId != 0 && e.quantity != 0) {
                order.push(e)
                let product = this.product(e.itemId)
                total = total + product.price * e.quantity
            }
        })

        total = (total * .0875) + total

        let purchase = {
            id: id,
            name: name,
            email: email,
            order: order,
            total: total,
            createAt: createAt

        }





        storage.get("purchases").push(purchase).write();
        return purchase;
    }

}



module.exports = Store;