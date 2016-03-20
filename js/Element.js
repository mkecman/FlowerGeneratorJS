var Element = function( model )
{
	this.setup( model )
}

Element.prototype.setup = function( model ) 
{
	this.canvas = document.createElement('canvas');
	//this.canvas = document.getElementById("element-canvas");
	this.canvas.width = model.size*2;
	this.canvas.height = model.size*2;
	this.ctx = this.canvas.getContext("2d");
	this.model = model;
};

Element.prototype.draw = function() 
{
	//this.ctx.clearRect( 0, 0, this.model.size, this.model.size );
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
		this.draw();
	}
};

Element.prototype.drawShape = function() 
{
	//implement your own
};

Element.prototype.clone = function( x, y ) 
{
	this.model.x = x;
	this.model.y = y;
	this.draw();
};
