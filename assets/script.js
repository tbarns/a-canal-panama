var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var dateDisplay = document.getElementById("currentDay")
var container = document.getElementsByClassName("container")
var row = document.createElement("div")



// displays time and date 
dateDisplay.textContent = today




