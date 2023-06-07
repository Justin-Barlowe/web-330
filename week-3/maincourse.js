// Title:maincourse.js
// Author:Justin Barlowe
// Date:6/7/2023
// Description: JavaScript file for Assignment 3.2

//Import product from product file. 
import { Product } from "./product.js";

//Defines new class that extends product.
export class MainCourse extends Product {
  //Constructor for maincourse class. 
  constructor(name, price) {
    //Call constructor of the parent product class.
    super(name, price);
  }
}
