// Name: Justin Barlowe
// Title: product.js
// Date: 22 June 2023
// Description: JavaScript file for week 5

export class Product {

    // Set the initial properties for the Product class include a random id
    constructor(name, price) {
        this.name = name;
        this.price = price;
        // Random generation of product ID
        this.id = Math.random().toString(12).slice(2);
    }
}