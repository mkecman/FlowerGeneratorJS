var ElementHexagon = function( model )
{
	this.setup( model );
}

inheritsFrom(ElementHexagon, Element);

ElementHexagon.prototype.drawShape = function() 
{
	var x = 0;
	var y = 0;

	var hexHeight,
        hexRadius,
        hexRectangleHeight,
        hexRectangleWidth,
        hexagonAngle = 0.523598776, // 30 degrees in radians
        sideLength = this.model.size,
        boardWidth = 10,
        boardHeight = 10;

    hexHeight = Math.sin(hexagonAngle) * sideLength;
    hexRadius = Math.cos(hexagonAngle) * sideLength;
    hexRectangleHeight = sideLength + 2 * hexHeight;
    hexRectangleWidth = 2 * hexRadius;

	this.ctx.beginPath();
    this.ctx.moveTo(x + hexRadius, y);
    this.ctx.lineTo(x + hexRectangleWidth, y + hexHeight);
    this.ctx.lineTo(x + hexRectangleWidth, y + hexHeight + sideLength);
    this.ctx.lineTo(x + hexRadius, y + hexRectangleHeight);
    this.ctx.lineTo(x, y + sideLength + hexHeight);
    this.ctx.lineTo(x, y + hexHeight);
    this.ctx.closePath();
};