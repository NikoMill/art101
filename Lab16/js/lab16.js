// index.js - JavaScript Events and Forms
// Author: Niko Miller
// Date: June 6, 2023

// Using the core $.ajax() method
$.ajax({
    // URL
    url: "https://xkcd.com/info.0.json",  
    // data to be sent
    data: {},
    type: "GET"
})
.done(function(comicObj){
    $("#output").html("<h2> " + comicObj.title);
    $("#output").append("<img src='" + comicObj.img + "'/>");
    $("#output").append("<p>alt: " + comicObj.alt );
    })
.fail(function(jqXHR, textStatus, errorThrown){
    console.log("Error: ", textStatus, errorThrown);
    })