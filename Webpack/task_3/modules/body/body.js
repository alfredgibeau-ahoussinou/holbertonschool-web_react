const $ = require('jquery');
const _ = require('lodash');
require('./body.css');

$('body').append('<button id="start-btn">Click here to get started</button>');
$('body').append("<p id='count'></p>");

let clickCount = 0;
function updateCounter() {
  clickCount += 1;
  $('#count').text(`${clickCount} clicks on the button`);
}

$('#start-btn').on('click', _.debounce(updateCounter, 500));
