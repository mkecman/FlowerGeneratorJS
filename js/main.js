window.onload = function()
{
	flower = new FlowerDrawer( document.getElementById("flower-canvas") );
	flower.setCTXSize( 0.9, 0.7 );
};

function drawFlower() 
{
	var model = new ElementModel( flower.width / 2, flower.height / 2, 55, false );
	var element = new ElementCircle( flower.ctx, model );
	flower.draw( element, 50, 6, 0, 3 );
}

