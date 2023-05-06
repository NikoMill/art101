// index.js - Working with your partner, experiment with anonymous functions and callbacks.
// Author: Niko Miller
// Date: May 9, 2023

// Constants

// Functions

function isEven(x) {
    return (x % 2 == 0 );
}

// test function
console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

var array = [100, 734289, 27, 66, 8, 29];
console.log("My array", array);

var result = array.map(isEven);
// should return [true, false, false, true, true, false]
console.log("Test evenness of array", result);

var result = array.map(function(x){
    return x ** 0.5;
})
// should return [10, 367144.5, 13.5, 33, 4, 14.5]
console.log("squareroot of array:", result);


  