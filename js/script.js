// Instructs engine to load the HTML and CSS before running the JS
$(document).ready(function () {

  // Display current date and time
  var displayTime = document.querySelector("#currentDay");

  var currentTime = dayjs().format("dddd, MMMM D, YYYY, h:mm:ss a");

  displayTime.textContent = currentTime;

    // SaveBtn click listener for user input
    $(".saveBtn").on("click", function () {
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
  
      // Save text in local storage
      localStorage.setItem(time, text);
    });

});
