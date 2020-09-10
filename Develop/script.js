$(document).ready(function () {
    
    //AM and PM Hours
    let hours = {
        amHours: [7,8, 9, 10, 11],
        pmHours: [12, 1, 2, 3, 4, 5,6]
    };

   let  colorChangeObject = {
        amColorHours: [8, 9, 10, 11],
        pmColorHours: [12, 13, 14, 15, 16, 17]
    };
  let i = 0;

    $("#currentDay").text(moment().format("dddd[,] MMMM Do"));

    // adding AM hours 
    for (let i = 0; i < hours.amHours.length; i++) {
        let newRow = $(`<div class='row'></div>`);
        $(".container").append(newRow);
        let hrCol = $(`<div class='col-1 time-block'>${hours.amHours[i]}AM</div>`);
        let textCol = $(`<textarea class="col-10" data-time=${colorChangeObject.amColorHours[i]}>Daily Goals...</textarea>`);
        let buttonCol = $('<button class="col-1 saveBtn">Save</button>');
        $(newRow).append(hrCol, textCol, buttonCol);
    }

    //AM and PM Hours
    for (let i = 0; i < hours.pmHours.length; i++) {
        let newRow = $(`<div class='row'></div>`);
        $(".container").append(newRow);
        let hrCol = $(`<div class='col-1 time-block'>${hours.pmHours[i]}PM</div>`);
        let textCol = $(`<textarea class="col-10" data-time=${colorChangeObject.pmColorHours[i]}>Daily Goals...</textarea>`);
        let buttonCol = $('<button class="col-1 saveBtn">Save</button>');
        $(newRow).append(hrCol, textCol, buttonCol);
    }

    // Color Change Base on the Hours

    function colorChange() {
        $("textarea").each(function () {
            let currentHour = parseInt(moment().hours());
            let textData = $("textarea").data("time");
            if (textData < currentHour) {
                $("textarea").removeClass("pass");
                $("textarea").removeClass("present");
                $("textarea").addClass("future");
            }
            else if (textData === currentHour) {
                $("textarea").removeClass("future");
                $("textarea").removeClass("present");
                $("textarea").addClass("pass");
            }
            else {
                $("textarea").removeClass("present");
                $("textarea").removeClass("pass");
                $("textarea").addClass("future");
            }
            console.log(textData);
            console.log(currentHour);
        });
    };
    colorChange();
});