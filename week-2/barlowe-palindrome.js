// Title: barlowe-palindrome.js
// Author: Justin Barlowe
// Date: 5/31/2023
// Description: JS Page for Assignment 2.2

function getTodaysDate() {
    const options = { weekday: 'long', year: 'numeric', day: 'numeric' };
    const date = new Date().toLocaleDateString('en-US', options);
    return date;
}

function getLength(str) {
    return str.length;
}

function reverse(str) {
    const charArray = str.splint('');
    const reversedArray = charArray.reverse();
    const reversedStr = reversedArray.join('');
    return reversedStr;
}

function isPalindrome(str) {
    const reversedStr = reverse(str);
    return reversedStr === str;
}

document.getElementById('btnCheckPhrase').onClick = isPalindrome();

document.getElementById('assign-results-text').innerHTML

var txtPhrase = document.getElementById("txtPhrase").value

var assignResults = document.getElementById("assignResults");

var today = getTodaysDate();

var len = getLength(txtPhrase);


assignResults.innerHTML = "Phrase: " + txtPhrase + "<br>" + "Today's Date: " + today + "<br>" +
                            "Length: " + len + "<br>" + "Reversed Phrase: " + reversedPhrase;
