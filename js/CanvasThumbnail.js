var CanvasThumbnail = function()
{
	this.canvas50 = document.createElement('canvas');
	this.canvasFinal = document.createElement('canvas');
}

CanvasThumbnail.prototype.make = function( originalCanvas, newWidth ) 
{
	this.canvas50.width = originalCanvas.width;
	this.canvas50.height = originalCanvas.height;
	var newCanvas = originalCanvas;
	var targetScale = newWidth / originalCanvas.width;
	var scale = 1;
	while( scale / 2 > targetScale )
	{
		scale = scale / 2;
		newCanvas = this.scaleDown( newCanvas, scale );
	}

	this.canvasFinal.width = newWidth;
	this.canvasFinal.height = newWidth / ( originalCanvas.width / originalCanvas.height );
	
	this.canvasFinal.getContext("2d").drawImage
	(
		newCanvas,
		0,0,
		originalCanvas.width * scale,
		originalCanvas.height * scale,
		0,0,
		this.canvasFinal.width,
		this.canvasFinal.height
	);

	return this.canvasFinal;
};

CanvasThumbnail.prototype.scaleDown = function( originalCanvas, scale ) 
{
	var newWidth = originalCanvas.width * scale;
	var newHeight = originalCanvas.height * scale;

	this.canvas50.getContext("2d").drawImage
	(
		originalCanvas,
		0,0,
		newWidth * 2,
		newHeight * 2,
		0,0,
		newWidth,
		newHeight
	);
	return this.canvas50;
};