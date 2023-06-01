// index.js - AJAX
// Author: Niko Miller
// Date: June 1, 2023

// Constants

// Functions



        $.ajax({
          url: "https://yesno.wtf/api",
          type: "GET",
          dataType: "json",
          success: function(data) {
            // Update the output div with the result
            $("#output").text(JSON.stringify(data));
          },
          error: function(jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
          }
        });
   function getStuff({
    
   }

   )