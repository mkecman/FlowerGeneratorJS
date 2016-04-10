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
var gallery;
var flowers;

php.messages.statsSaved = function (msg, params)
{
	loadGallery( $('#order-dropdown').val() );
}

php.messages.galleryData = function (msg, params)
{
	flowers = JSON.parse( msg );
	gallery.draw( flowers );
}

php.messages.flowerSaved = function (msg, params)
{
	$('#flower-name').val("");
	$('#save-button').html("SAVED!");
	loadGallery( $('#order-dropdown').val() );
}

php.complete = function(XMLHttpRequest, textStatus) 
{
	
};
php.error = function(xmlEr, typeEr, except) 
{
	console.log(xmlEr);
};

window.onload = function()
{
	uiSetup();

	elementCircle = new ElementCircle( flowerModel );
	elementPolygon = new ElementPolygon( flowerModel );

	thumbnailer = new CanvasThumbnail();
	gallery = new FlowerGallery( "gallery-wrapper" );

	flower = new FlowerDrawer( document.getElementById( "flower-canvas" ), flowerModel );
	drawFlower();

	loadGallery( $('#order-dropdown').val() );
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

function likeFlower( id ) 
{
	updateFlowerStats( id, "likes" );
}

function openFlower( id ) 
{
	var currentFlower;
	for (var i = 0; i < flowers.length; i++) 
	{
		if( flowers[ i ].id == id )
		{
			currentFlower = flowers[ i ];
			break;
		}
	}
	if( currentFlower != undefined )
	{
		updateFlowerStats( id, "views" );
		flower.clear();
		updateFlowerModel( currentFlower.json );
		drawFlower();
	}
	else
		alert("Ooouuups! Couldn't find this flower...");

}

function updateFlowerStats( id, stat ) 
{
	var values = 
	[
		{ name:"id", value:id },
		{ name:"stat", value:stat }
	];
	$.php('php/SaveFlowerStats.php', values );
}

function updateFlowerModel( json ) 
{
	var model = JSON.parse( json );
	
	updateUI( model );
	
	for (var prop in model) 
	{
		if(!model.hasOwnProperty(prop)) continue;
		flowerModel[ prop ] = model[ prop ];
	}
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

function handleOrderChange() 
{
	loadGallery( $('#order-dropdown').val() );
}

function handleResize() 
{
	flower.maximizeCanvas();
	drawFlower();
}

function loadGallery( order ) 
{
	$.php('php/Gallery.php', [ { name:"order", value:order } ] );
}