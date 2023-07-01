// Name:Justin Barlowe
// Title: required-field.js
// Date: 7/1/2023
// Description: JavaScript file for week 6

//Export required field class
export class RequiredField {
    constructor(name, field) {
      this.name = name;
      this.field = field;
    }
    validate() {
      if(parseFloat(this.field)) {
        return false;
      }
  
      return true;
    }
  
    getMessage() {
      return `${this.name} is a required field.`
    }
  }