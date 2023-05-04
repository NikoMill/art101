// index.js - Functions!
// Author: Niko Miller
// Date:May 4th, 2023

// Constants

// sortUserName - a function that takes user input and sorts letters
//of their name

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function sortUserName() {
   var userName = window.prompt ("Hi. Please tell me your name so I can fix it.");
   //console.log("userName =", userName);
   //split string to array
   var nameArray = userName.split('');
   //console.log("nameArray =", nameArray);
   // sort the array
   var nameArraySort = nameArray.sort();
   //console.log("nameArraySort =", nameArraySort);
   //join array back to string
   var nameSorted = nameArraySort.join('');
  // console.log("nameSorted =", nameSorted);
  // Note that I could have done the above lines as a single line:
  // userName.toLower().split("").sort().join("")
  return nameSorted;
}
// output
document.writeln ("Oh hey, I've fixed your name: ",
    sortUserName(), "</br>");
 
