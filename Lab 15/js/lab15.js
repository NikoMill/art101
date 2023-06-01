// index.js - AJAX
// Author: Niko Miller
// Date: June 1, 2023

// Constants

// Functions


function getStuff(){

}


        $.ajax({
          url: "https://yesno.wtf/api",
          type: "GET",
          dataType: "json",
          success: function(data) {
            // Update the output div with the result
            $("#output").html("<h2>"+ data.answer + "</h2><img src='"+ data.image + "'>'");
          },
          error: function(jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
          }
        });

$("#button").click(getStuff());