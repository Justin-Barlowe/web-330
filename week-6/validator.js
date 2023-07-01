// Name:Justin Barlowe
// Title: validator.js
// Date: 7/1/2023
// Description: JavaScript file for week 6

//Imports
import {RequiredField} from "./required-field.js";
import {FloatField} from "./float-field.js";
import {FloatMinField} from "./float-min-field.js";
import {FloatMaxField} from "./float-max-field.js";

//Export validator class
export class Validator {
  constructor(name, field) {
    this.validators = [];
    this.messages = [];
    this.name = name;
    this.field = field;
  }

  //Add required field
  addRequiredField() {
    this.validators.push(new RequiredField(this.name, this.field));
  }

    //Add required float field
  addRequiredFloatField() {
    this.validators.push(new FloatField(this.name, this.field));
  }

  // Check the minimum value
  addFloatMinField(min) {
    this.validators.push(new FloatMinField(this.name, this.field, min));
  }

  // Check the maximum value
  addFloatMaxField(max) {
    this.validators.push(new FloatMaxField(this.name, this.field, max));
  }

  // Validate the field
  validate() {
    for(let valid of this.validators) {
      if(valid.validate()) {
        this.messages.push(valid.getMessage());
        return false;
      }
    }
    return true;
  }
}
