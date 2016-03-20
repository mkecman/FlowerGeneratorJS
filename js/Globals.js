var ENABLE_ANIMATIONS = false;

var flower;
var flowerModel = 
{
	size: 50,
	distance: 50,
	sides: 3,
	waves: 3,
	rotation: 0
}

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
