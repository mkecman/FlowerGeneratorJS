var flower;
var flowerModel = 
{
	size: 100,
	distance: 100,
	sides: 6,
	waves: 4,
	rotation: 0,
	polygons: 10,
	fill: false,
	clear: true
}
var elementPolygon;
var elementCircle;

window.onload = function()
{
	uiSetup();

	elementCircle = new ElementCircle( flowerModel );
	elementPolygon = new ElementPolygon( flowerModel );

	flower = new FlowerDrawer( document.getElementById( "flower-canvas" ), flowerModel );
	drawFlower();
};

function drawFlower() 
{
	flower.prepareDrawing();
	
	if( flowerModel.polygons == 10 )
		flower.draw( elementCircle );
	else
		flower.draw( elementPolygon );
	
	//var t0 = performance.now();
	//var t1 = performance.now();
	//return (t1 - t0).toFixed(2);
}

function handleResize() 
{
	flower.maximizeCanvas();
	drawFlower();
}

