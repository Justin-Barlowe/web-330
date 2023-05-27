/* 
; Title: theme.js
; Author: Justin Barlowe
; Date: 24 May 2023
; Description: Theme JavaScript page
 */

document.getElementById("icon-text").innerHTML = "Light Mode"; //Sets Light mode text display as default for page. 

function toggleMode(x) { //Function created to theme toggle. 

  let colorTheme = document.body.classList; 
  let iconMode = x.classList; 
   
  if (colorTheme.value === "light-theme") { // Check which theme is currently selected. 
    localStorage.setItem("mode", "dark-theme"); // Set dark theme. 
    localStorage.setItem("iconMode", "fa-toggle-on");
    localStorage.setItem("iconText", "Dark Mode");
  } else {
    localStorage.setItem("mode", "light-theme"); // Set light theme. 
    localStorage.setItem("iconMode", "fa-toggle-off");
    localStorage.setItem("iconText", "Light Mode");
  }

  colorTheme.value = localStorage.getItem("mode"); // Updates theme based on the stored mode. 
  iconMode.value = `fa ${localStorage.getItem("iconMode")} pull-right`; // Updates icon class. 
  document.getElementById("icon-text").innerHTML = localStorage.getItem("iconText"); //Update text display based on set theme. 
}
