var FlowerDrawer = function( canvas, model )
{
	this.ctx = canvas.getContext("2d");
	this.model = model;
	this.elementsDict = {};
	this.elementsArray = [];
	this.maximizeCanvas();
}

FlowerDrawer.prototype.prepareDrawing = function() 
{
	this.elementsDict = {};
	this.elementsArray = [];
	this.new = 0;
	this.duplicate = 0;
	this.wave = 0;
	var elements = [ { x: this.width / 2, y: this.height / 2, color: this.model.colors[ 0 ], wave:0 } ];
	this.angularIncrement = ( 2 * Math.PI ) / this.model.sides;

	this.addWave( elements, 0 );
};

FlowerDrawer.prototype.addWave = function( elements, wave ) 
{
	var elementsInWave = [];
	for (var i = 0; i < elements.length; i++) 
	{
		elementsInWave = elementsInWave.concat( this.prepareModels( elements[i].x, elements[i].y, wave ) );
	}
	wave++;
	if( wave < this.model.waves )
		this.addWave( elementsInWave, wave );
};

FlowerDrawer.prototype.prepareModels = function( startX, startY, wave ) 
{
	var elementsInStep = [];
	var angle, x, y, tempObject;
	
	for (var i = 0; i < this.model.sides; i++) 
	{
		angle = this.model.rotation + ( i * this.angularIncrement );
		x = Math.floor( this.model.distance * Math.cos( angle ) + startX );
		y = Math.floor( this.model.distance * Math.sin( angle ) + startY );
		
		if( this.elementsDict[ x ] == undefined )
			this.elementsDict[ x ] = [];
		
		if( !this.checkIfExist( x, y, 5 ) )
		{
			this.new++;
			tempObject = { x: x, y: y, color: this.model.colors[ wave ], wave:wave };
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
	if( this.model.clear )
		this.clear();

	this.ctx.fillStyle = this.model.bg_color;
	this.ctx.fillRect( 0, 0, this.width, this.height );

	element.updateCanvas();
	this.mainElement = element;
	this.currentElementIndex = 0;
	this.drawMultiElement();
};

FlowerDrawer.prototype.drawMultiElement = function() 
{
	for (var i = 0; i < ELEMENTS_DRAWN_FRAME; i++) 
	{
		this.drawElement();
	}
	if( this.currentElementIndex < this.elementsArray.length )
		requestAnimationFrame( function(){ this.flower.drawMultiElement() } );
};

FlowerDrawer.prototype.drawElement = function() 
{
	if( this.currentElementIndex >= this.elementsArray.length )
		return;

	var elementModel = this.elementsArray[ this.currentElementIndex ];
	this.mainElement.update( elementModel );
	this.ctx.drawImage( this.mainElement.canvas, elementModel.x - this.mainElement.model.size, elementModel.y - this.mainElement.model.size );
	this.currentElementIndex++;
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