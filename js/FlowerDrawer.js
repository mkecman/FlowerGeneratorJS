var FlowerDrawer = function( canvas )
{
	this.ctx = canvas.getContext("2d");
	this.elementsDict = {};
	this.elementsArray = [];
}

FlowerDrawer.prototype.prepareDrawing = function( startX, startY, distance, sides, startingAngle, waves, color ) 
{
	this.elementsDict = {};
	this.elementsArray = [];
	color = tinycolor( color );
	this.colors = color.analogous().map(function(t) { t.setAlpha( color.getAlpha() ); return t.toRgbString(); });
	this.prepareModels( startX, startY, distance, sides, startingAngle, waves );
};

FlowerDrawer.prototype.prepareModels = function( startX, startY, distance, sides, startingAngle, waves ) 
{
	waves--;
	var angularIncrement = ( 2 * Math.PI ) / sides;
	var elementsInStep = [];
	var tempObject;
	
	for (var i = 0; i < sides; i++) 
	{
		var angle = startingAngle + ( i * angularIncrement );
		var x = round( distance * Math.cos( angle ) + startX );
		var y = round( distance * Math.sin( angle ) + startY );

		tempObject = { x: x, y: y, color: this.colors[ waves % this.colors.length-1 ] };
		//tempObject = { x: x, y: y, color: tinycolor.random() };
		elementsInStep.push( tempObject );

		x = Math.floor( x / 10 );
		y = Math.floor( y / 10 );

		if( this.elementsDict[ x ] == undefined )
			this.elementsDict[ x ] = [];
		
		if( this.elementsDict[ x ][ y ] == undefined )
		{
			this.elementsDict[ x ][ y ] = tempObject;
			this.elementsArray.push( tempObject );
		}
	}
	if( waves > 0 )
	{
		for (i = 0; i < elementsInStep.length; i++) 
		{
			this.prepareModels( elementsInStep[ i ].x, elementsInStep[ i ].y, distance, sides, startingAngle, waves );
		}
	}
};

FlowerDrawer.prototype.draw = function( element ) 
{
	var elementModel;
	for (var i = 0; i < this.elementsArray.length; i++) 
	{
		elementModel = this.elementsArray[ i ];
		element.update( { color: elementModel.color } );
		this.ctx.drawImage( element.canvas, elementModel.x - element.model.size, elementModel.y - element.model.size );
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