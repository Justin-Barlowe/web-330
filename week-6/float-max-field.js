// Name:Justin Barlowe
// Title: float-max-field.js
// Date: 7/1/2023
// Description: JavaScript file for week 6

// Export float max field class
export class FloatMaxField {
    constructor(name, field, max) {
      this.name = name;
      this.field = field;
      this.max = max;
    }
    // check if the field is required
    validate() {
      return parseFloat(this.field) > parseFloat(this.max);
    }
    // check if a non-string if required
    getMessage() {
      return `${this.name} must be less than ${this.max}. You entered ${this.field}.`
    }
  }