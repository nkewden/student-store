// YOUR CODE HERE
const {storage} = require ("./data/storage")

class Store { 
    static async productList () {
        return storage.get("products").values();
    }
 }