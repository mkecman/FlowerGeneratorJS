var FlowerDrawer = function( canvas )
{
	this.ctx = canvas.getContext("2d");
	this.elementsDict = {};
	this.elementsArray = [];
	this.colors = randomColor({hue: 'random',luminosity: 'light',count: 7});
}

FlowerDrawer.prototype.prepareDrawing = function( startX, startY, distance, sides, startingAngle, waves, color ) 
{
	this.elementsDict = {};
	this.elementsArray = [];
	color = tinycolor( color );
	/*this.colors = color.tetrad().map(function(t) { t.setAlpha( color.getAlpha() ); return t.toRgbString(); });
	var color2 = tinycolor( color.monochromatic() );
	var colors2 = color2.tetrad().map(function(t) { t.setAlpha( color.getAlpha() ); return t.toRgbString(); });
	this.colors = this.colors.concat( colors2 );
	*/


	this.new = 0;
	this.duplicate = 0;
	this.wave = 0;
	this.maxWaves = waves;
	var elements = [ { x: startX, y: startY, color: this.colors[ 1 % (this.colors.length - 1) ], wave:0 } ];
	this.addWave( elements, distance, sides, startingAngle, 0 );

};

FlowerDrawer.prototype.addWave = function( elements, distance, sides, startingAngle, wave ) 
{
	var elementsInWave = [];
	for (var i = 0; i < elements.length; i++) 
	{
		elementsInWave = elementsInWave.concat( this.prepareModels( elements[i].x, elements[i].y, distance, sides, startingAngle, wave ) );
	}
	wave++;
	if( wave < this.maxWaves )
		this.addWave( elementsInWave, distance, sides, startingAngle, wave );
};

FlowerDrawer.prototype.prepareModels = function( startX, startY, distance, sides, startingAngle, wave ) 
{
	var angularIncrement = ( 2 * Math.PI ) / sides;
	var elementsInStep = [];
	var tempObject;
	
	for (var i = 0; i < sides; i++) 
	{
		var angle = startingAngle + ( i * angularIncrement );
		var x = Math.floor( distance * ( ( Math.cos( angle ) * 1 ) / 1 ) + startX );
		var y = Math.floor( distance * ( ( Math.sin( angle ) * 1 ) / 1 ) + startY );
		
		tempObject = { x: x, y: y, color: this.colors[ (wave + 1) % (this.colors.length - 1) ], wave:wave };
		
		if( this.elementsDict[ x ] == undefined )
			this.elementsDict[ x ] = [];
		
		if( !this.checkIfExist( x, y, 3 ) )
		{
			this.new++;
			this.elementsDict[ x ][ y ] = tempObject;
			this.elementsArray.push( tempObject );
			elementsInStep.push( tempObject );
		}
		else
		{
			this.duplicate++;
		}
	}

	return elementsInStep;
};

FlowerDrawer.prototype.checkIfExist = function( x, y, range ) 
{
	var exists = false;

	for (var i = x - range; i <= x + range; i++) 
	{
		if( this.elementsDict[ i ] != undefined )
		{
			for (var j = y - range; j <= y + range; j++) 
			{
				if( this.elementsDict[ i ][ j ] != undefined )
					return true;
			}
		}
	}

	return false;
};

FlowerDrawer.prototype.draw = function( element ) 
{
	//_logm( this.new, this.duplicate );
	var elementModel;
	for( var i = 0; i < this.elementsArray.length; i++ )
	{
		elementModel = this.elementsArray[ i ];
		element.update( elementModel );
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