// Name: Justin Barlowe
// Title: shopping-cart.js
// Date: 22 June 2023
// Description: JavaScript file for week 5

export class ShoppingCart {
    constructor() {
        this.products = [];
    }

    // Count order length
    count() {
        return this.products.length;
    }

    // Add products to list
    add(product) {
        this.products.push(product);
    }

    //List products
    * listProducts() {
        for(let product of this.products) {
            yield product;
        }
    }
}