// Title:Bill.js
// Author:Justin Barlowe
// Date:6/7/2023
// Description: JavaScript file for Assignment 3.2


// Created and exported bill class.
export class Bill {
  constructor() {
    //Arrays to store items. 
    this.beverages = [];
    this.appetizers = [];
    this.mainCourses = [];
    this.desserts = [];
  }
  //Add beverage to bill
  addBeverage(beverage) {
    this.beverages.push(beverage);
  }
  //Add appetizer to bill
  addAppetizer(appetizer) {
    this.appetizers.push(appetizer);
  }
  //Add main course to bill. 
  addMainCourse(mainCourse) {
    this.mainCourses.push(mainCourse);
  }
  //Add dessert to bill. 
  addDessert(dessert) {
    this.desserts.push(dessert);
  }
  //Get total function
  getTotal() {
    let total = 0;
    // Adds beverage price if selected
    this.beverages.forEach((beverage) => {
      total += beverage.price;
    });
    // Adds appetizer price if selected
    this.appetizers.forEach((appetizer) => {
      total += appetizer.price;
    });
    //Adds main course price if selected
    this.mainCourses.forEach((mainCourse) => {
      total += mainCourse.price;
    });
    //Adds desert price if selected.
    this.desserts.forEach((dessert) => {
      total += dessert.price;
    });
    // Returns total of all selected items.
    return total;
  }

//Added to clear the bill so that total can be reset when checkbox is unchecked.
  clearBill() {
    this.beverages = [];
    this.appetizers = [];
    this.mainCourses = [];
    this.desserts = [];
  }
}
