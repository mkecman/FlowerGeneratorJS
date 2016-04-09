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
			var index = $elm.attr('id').charAt(6);
			if( $.isNumeric( index ) )
				flowerModel.colors[ index ] = $elm.css( "backgroundColor" );
			else
				flowerModel.bg_color = $('#backgroundColorPicker').val();
			
			drawFlower();
		},
		opacity:false
	};
	$('#backgroundColorPicker').val( flowerModel.bg_color );
	$('#backgroundColorPicker').colorPicker( options );

	generateCPs( 7 );
	setupCPs( 7 );
}

function generateCPs( amount ) 
{
	var output = "";
	for (var i = 0; i < amount; i++) 
	{
		output += '<div style="padding-top: 3px;"><label>#'+ (i+1) +' Wave Color:</label><input id="waveCP'+ i +'" value="'+ flowerModel.colors[ i ] +'" /><br/></div>';
	}
	$('#waveColors').html( output );
}

function setupCPs( amount ) 
{
	for (var i = 0; i < amount; i++) 
	{
		$('#waveCP'+i ).colorPicker();
	}
}

function setupColorPicker( wave ) 
{
	var tempHtml = '<label>#1 Wave Color:</label><input id="waveCP" value="" />';
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
