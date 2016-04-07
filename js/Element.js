var Element = function( model )
{
	this.setup( model )
}

Element.prototype.setup = function( model ) 
{
	this.canvas = document.createElement('canvas');
	this.canvas.width = model.size*2;
	this.canvas.height = model.size*2;
	this.ctx = this.canvas.getContext("2d");
	this.model = model;
};

Element.prototype.updateCanvas = function() 
{
	this.canvas.width = this.model.size * 2;
	this.canvas.height = this.model.size * 2;
};

Element.prototype.draw = function( newModel ) 
{
	this.ctx.clearRect( 0, 0, this.canvas.width, this.canvas.height );
	this.ctx.beginPath();

	this.ctx.strokeStyle = this.model.color;
	this.ctx.fillStyle = this.model.color;
	this.drawShape();

	if( this.model.fill )
	{
		this.ctx.globalAplha = tinycolor( this.model.color ).getAlpha();
		this.ctx.fill();
		this.ctx.globalAplha = 1;
	}
	else
		this.ctx.stroke();

	if( DEBUG )
	{
		this.ctx.font="16px Arial";
		//var text = newModel.x + "," + newModel.y;
		var text = newModel.wave;
		this.ctx.fillStyle = 'black';
		this.ctx.fillText( text, ( this.canvas.width / 2 ) - ( this.ctx.measureText( text ).width / 2 ), this.canvas.height / 2 );
	}
};

Element.prototype.update = function( newModel ) 
{
	var changed = false;
	
	if( newModel.size != undefined && this.model.size != newModel.size )
	{
		changed = true;
		this.model.size = newModel.size;
	}
	if( newModel.color != undefined && this.model.color != newModel.color )
	{
		changed = true;
		this.model.color = newModel.color;
	}
	if( newModel.fill != undefined && this.model.fill != newModel.fill )
	{
		changed = true;
		this.model.fill = newModel.fill;
	}
	
	if( changed )
	{	
		this.draw( newModel );
	}
};

Element.prototype.drawShape = function() 
{
	//implement your own
};