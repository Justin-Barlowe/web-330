// Title: barlowe-palindrome.js
// Author: Justin Barlowe
// Date: 5/31/2023
// Description: JS Page for Assignment 2.2

//Date function
function getTodaysDate() {
  return new Date().toLocaleDateString();
}

// Word length function.
function getLength(word) {
  return word.length;
}

// Word reverse function.
function reverse(word) {
  return word.split("").reverse().join("");
}

// Function to check if the word reversed equals original word.
function isPalindrome(word) {
  if (reverse(word) === word) return true;
  return false;
}

document.getElementById("btnCheckPhrase").onclick = () => {
  //Onclick arrow function.
  const txtPhrase = document.getElementById("txtPhrase").value; //Variable for textbox input.
  const assignResults = document.getElementById("assign-results"); // Variable for results div.
  const assignResultsText = document.getElementById("assign-results-text"); //Variable for results-text span.
  const today = getTodaysDate(); //Variable for date
  const len = getLength(txtPhrase); // Variable for phrase length.
  const reversedPhrase = reverse(txtPhrase); //Variable for reversed phrase.

  // Returns error alert if text box is left empty.
  if (txtPhrase.trim() === "") {
    alert("Error: Text box cannot be empty.");
    return;
  }

  //Build string to display output in text results.
  let results = `Date: ${today} <br>
                  Original Phrase: ${txtPhrase} <br>
                  Reversed Phrase: ${reversedPhrase} <br>
                  Phrase Length: ${len}`;

  // Modify the assignResultsText div to display the header string.
  assignResultsText.innerHTML = results;

  // Check input string to determine message to display.
  if (isPalindrome(txtPhrase))
    return (assignResults.innerHTML = `${txtPhrase} <b><u>is</u></b> a palindrome!`); // Displays message if palindrome is true
  else
    return (assignResults.innerHTML = `${txtPhrase} <b><u>is not</u></b> a palindrome!`); // Displays message if palindrome is false
};
