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
	clear: true,
	bg_color: "#4F575F",
	colors: randomColor({hue: 'random',luminosity: 'light',count: 7})
}
var elementPolygon;
var elementCircle;
var thumbnailer;

php.complete = function(XMLHttpRequest, textStatus) 
{
	$('#flower-name').val("");
	$('#save-button').html("SAVED!");
};
php.error = function(xmlEr, typeEr, except) 
{
	alert(xmlEr);
};

window.onload = function()
{
	uiSetup();

	elementCircle = new ElementCircle( flowerModel );
	elementPolygon = new ElementPolygon( flowerModel );

	thumbnailer = new CanvasThumbnail();

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

function handleFormSubmit() 
{
	//console.log( /^[a-zA-Z0-9_-]+$/.test( $('#flower-name').val() ) ); //checks for valid name input, but html is already doing it for us :)

	if( $('#save-button').html() == "SAVE")
	{
		$('#save-button').html("SAVING");

		var values = $('#flower-form').serializeArray();
		values.push( { name:"json", value:JSON.stringify( flowerModel ) } );
		values.push( { name:"image", value:$("#flower-canvas")[0].toDataURL("image/png") } );
		var thumb = thumbnailer.make( $("#flower-canvas")[0], 200 );
		values.push( { name:"thumb", value: thumb.toDataURL("image/png") } );
		$.php('php/SaveFlower.php', values );
	}
}

function handleNameChange() 
{
	if( $('#save-button').html() != "SAVE")
		$('#save-button').html("SAVE");
}

function handleResize() 
{
	flower.maximizeCanvas();
	drawFlower();
}