//var interval = setInterval(hourUpdate, 15000);
//day JS

var displayDate = dayjs().format('dddd, MMMM.DD.YYYY')
  $(document).ready(function() {
    $("#currentDay").append(displayDate)
  });


//edit due dated in time block
var inputForms = $(".user-task");
  for (let i = 0; i < inputForms.length; i++) {
    var currentHour = parseInt(dayjs().format('H'));
    var inputHour = parseInt($(inputForms[i]).attr('data-hour'));
    //compare these 2 variables 
    //add class past, present, future
    if(currentHour === inputHour) {
      $(inputForms[i]).addClass("present");
    
      }  else if(currentHour > inputHour) {
        $(inputForms[i]).addClass("past");
    
      } else if(currentHour < inputHour)
        $(inputForms[i]).addClass("future");
      //console.log(inputForms);
      //note load the data from the local storage
      var savetext = JSON.parse(localStorage.getItem(i+9))
      $(inputForms[i]).val(savetext)
  };

// below code from Module
// var auditTask = function(taskEl) {
//   // get date from task element
//   var date = $(taskEl).find("span").text().trim();

//   // convert to moment object at 5:00pm
//   var time = moment(date, "L").set("hour", 17);

//   // remove any old classes from element
//   $(taskEl).removeClass("list-group-item-warning list-group-item-danger");

//   // apply new class if task is near/over due date
//   if (moment().isAfter(time)) {
//     $(taskEl).addClass("list-group-item-danger");
//   }
// };

//event listener with local storage
    //console.log(event);
  //save input to localstorage
$(document).ready(function() {
    $('.btn').on('click', function(event) {
      event.preventDefault();
      var toDoEntry = $(this).closest("div.input-group").find("input").val();
      //alert(toDoEntry);
      var datahour = $(this).closest("div.input-group").find("input").attr("data-hour");

      localStorage.setItem(datahour, JSON.stringify(toDoEntry))
      //console.log(toDoEntry);
      })
    })


//color code time blocks in past, present and future with Moment.js



//saved events persists even when page refreshed


//listen for save button clicks
//$("#save").on('click', function() {
//get nearby values -look into siblings and parents relationship in jQuery
//save in localStorage
//Show notifications that item was saved to localStorage by adding class .show
//Timeout to remove .show class after 5 seconds
  