// Title: barlowe-palindrome.js
// Author: Justin Barlowe
// Date: 5/31/2023
// Description: JS Page for Assignment 2.2



function getTodaysDate() {
  return new Date().toLocaleDateString();
}

function getLength(word) {
  return word.length;
}

function reverse(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  if (reverse(word) === word) return true;
  return false;
}

document.getElementById("btnCheckPhrase").onclick = () => {
  const txtPhrase = document.getElementById("txtPhrase").value;
  const assignResults = document.getElementById("assign-results");
  const assignResultsText = document.getElementById("assign-results-text");
  const today = getTodaysDate();
  const len = getLength(txtPhrase);
  const reversedPhrase = reverse(txtPhrase);

//Build string to display output in text results. 
  let results =  `Date: ${today} <br>
                  Original Phrase: ${txtPhrase} <br>
                  Reversed Phrase: ${reversedPhrase} <br>
                  Phrase Length: ${len}`;

  // modify the assign-results-header div to display the header string
  assignResultsText.innerHTML = results;

  // Check input string to determine message to display. 
  if (isPalindrome(txtPhrase))
    return (assignResults.innerHTML = `${txtPhrase} <b><u>is</u></b> a palindrome!`); // Displays message if palindrome is true
  return (assignResults.innerHTML = `${txtPhrase} <b><u>is not</u></b> a palindrome!`); // Displays message if palindrome is false
};
