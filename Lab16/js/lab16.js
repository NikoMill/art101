// index.js - JavaScript Events and Forms
// Author: Niko Miller
// Date: June 6, 2023

// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://xkcd.com/614/info.0.json"
    // The data to send (will be converted to a query string)
        ,data:{ 
          
          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        console.log(data); 
        console.log (data.month);
        console.log (data.num);
        console.log (data.link);
        console.log (data.year);
        console.log (data.news);
        console.log (data.safe_title);
        console.log (data.transcript);



    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})