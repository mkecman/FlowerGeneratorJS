var Element = function( ctx, model )
{
	this.ctx = ctx;
	this.model = model;
}

Element.prototype.draw = function() 
{
	this.ctx.beginPath();
	this.drawShape();
	if( this.model.fill )
		this.ctx.fill();
	else
		this.ctx.stroke();
};

Element.prototype.drawShape = function() 
{
	//this.ctx.arc( this.model.x, this.model.y, this.model.radius, 0, 2*Math.PI );
};

Element.prototype.clone = function( x, y ) 
{
	this.model.x = x;
	this.model.y = y;
	this.draw();
};
