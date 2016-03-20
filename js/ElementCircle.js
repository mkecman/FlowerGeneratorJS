var ElementCircle = function( ctx, model )
{
	this.ctx = ctx;
	this.model = model;
}

inheritsFrom(ElementCircle, Element);

ElementCircle.prototype.drawShape = function() 
{
	this.ctx.arc( this.model.x, this.model.y, this.model.radius, 0, 2*Math.PI );
};
