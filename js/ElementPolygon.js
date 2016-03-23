var ElementPolygon = function( model )
{
	this.setup( model );
}

inheritsFrom(ElementPolygon, Element);

ElementPolygon.prototype.drawShape = function() 
{
	// hexagon
	var numberOfSides = this.model.polygons,
	    size = this.model.size,
	    Xcenter = this.model.size,
	    Ycenter = this.model.size;
	 
	this.ctx.beginPath();
	this.ctx.moveTo (Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));          
	 
	for (var i = 1; i <= numberOfSides;i += 1) {
	    this.ctx.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
	}
};