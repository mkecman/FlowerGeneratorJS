window.onload = function()
{
	flower = new FlowerDrawer( document.getElementById("flower-canvas") );
	flower.maximizeCanvas();
	setupColorPickers();
	drawFlower();
};

function drawFlower() 
{
	var model = new ElementModel( flower.width / 2, flower.height / 2, flowerModel.size, false, lineColor );
	var element = new ElementCircle( flower.ctx, model );
	var rectangle = new ElementRectangle( flower.ctx, model );
	flower.clear();
	flower.draw( element, flowerModel.distance, flowerModel.sides, flowerModel.rotation, flowerModel.waves );
}

var toolbarActive = true;
function toggleToolbar() 
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

var lineColor = "";
function setupColorPickers() 
{
	var options = 
	{ 	renderCallback: function($elm, toggled) 
		{ 
			if( $elm[0] === $('#backgroundColorPicker')[0] )
				$('#main-canvas').css( "backgroundColor", $elm[0].style.backgroundColor ); 

			if( $elm[0] === $('#lineColorPicker')[0] )
			{
				lineColor = $elm[0].style.backgroundColor;
				drawFlower();
			}
		} 
	};
	$('.color').colorPicker( options );

	$('#main-canvas').css( "backgroundColor", $('#backgroundColorPicker')[0].value );
	lineColor = $('#lineColorPicker')[0].value;
}

$(function() 
{
    var sliderSizeLabel = $( "#sliderSizeLabel" );
    var slider = $( "<div id='slider'></div>" ).insertAfter( sliderSizeLabel ).slider(
    {
      min: 1,
      max: 200,
      range: "min",
      value: 50,
      slide: function( event, ui ) 
      {
        flowerModel.size = ui.value;
        sliderSizeLabel.text( "Size: " + ui.value );
        drawFlower();
      }
    });
    sliderSizeLabel.text( "Size: " + 50 );

    var sliderDistanceLabel = $( "#sliderDistanceLabel" );
    var slider = $( "<div id='slider'></div>" ).insertAfter( sliderDistanceLabel ).slider(
    {
      min: 1,
      max: 200,
      range: "min",
      value: 50,
      slide: function( event, ui ) 
      {
        flowerModel.distance = ui.value;
        sliderDistanceLabel.text( "Distance: " + ui.value );
        drawFlower();
      }
    });
    sliderDistanceLabel.text( "Distance: " + 50 );

    var sliderSidesLabel = $( "#sliderSidesLabel" );
    var slider = $( "<div id='slider'></div>" ).insertAfter( sliderSidesLabel ).slider(
    {
      min: 1,
      max: 12,
      range: "min",
      value: 3,
      slide: function( event, ui ) 
      {
        flowerModel.sides = ui.value;
        sliderSidesLabel.text( "Sides: " + ui.value );
        drawFlower();
      }
    });
    sliderSidesLabel.text( "Sides: " + 3 );

    var sliderWavesLabel = $( "#sliderWavesLabel" );
    var slider = $( "<div id='slider'></div>" ).insertAfter( sliderWavesLabel ).slider(
    {
      min: 1,
      max: 7,
      range: "min",
      value: 3,
      slide: function( event, ui ) 
      {
        flowerModel.waves = ui.value;
        sliderWavesLabel.text( "Waves: " + ui.value );
        drawFlower();
      }
    });
    sliderWavesLabel.text( "Waves: " + 3 );

    var sliderRotationLabel = $( "#sliderRotationLabel" );
    var slider = $( "<div id='slider'></div>" ).insertAfter( sliderRotationLabel ).slider(
    {
      min: 0,
      max: Math.PI,
      step: 0.02,
      range: "min",
      value: 0,
      slide: function( event, ui ) 
      {
        flowerModel.rotation = ui.value;
        sliderRotationLabel.text( "Rotation: " + ui.value );
        drawFlower();
      }
    });
    sliderRotationLabel.text( "Rotation: " + 0 );

});
       
