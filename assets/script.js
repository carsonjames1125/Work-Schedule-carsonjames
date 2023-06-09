// need an if statement to link the current time to the color of the block
// need a day.js function to always keep the updated time in the document
// need a function that save the data entered to the local storage and saves the itmes in the text area through a refresh event
// also need to be able to dynamically change the classes linked to the colors to ensure that as time moves the colors change. 
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// variables for the time and where is will be stored. 
var rightNow = dayjs();
var headerTimeEl = document.querySelector('.time');

// clock display in the header
$(headerTimeEl).text(rightNow.format('dddd MM-DD-YYYY hh:mm:ss'));

// local storage and event listeners for the save button

$('.saveBtn').on('click', function() {
  // variable for the text area contents .val() pulls the exact value from the box located in the .events class
  var textArea = $(this).siblings('.events').val();
  //variable for the id descriptor, pulls the text from the id. i.e. 9am, 10am, 11am, etc. 
  var timeSlot = $(this).parent().attr('id');
  

  localStorage.setItem(timeSlot, textArea);
  // this is how the local storage with log the values entered into the text blocks.

});

// Now need to work on setting up a way to grab the items in the local storage by their id and class for the above function

$('#9-am .events').val(localStorage.getItem('9-am'));
$('#10-am .events').val(localStorage.getItem('10-am'));
$('#11-am .events').val(localStorage.getItem('11-am'));
$('#12-pm .events').val(localStorage.getItem('12-pm'));
$('#1-pm .events').val(localStorage.getItem('1-pm'));
$('#2-pm .events').val(localStorage.getItem('2-pm'));
$('#3-pm .events').val(localStorage.getItem('3-pm'));
$('#4-pm .events').val(localStorage.getItem('4-pm'));
$('#5-pm .events').val(localStorage.getItem('5-pm'));
$('#6-pm .events').val(localStorage.getItem('6-pm'));
// this grabs the time from the time block and what ever description is and was in that text area. 
// and updates accordingly if values are changed


  // need a variable to determine the time
  // var currentTime = dayjs('hours');

  $('.time-block').each(function () {
    // send the function through a loop for all times listed
    var schTime = $(this).attr("id").split("-")[0];
    var currentTime = dayjs().format('h');
    // if the time block equals the current time it'll give the class present and remove future or past as the class
    if (schTime < currentTime) {  
      $(this).addClass('past');
      $(this).removeClass('future');
      $(this).removeClass('present');
    } else if (schTime === currentTime) {
      $(this).removeClass('future');
      $(this).removeClass('past');
      $(this).addClass('present');
    } else  if (schTime > currentTime) {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
      // could not get function to work and update the colors for the time. 
    }
  });



