var today = moment();
// displays time and date 
$("#currentDay").text(today.format("MMM Do, YYYY"));

var container = $(".container")
var timeBlocks = $("textarea")
var currentTime = parseInt(moment().format("HH"));
console.log(currentTime)

//this for loop doesnt allow my code to distingush between indivudal timeblocks
// for (let index = 0; index < timeBlocks.length; index++) {


//     console.log(typeof currentTime)



// if (currentTime < id) {
//     $(timeBlocks).addClass("past");
// }
// //

// else if (currentTime == id) {
//     $(timeBlocks).removeClass("past");
//     $(timeBlocks).addClass("present");
// }
// //

// else if (currentTime > id) {
//     $(timeBlocks).removeClass("past");
//     $(timeBlocks).removeClass("present");
//     $(timeBlocks).addClass("future");
// }
// }

function rowUpdater() {
    $(timeBlocks).each(function () {
        console.log(this)
        var id = parseInt($(this).attr("id"));
        console.log(id)

        if (currentTime > id) {
            $(this).addClass("past");
        }
        //

        else if (currentTime == id) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        //

        else if (currentTime < id) {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
}
rowUpdater()



//this is the event listener written in JQUERY that allows me to store the key value pair into local storage
$(".saveBtn").on("click", function () {

    var text = $(this).siblings("textarea").val()
   var time = $(this).siblings("textarea").attr("id")
     localStorage.setItem(time, text)
   }
)
//this allows the value to persist in the correct key
$("#9").val(localStorage.getItem("9"))
$("#10").val(localStorage.getItem("10"))
$("#11").val(localStorage.getItem("11"))
$("#12").val(localStorage.getItem("12"))
$("#13").val(localStorage.getItem("13"))
$("#14").val(localStorage.getItem("14"))
$("#15").val(localStorage.getItem("15"))
$("#16").val(localStorage.getItem("16"))
$("#17").val(localStorage.getItem("17"))

