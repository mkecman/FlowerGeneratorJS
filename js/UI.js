function uiSetup()
{
	uiSetupColorPickers();
	uiSetupSliders();
}

function uiSetupSliders() 
{
	setupSlider( "sliderSizeLabel", 	"size", 	1, 200, 	flowerModel.size );
	setupSlider( "sliderDistanceLabel", "distance", 1, 200, 	flowerModel.distance );
	setupSlider( "sliderPolygonsLabel", "polygons", 2, 10, 		flowerModel.polygons );
	setupSlider( "sliderSidesLabel", 	"sides", 	1, 12, 		flowerModel.sides );
	setupSlider( "sliderWavesLabel", 	"waves", 	1, 7, 		flowerModel.waves );
	setupSlider( "sliderRotationLabel", "rotation", 0, Math.PI, flowerModel.rotation, 0.02 );
}

var lineColor = "";
function uiSetupColorPickers() 
{
	var options = 
	{ 	
		renderCallback: function($elm, toggled) 
		{ 
			if( $elm[0] === $('#backgroundColorPicker')[0] )
				$('#main-canvas').css( "backgroundColor", $elm[0].style.backgroundColor ); 

			if( $elm[0] === $('#lineColorPicker')[0] )
			{
				lineColor = $elm[0].value;
				drawFlower();
			}
		} 
	};
	$('.color').colorPicker( options );

	$('#main-canvas').css( "backgroundColor", $('#backgroundColorPicker')[0].value );
	lineColor = $('#lineColorPicker')[0].value;
}

var toolbarActive = true;
function uiToggleToolbar() 
{
	if( toolbarActive )
	{
		$("#toolbar").css( { "width": 70, "height": 15 } );
		toolbarActive = false;
	}
	else
	{
		$("#toolbar").css( { "width": 250, "height": "auto" } );
		toolbarActive = true;
	}
}

function uiToggleFill() 
{
	if( $('#fill').prop('checked') )
		flowerModel.fill = true;
	else 
		flowerModel.fill = false;

	drawFlower();
}

function uiToggleClear() 
{
	if( $('#clear').prop('checked') )
		flowerModel.clear = true;
	else 
		flowerModel.clear = false;

	drawFlower();
}

function setupSlider( label, property, min, max, value, step ) 
{
	if( step == undefined )
		step = 1;

	var labelObj = $( "#"+label );
	var slider = $( "<div id='slider"+ property +"'></div>" ).insertAfter( labelObj ).slider(
	{
		min: min,
		max: max,
		range: "min",
		step: step,
		value: value,
		slide: function( event, ui ) 
		{
			flowerModel[ property ] = ui.value;
			labelObj.text( property + ": " + ui.value );
			drawFlower();
		}
	});
	labelObj.text( property + ": " + value );
}
