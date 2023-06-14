// Name: Justin Barlowe
// Title: Calorie-Converter.js
// Date: 13 June 2023
// Description: JavaScript file for week 4



//Imports
import { FoodModel } from "./food-model.js";

// Class created to extend food model
export class CalorieConverter extends FoodModel {

  // ACreated objects to populate search
  static data = [
    new FoodModel(1007, "Egg", 78),
    new FoodModel(1008, "Apple", 95),
    new FoodModel(1009, "Hamburger", 354),
    new FoodModel(1010, "Fries", 400),
    new FoodModel(1011, "Banana", 105),
    new FoodModel(1012, "Soda", 150)
  ];

  // Find object
  static find(foodName) {
   this.foodName = foodName;

  //  Return data

   return this.data.filter((obj) => {
    if(this.foodName.includes(`${obj.name}`.toLowerCase())) return obj;
   });
  } 
}