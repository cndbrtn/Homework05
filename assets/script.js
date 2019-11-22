var calDay = moment().format("dddd MMMM Do YYYY");
var currentTime = moment().format("h:mm");

// var hourInput = {
// };

// localStorage.setItem({
//     "UserInput": hourInput,
//     "textarea":
// })

// var storageObj = {};
var storage = [];

$("i").on("click", function() {
  hourInput = {
    nine: $("#9am").val(),
    ten: $("#10am").val(),
    eleven: $("#11am").val(),
    twelve: $("#12pm").val(),
    one: $("#1pm").val(),
    two: $("#2pm").val(),
    three: $("#3pm").val(),
    four: $("#4pm").val(),
    five: $("#5pm").val()
  };
  console.log("this gives me ?????? ", hourInput.nine);
  //   console.log("this gives me the val ", $("#9am").val());
});

$("#currentDay").text(calDay + " -- " + currentTime);

console.log("Today's date is: ", calDay);
console.log("The current time is: ", currentTime);

console.log("moment.hours ", moment().hours());

var hourIds = ["#9", "#10", "#11", "#12", "#1", "#2", "#3", "#4", "#5"];

if (moment().hour() === 9) {
  for (var i = 0; i < hourIds.length; i++) {
    $(hourIds[i]).attr("class", "col-md-10 future");
    $("#9").attr("class", "col-md-10 present");
  }
}

if (moment().hour() === 10) {
  for (var i = 1; i < hourIds.length; i++) {
    $(hourIds[i]).attr("class", "col-md-10 future");
    $("#10").attr("class", "col-md-10 present");
    $("#9").attr("class", "col-md-10 past");
  }
}

if (moment().hour() === 11) {
  for (var i = 2; i < hourIds.length; i++) {
    $(hourIds[i]).attr("class", "col-md-10 future");
    $("#11").attr("class", "col-md-10 present");
    for (var j = 0; j <= 1; j++) {
      $(hourIds[j]).attr("class", "col-md-10 past");
    }
  }
}

if (moment().hour() === 12) {
  for (var i = 3; i < hourIds.length; i++) {
    $(hourIds[i]).attr("class", "col-md-10 future");
    $("#12").attr("class", "col-md-10 present");
    for (var j = 0; j <= 2; j++) {
      $(hourIds[j]).attr("class", "col-md-10 past");
    }
  }
}

if (moment().hour() === 13) {
  for (var i = 4; i < hourIds.length; i++) {
    $(hourIds[i]).attr("class", "col-md-10 future");
    $("#1").attr("class", "col-md-10 present");
    for (var j = 0; j <= 3; j++) {
      $(hourIds[j]).attr("class", "col-md-10 past");
    }
  }
}

if (moment().hour() === 14) {
  for (var i = 5; i < hourIds.length; i++) {
    $(hourIds[i]).attr("class", "col-md-10 future");
    $("#2").attr("class", "col-md-10 present");
    for (var j = 0; j <= 4; j++) {
      $(hourIds[j]).attr("class", "col-md-10 past");
    }
  }
}

if (moment().hour() === 15) {
  for (var i = 6; i < hourIds.length; i++) {
    $(hourIds[i]).attr("class", "col-md-10 future");
    $("#3").attr("class", "col-md-10 present");
    for (var j = 0; j <= 5; j++) {
      $(hourIds[j]).attr("class", "col-md-10 past");
    }
  }
}

if (moment().hour() === 16) {
  for (var i = 7; i < hourIds.length; i++) {
    $(hourIds[i]).attr("class", "col-md-10 future");
    $("#4").attr("class", "col-md-10 present");
    for (var j = 0; j <= 6; j++) {
      $(hourIds[j]).attr("class", "col-md-10 past");
    }
  }
}

if (moment().hour() === 17) {
  $("#5").attr("class", "col-md-10 present");
  for (var i = 0; i <= 7; i++) {
    $(hourIds[i]).attr("class", "col-md-10 past");
  }
}

if (moment().hour() < 9) {
  for (var i = 0; i < hourIds.length; i++) {
    $(hourIds[i]).attr("class", "col-md-10 future");
  }
}

if (moment().hour() > 17) {
  for (var i = 0; i < hourIds.length; i++) {
    $(hourIds[i]).attr("class", "col-md-10 past");
  }
}
