var calDay = moment().format("dddd MMMM Do YYYY");
var currentTime = moment().format("h:mm");

// fn to populate the page from localStorage
function renderStorage() {
  var nineStorage = localStorage.getItem("9am");
  var tenStorage = localStorage.getItem("10am");
  var elevenStorage = localStorage.getItem("11am");
  var twelveStorage = localStorage.getItem("12pm");
  var oneStorage = localStorage.getItem("1pm");
  var twoStorage = localStorage.getItem("2pm");
  var threeStorage = localStorage.getItem("3pm");
  var fourStorage = localStorage.getItem("4pm");
  var fiveStorage = localStorage.getItem("5pm");
  console.log("local storage get: ", localStorage.getItem("9am"))
  console.log("nineStorage: ", nineStorage)

  $("#9am").text(nineStorage);
  $("#10am").text(tenStorage);
  $("#11am").text(elevenStorage);
  $("#12pm").text(twelveStorage);
  $("#1pm").text(oneStorage);
  $("#2pm").text(twoStorage);
  $("#3pm").text(threeStorage);
  $("#4pm").text(fourStorage);
  $("#5pm").text(fiveStorage);
}
// call the fn
renderStorage();

// click event for all <i> elements. SCOPE IS A PAIN IN MY ASS
$("i").on("click", function () {
  var divId = ["#9", "#10", "#11", "#12", "#1", "#2", "#3", "#4", "#5"];
  var textId = ["#9am", "#10am", "#11am", "#12pm", "#1pm", "#2pm", "#3pm", "#4pm", "#5pm"];

  var saveClick = $(this).parent().siblings(divId).children(textId);
  var clickVal = saveClick[1].value
  var clickId = saveClick[1].id
  // console.log("Saved text via click: ", clickVal);
  // console.log("Clicked on this ID: ", clickId)
  localStorage.setItem(clickId, clickVal);
  var storedText = localStorage.getItem(clickId);
  // console.log(storedText)
});

// set the current day and time and display in the header
$("#currentDay").text(calDay + " -- " + currentTime);
// console.log("Today's date is: ", calDay);
// console.log("The current time is: ", currentTime);

// console.log("moment.hours ", moment().hours());

var hourIds = ["#9", "#10", "#11", "#12", "#1", "#2", "#3", "#4", "#5"];

// if statements to handle what is past, present, and future classes
// is there a better way to do this? probably. but this was easy copy/paste
if (moment().hour() === 9) {
  for (var i = 0; i < hourIds.length; i++) {
    $(hourIds[i]).attr("class", "col-md-10 future");
    $("#9").attr("class", "col-md-10 present");
  }
}

if (moment().hour() === 10) {
  for (var i = 1; i < hourIds.length; i++) {
    $(hourIds[i]).addClass("future");
    $("#10")
      .removeClass("future")
      .addClass("present");
    $("#9")
      .removeClass("present")
      .addClass("past");
  }
}

if (moment().hour() === 11) {
  for (var i = 2; i < hourIds.length; i++) {
    $(hourIds[i]).addClass("future");
    $("#11")
      .removeClass("future")
      .addClass("present");
    for (var j = 0; j <= 1; j++) {
      $(hourIds[j])
        .removeClass("present")
        .addClass("past");
    }
  }
}

if (moment().hour() === 12) {
  for (var i = 3; i < hourIds.length; i++) {
    $(hourIds[i])
      .removeClass("future")
      .addClass("future");
    $("#12")
      .removeClass("future")
      .addClass("present");
    for (var j = 0; j <= 2; j++) {
      $(hourIds[j])
        .removeClass("present")
        .addClass("past");
    }
  }
}

if (moment().hour() === 13) {
  for (var i = 4; i < hourIds.length; i++) {
    $(hourIds[i]).addClass("future");
    $("#1")
      .removeClass("future")
      .addClass("present");
    for (var j = 0; j <= 3; j++) {
      $(hourIds[j]).addClass("past");
    }
  }
}

if (moment().hour() === 14) {
  for (var i = 5; i < hourIds.length; i++) {
    $(hourIds[i]).addClass("future");
    $("#2")
      .removeClass("future")
      .addClass("present");
    for (var j = 0; j <= 4; j++) {
      $(hourIds[j]).addClass("past");
    }
  }
}

if (moment().hour() === 15) {
  for (var i = 6; i < hourIds.length; i++) {
    $(hourIds[i]).addClass("future");
    $("#3")
      .removeClass("future")
      .addClass("present");
    for (var j = 0; j <= 5; j++) {
      $(hourIds[j]).addClass("past");
    }
  }
}

if (moment().hour() === 16) {
  for (var i = 7; i < hourIds.length; i++) {
    $(hourIds[i]).addClass("future");
    $("#4")
      .removeClass("future")
      .addClass("present");
    for (var j = 0; j <= 6; j++) {
      $(hourIds[j]).addClass("past");
    }
  }
}

if (moment().hour() === 17) {
  $("#5")
    .removeClass("future")
    .addClass("present");
  for (var i = 0; i <= 7; i++) {
    $(hourIds[i]).addClass("past");
  }
}

if (moment().hour() < 9) {
  for (var i = 0; i < hourIds.length; i++) {
    $(hourIds[i])
      .removeClass("past", "present")
      .addClass("future");
  }
}

if (moment().hour() > 17) {
  for (var i = 0; i < hourIds.length; i++) {
    $(hourIds[i])
      .removeClass("future", "present")
      .addClass("past");
  }
}

