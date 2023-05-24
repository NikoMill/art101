// index.js - JavaScript Events and Forms
// Author: Niko Miller
// Date: May 25, 2023

// Constants

// Functions
function fizzBuzzBoom(maxNums, factorObj) {
    for (var num=0; num<muxNums; num++) {
        var outputStr = "";
        for (var factor in factorObj) {
            if (num % factor == 0) {
                outputStr += factorObj[factor];
            }
        }
        if (outputStr) {
            outputStr = " - " + outputStr + "!";
        }
        outputToPage(num.toString() + outputStr)
    }

}

function reportError(str) {
    outputEl.innerHTML = "<div class='error''>" + str + "</div>";
}

document.getElementById("submit").addEventListener("click", function(){
    var max = document.getElementById("max").value;
    console.log("max:", max)
    if (! max) {
        reportError("You Must Provide a Maximum");
    }
})