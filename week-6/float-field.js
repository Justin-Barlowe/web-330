// Name:Justin Barlowe
// Title: float-field.js
// Date: 7/1/2023
// Description: JavaScript file for week 6

//Export float field class
export class FloatField {
    constructor(name, field) {
      this.name = name;
      this.field = field;
    }
    // Check if the field is a float
    validate() {
      return isNaN(parseFloat(this.field));
    }
    // Check if a non-float is entered
    getMessage() {
      return `${this.name} must be a float value. You entered ${this.field}`
    }
  }