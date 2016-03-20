window.onload = function()
{
	flower = new FlowerDrawer( document.getElementById("flower-canvas") );
	flower.setCTXSize( 1, 1 );

var options = {
		renderCallback: function($elm, toggled) {

			$('#main-canvas').css( "backgroundColor", $elm[0].style.backgroundColor );

		}
	};
	$('.color').colorPicker( options ); // that's it
	//drawFlower();
};

function drawFlower() 
{
	var model = new ElementModel( flower.width / 2, flower.height / 2, flowerModel.size, false );
	var element = new ElementCircle( flower.ctx, model );
	var rectangle = new ElementRectangle( flower.ctx, model );
	flower.clear();
	flower.draw( element, flowerModel.distance, flowerModel.sides, 0, flowerModel.waves );
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

});
       
