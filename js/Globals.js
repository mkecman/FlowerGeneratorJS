var ENABLE_ANIMATIONS = false;
var DEBUG = false;
var ELEMENTS_DRAWN_FRAME = 10000;

window.requestAnimationFrame = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(f){return setTimeout(f, 1000/60)} // simulate calling code 60 
 
window.cancelAnimationFrame = window.cancelAnimationFrame
    || window.mozCancelAnimationFrame
    || function(requestID){clearTimeout(requestID)} //fall back

var inheritsFrom = function (child, parent) {
    child.prototype = Object.create(parent.prototype);
};

var round = function( number )
{
	return ~~( 0.5 + number );
}

var _logm = function()
{
	var i;
	var output = "";
    for (i = 0; i < arguments.length; i++) 
    {
    	output += arguments[ i ] + " : ";
    }
	console.log( output );
}

var getRandomInt = function(min, max) 
{
  if ( min < 0 ) min = 0;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function median(sequence) 
{
  sequence.sort();
  return sequence[Math.ceil(sequence.length / 2)];
}
