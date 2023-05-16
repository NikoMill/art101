// index.js - JavaScript Events and Forms
// Author: Niko Miller
// Date: May 16, 2023

// Constants

// Functions
// sortUserName - a function that takes user input and sorts letters
//of their name
var button = document.getElementById( 'my-button');
 button.addEventListener ('click', function() {
    var inputValue = document.getElementById('my-input').value;
    var inputSplit = inputValue.split('');
    var sorted = inputSplit.sort();
    var newEl = document.createElement("p");
    newEl.innerHTML = sorted.join('');
    document.getElementById("output").appendChild(newEl);
   }
 );



 

 
 


  