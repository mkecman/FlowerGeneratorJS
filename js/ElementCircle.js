var ElementCircle = function( model )
{
	this.setup( model );
}

inheritsFrom(ElementCircle, Element);

ElementCircle.prototype.drawShape = function() 
{
	this.ctx.arc( this.model.size, this.model.size, this.model.size, 0, 2*Math.PI );
};
