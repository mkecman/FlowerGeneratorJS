var ElementRectangle = function( ctx, model )
{
	this.ctx = ctx;
	this.model = model;
}

inheritsFrom(ElementRectangle, Element);

ElementRectangle.prototype.drawShape = function() 
{
	var ofset = this.model.radius / 2;
	this.ctx.strokeRect( this.model.x - ofset, this.model.y - ofset, this.model.radius, this.model.radius );
};