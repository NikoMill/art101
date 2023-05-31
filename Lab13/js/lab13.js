// index.js - JavaScript Events and Forms
// Author: Niko Miller
// Date: May 25, 2023

// Constants

// Functions
	// create a "fizzBuzz" function that loops through
    function fizzBuzz(){
        var outty = "";
        for (var i = 1; i <= 200; i++){
            // multiple of 3 & 5 & 7
            if (i % 105 == 0){
                outty += "FizzBuzzBoom ";
            // multiple of 5 & 7
             }  else if (i % 35 == 0){
                outty += "BuzzBoom ";
            //multiple of 3 & 7    
            } else if (i % 21 == 0){
                outty += "FizzBoom";
            //multiple of 3 & 5
            } else if (i % 7 == 0){
                outty += "Buzz";
            // remainder of 3
            } else if (i % 3 == 0){
                outty += "Fizz";
            } else {
                outty += i + " ";
            }
        }
        return outty;
     }
    var oneLongString = fizzBuzz();
    $("#output").html (oneLongString);
    
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