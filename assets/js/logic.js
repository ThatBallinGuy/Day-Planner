
var currentDay = moment().format("ddd MMM Do, YYYY");
$("#currentDay").text(currentDay);

$("#9 .input").val(localStorage.getItem("9"));
$("#10 .input").val(localStorage.getItem("10"));
$("#11 .input").val(localStorage.getItem("11"));
$("#12 .input").val(localStorage.getItem("12"));
$("#13 .input").val(localStorage.getItem("13"));
$("#14 .input").val(localStorage.getItem("14"));
$("#15 .input").val(localStorage.getItem("15"));
$("#16 .input").val(localStorage.getItem("16"));
$("#17 .input").val(localStorage.getItem("17"));

//Dynamically change the background and text alignment based on time
var currentHour = moment().hour();
$(".row").each(function(){
    var hourEl = $(this).attr("id");
    if (currentHour < hourEl) {
        $(this).children(".input").addClass("future");
        $(this).children(".input").removeClass("past");
        $(this).children(".input").removeClass("present");
        $(this).children(".hour").css("text-align", "right");
    } if(currentHour == hourEl) {
        $(this).children(".input").addClass("present");
        $(this).children(".input").removeClass("past");
        $(this).children(".input").removeClass("future");
    } if(currentHour > hourEl) {
        $(this).children(".input").addClass("past");
        $(this).children(".input").removeClass("future");
        $(this).children(".input").removeClass("present");
        $(this).children(".hour").css("text-align", "left");
    }
})
//On button click
$(".saveBtn").on("click", function () {
    //find text and hour
    var text = $(this).siblings(".input").val();
    var time = $(this).parent().attr("id");

    //store in local storage.
    localStorage.setItem(time, text);
})