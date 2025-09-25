const $ = require('jquery');
require('./header.css');

console.log('Init header');
$('body').prepend('<div id="logo"></div>');
$('body').append('<h1>Holberton Dashboard</h1>');
