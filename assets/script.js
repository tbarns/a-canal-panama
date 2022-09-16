var today = moment();
// displays time and date 
$("#currentDay").text(today.format("MMM Do, YYYY"));

var container = $(".container")
var timeBlocks = $("textarea")
var currentTime = moment().format("HH");
console.log(currentTime)


for (let index = 0; index < timeBlocks.length; index++) {
    var id = timeBlocks[index].id;
    console.log(id)



    if (currentTime < id) {
        $(timeBlocks).addClass("future");
    }
    //

    if (currentTime == id) {
        $(timeBlocks).addClass("present");
    }
    //

     if (currentTime > id) {
        $(timeBlocks).addClass("past");
    }

}

//dynamically create timeblocks for standard business hours

//iterate thru all the text areas and compare thier id value to moments currnt time




//ensure that timeblocks change depesding on the time of day

//when we click timeclock it allows input

//

