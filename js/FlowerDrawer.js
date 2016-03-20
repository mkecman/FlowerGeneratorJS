var FlowerDrawer = function( canvas )
{
	this.ctx = canvas.getContext("2d");
	this.lineColor = 0;
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

FlowerDrawer.prototype.clear = function() 
{
	this.ctx.clearRect( 0, 0, this.width, this.height );
};

FlowerDrawer.prototype.maximizeCanvas = function() 
{
	this.width = window.innerWidth;
	this.height = window.innerHeight;

	this.ctx.width  = this.width;
	this.ctx.height = this.height;
	this.ctx.canvas.width  = this.width;
	this.ctx.canvas.height = this.height;
};