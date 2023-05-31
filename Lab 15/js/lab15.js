// index.js - AJAX
// Author: Niko Miller
// Date: June 1, 2023

// Constants

// Functions

$("#Button").click(function() {
    alert(   );

{
//using the core $/ajax()method
$.ajax({
    //The URL for the req 
  url: https://yesno.wtf/# 
// the data to send
}

)
//whether this is a POST or a GET request
type: "GET"
 //What we do when api call is successful
 //all the action goes in here
successs.answerfunction(data) {
 //do stuff
 console.log(data);
},
//What we do if the api call fails
error.answerfunction(jqXHR, testStatus, errorThrown) 
    //do stuff
    console.log ("Error:", textStatus, errorThrown);

})

