// index.js - JavaScript Events and Forms
// Author: Niko Miller
// Date: June 6, 2023

// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://xkcd.com/info.0.json"
    // The data to send (will be converted to a query string)
        ,data:{ 
            month: "6", 
            num: 2784, 
            link: "https://xkcd.com/info.0.json", 
            year: "2023",
            news: "", 
            safe_title: "Drainage Basins", 
            transcript: "", 
            alt: "After a pail of water was thrown on the Wicked Witch of the West outside Salt Lake City, Utah's Great Salt Lake was measured to be 7 parts per trillion witch by volume.",
            img: "https://imgs.xkcd.com/comics/drainage_basins.png", 
            title: "Drainage Basins", 
            day: "2"
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
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})