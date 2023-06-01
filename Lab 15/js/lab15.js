// index.js - AJAX
// Author: Niko Miller
// Date: June 1, 2023

// Constants

// Functions

$("#challenge").append("<button>Challenge Button!!</button>");
$("#challenge button").click(function() {
    alert("AHH you hit the challenges button shii!!");
});

    $(document).ready(function() {
      // Add click event to the button
      $("#fetchButton").click(function() {
        // Make the AJAX call
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
      });
    });
  </script>
</body>
</html>