var ENABLE_ANIMATIONS = false;

var inheritsFrom = function (child, parent) {
    child.prototype = Object.create(parent.prototype);
};

var flower;
var flowerModel = 
{
	size: 50,
	distance: 50,
	sides: 3,
	waves: 3
}