// index.js - Conditionals
// Author: Your Name Niko Miller
// Date: May 22, 2023

// Constants

// Functions
var sign= sortingHat (varsign);
var asSign = sortingHat(name);
function sortingHat(str) {
    len = str.length;
    mod = len % 12; 
    if (mod == 0) {
        return "Aries"
    }
    else if (mod == 1) {
        return "Libra"
    }

    else if (mod == 3 ){
    return "Taurus"
    }
    else if (mod == 4) {
        return "Pisces"
     }
    else if (mod == 5) {
      return "Leo"
     }
     else if (mod == 6) {
        return "Capricorn"
     }
    else if (mod == 7) {
        return "Sagittarius"
        }
    else if (mod == 8) {
         return "Gemini"
         }
    else if (mod == 9) {
        return "Cancer"
            }
    else if (mod == 10) {
        return "Aquarius"
                }
     else if (mod == 11) {
        return "Virgo"
         }
    else if (mod == 2) {
         return "Scorpio"
            }
}

var myButton = document.getElementById ("button");
myButton.addEventListener("click", function (){
    var name = document.getElementById("input").value;
    newText = "<p>I think you are a " + asSign + ".</p>";
    document.getElementById("output").innerHTML = newText;
})
  