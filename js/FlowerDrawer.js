var FlowerDrawer = function( canvas )
{
	this.ctx = canvas.getContext("2d");
}

FlowerDrawer.prototype.draw = function( element, distance, sides, startingAngle, waves ) 
{
	waves--;
	
	var angularIncrement = ( 2 * Math.PI ) / sides;
	var originalX = element.model.x;
	var originalY = element.model.y;

	for (var i = 0; i < sides; i++) 
	{
		var angle = startingAngle + ( i * angularIncrement );
		var x = distance * Math.cos( angle ) + originalX;
		var y = distance * Math.sin( angle ) + originalY;
		element.clone( x, y );
		if( waves > 0 )
		{
			this.draw( element, distance, sides, startingAngle, waves );
		}
	}
};

FlowerDrawer.prototype.setCTXSize = function( widthScale, heightScale ) 
{
	this.width = window.innerWidth * widthScale;
	this.height = window.innerHeight * heightScale;
	this.ctx.width  = this.width;
	this.ctx.height = this.height;
	this.ctx.canvas.width  = this.width;
	this.ctx.canvas.height = this.height;
};