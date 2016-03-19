var ElementCircle = function( ctx, model )
{
	this.ctx = ctx;
	this.model = model;
}

ElementCircle.prototype.draw = function() 
{
	this.ctx.beginPath();
	this.ctx.arc( this.model.x, this.model.y, this.model.radius, 0, 2*Math.PI );
	if( this.model.fill )
		this.ctx.fill();
	else
		this.ctx.stroke();
};

ElementCircle.prototype.clone = function( x, y ) 
{
	this.model.x = x;
	this.model.y = y;
	this.draw();
};

