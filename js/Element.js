var Element = function( ctx, model )
{
	this.ctx = ctx;
	this.model = model;
}

Element.prototype.draw = function() 
{
	this.ctx.beginPath();
	this.ctx.strokeStyle = this.model.color;
	this.drawShape();
	if( this.model.fill )
		this.ctx.fill();
	else
		this.ctx.stroke();
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
