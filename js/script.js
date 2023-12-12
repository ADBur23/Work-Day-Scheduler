// Instructs engine to load the HTML and CSS before running the JS
$(document).ready(function () {

  // Display current date and time
  var displayTime = document.querySelector("#currentDay");

  var currentTime = dayjs().format("dddd, MMMM D, YYYY, h:mm:ss a");

  displayTime.textContent = currentTime;

});
