var ElementRectangle = function( model )
{
	this.setup( model );
}

inheritsFrom(ElementRectangle, Element);

ElementRectangle.prototype.drawShape = function() 
{
	var ofset = this.model.size / 2;
	this.ctx.strokeRect( ofset, ofset, this.model.size, this.model.size );
};