// Name:Justin Barlowe
// Title: finance-calculator.js
// Date: 7/1/2023
// Description: JavaScript file for week 6


//Export finance calculator class
export class FinanceCalculator {
    static MONTHS_IN_YEAR = 12;
    // Calculate the monthly payment
    static calculateFutureValue(monthlyPayment, rate, years) {
      const months = years * this.MONTHS_IN_YEAR;
      const interestRate = 1 + rate / 100;
      const presentValue = monthlyPayment * months;
      const futureValue =  presentValue * (Math.pow(interestRate, months));
      return futureValue;
    }
    // Convert to currency
    static convertToCurrency(field) {
      const currencyFormatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      });
      // Return the currency
      return currencyFormatter.format(field);
    }
  }