var today = moment();
// displays time and date 
$("#currentDay").text(today.format("MMM Do, YYYY"));

var container = $(".container")
var timeBlocks = $("textarea")
var save = $("button")
var currentTime = moment().format("HH");
console.log(currentTime)


for (let index = 0; index < timeBlocks.length; index++) {
    var id = timeBlocks[index].id;
    console.log(id)
}


if (currentTime < id) {
    $(timeBlocks).addClass("future");
}
//

else if (currentTime == id) {
    $(timeBlocks).addClass("present");
}
//

else if (currentTime > id) {
    $(timeBlocks).addClass("past");
}



save.addEventListener("click", saveBtn())
// save button send text area to local storage
function saveBtn (){
localStorage.setItem()
}