// Name:Justin Barlowe
// Title: float-min-field.js
// Date: 7/1/2023
// Description: JavaScript file for week 6

// Export float min field class
export class FloatMinField {
    constructor(name, field, min) {
      this.name = name;
      this.field = field;
      this.min = min;
    }
    validate() {
      return parseFloat(this.field) < parseFloat(this.min);
    }
    getMessage() {
      return `${this.name} must be more than ${this.min}. You entered ${this.field}.`
    }
  }